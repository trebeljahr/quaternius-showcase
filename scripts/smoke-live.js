// Smoke test for the deployed site: every sitemap URL answers 200, every pack
// page draws a model without console errors, and the sidebar lists every pack.
//
// The pack list comes from src/components/quaternius, so a pack that never
// made it into the deployed sitemap or sidebar fails the run.
//
// Playwright is not a dependency of this repo. Run from the repo root:
//   npx -y -p playwright-core node scripts/smoke-live.js [path ...]
// If it asks for a browser: npx -y playwright-core install chromium
//
// SITE_URL=http://localhost:4567 tests a local `pnpm preview` instead.
// SMOKE_SHOTS=some/dir keeps one canvas screenshot per pack.
const { mkdirSync, readdirSync } = require("node:fs");
const { delimiter, join } = require("node:path");

const SITE_URL = (process.env.SITE_URL || "https://quaternius.trebeljahr.com").replace(/\/$/, "");
const PACKS_DIR = join(process.cwd(), "src", "components", "quaternius");
const SHOTS_DIR = process.env.SMOKE_SHOTS;

// Stubbed, so a run adds no pageviews to Plausible or Google Analytics.
const ANALYTICS = /plausible\.trebeljahr\.com|googletagmanager\.com|google-analytics\.com/;

// The smallest first model, an arrow seen end-on while it rotates, still
// covers about 700 of the 1280x800 pixels. An empty scene covers none.
const MIN_MODEL_PIXELS = 100;

// `npx -p playwright-core node ...` puts the package's .bin on PATH but not on
// the module path, so look next to every node_modules/.bin as well.
function loadPlaywright() {
  const besideBins = (process.env.PATH || "")
    .split(delimiter)
    .filter((dir) => dir.endsWith(join("node_modules", ".bin")))
    .map((dir) => join(dir, "..", "playwright-core"));

  for (const candidate of ["playwright-core", ...besideBins]) {
    try {
      return require(candidate);
    } catch {
      // Not here, try the next location.
    }
  }

  console.error(
    "playwright-core not found. Run: npx -y -p playwright-core node scripts/smoke-live.js",
  );
  process.exit(1);
}

async function sitemapPaths() {
  const response = await fetch(`${SITE_URL}/sitemap.xml`);
  if (!response.ok) throw new Error(`sitemap.xml answered ${response.status}`);
  const xml = await response.text();
  return [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map(([, loc]) => new URL(loc).pathname);
}

// Counts canvas pixels that differ from the background. The DOM chrome is
// hidden for the screenshot so buttons and the leva panel do not count.
async function countModelPixels(page, shotPath) {
  const style = await page.addStyleTag({
    content:
      "body * { visibility: hidden !important; transition: none !important } canvas { visibility: visible !important }",
  });
  let png;
  try {
    png = await page.locator("canvas").screenshot({ path: shotPath, timeout: 60000 });
  } finally {
    await style.evaluate((element) => element.remove());
  }

  return page.evaluate(async (base64) => {
    const image = new Image();
    image.src = `data:image/png;base64,${base64}`;
    await image.decode();
    const scratch = document.createElement("canvas");
    scratch.width = image.width;
    scratch.height = image.height;
    const context = scratch.getContext("2d");
    context.drawImage(image, 0, 0);
    const { data } = context.getImageData(0, 0, scratch.width, scratch.height);

    // Tone mapping shifts the scene's #f5efe6, so take the most frequent colour.
    const counts = new Map();
    for (let i = 0; i < data.length; i += 4) {
      const colour = (data[i] << 16) | (data[i + 1] << 8) | data[i + 2];
      counts.set(colour, (counts.get(colour) ?? 0) + 1);
    }
    let background = 0;
    for (const [colour, count] of counts) {
      if (count > (counts.get(background) ?? 0)) background = colour;
    }
    const [r, g, b] = [(background >> 16) & 255, (background >> 8) & 255, background & 255];

    let modelPixels = 0;
    for (let i = 0; i < data.length; i += 4) {
      const distance =
        Math.abs(data[i] - r) + Math.abs(data[i + 1] - g) + Math.abs(data[i + 2] - b);
      if (distance > 24) modelPixels++;
    }
    return modelPixels;
  }, png.toString("base64"));
}

async function checkPack(page, pack, packIds, problems) {
  await page.waitForSelector("canvas", { state: "attached", timeout: 60000 });

  // The first model shows once its .glb and the HDR environment have loaded.
  const deadline = Date.now() + 60000;
  const shotPath = SHOTS_DIR && join(SHOTS_DIR, `${pack}.png`);
  let modelPixels = await countModelPixels(page, shotPath);
  while (modelPixels < MIN_MODEL_PIXELS && Date.now() < deadline) {
    await page.waitForTimeout(1000);
    modelPixels = await countModelPixels(page, shotPath);
  }
  if (modelPixels < MIN_MODEL_PIXELS) problems.push(`canvas shows no model (${modelPixels} px)`);

  // The sidebar starts closed.
  await page.click("#close-btn");
  await page.waitForSelector("text=Free 3D Models by");
  const links = await page.$$eval("a[href^='/']", (anchors) =>
    anchors.map((anchor) => ({
      id: anchor.getAttribute("href").slice(1),
      active: anchor.parentElement.classList.contains("underline"),
    })),
  );
  const listed = new Set(links.map((link) => link.id));
  const missing = packIds.filter((id) => !listed.has(id));
  if (missing.length > 0) problems.push(`sidebar is missing ${missing.join(", ")}`);
  if (!links.some((link) => link.id === pack && link.active)) {
    problems.push("sidebar does not underline the current pack");
  }

  return `${modelPixels} model px, sidebar lists ${packIds.length - missing.length}/${packIds.length}`;
}

async function checkPage(browser, path, packIds) {
  const problems = [];
  let summary = "";

  const { status } = await fetch(`${SITE_URL}${path}`, { redirect: "manual" });
  if (status !== 200) problems.push(`HTTP ${status}`);

  const context = await browser.newContext({ viewport: { width: 1280, height: 800 } });
  await context.route(ANALYTICS, (route) =>
    route.fulfill({ status: 200, contentType: "application/javascript", body: "" }),
  );
  const page = await context.newPage();
  page.on("console", (message) => {
    if (message.type() === "error") problems.push(`console error: ${message.text()}`);
  });
  page.on("pageerror", (error) => problems.push(`uncaught: ${error.message}`));
  page.on("response", (response) => {
    if (response.status() >= 400) problems.push(`${response.status()} ${response.url()}`);
  });
  page.on("requestfailed", (request) => {
    problems.push(`${request.failure()?.errorText} ${request.url()}`);
  });

  try {
    await page.goto(`${SITE_URL}${path}`, { waitUntil: "domcontentloaded", timeout: 60000 });
    // A pack page preloads every .glb of its pack; wait so a broken one is seen.
    await page.waitForLoadState("networkidle", { timeout: 120000 });
    const pack = path.slice(1);
    if (packIds.includes(pack)) summary = await checkPack(page, pack, packIds, problems);
  } catch (error) {
    problems.push(error.message.split("\n")[0]);
  }
  await context.close();

  return { problems, summary };
}

async function main() {
  const only = process.argv.slice(2).map((arg) => `/${arg.replace(/^\//, "")}`);
  const packIds = readdirSync(PACKS_DIR, { withFileTypes: true })
    .filter((entry) => entry.isDirectory())
    .map((entry) => entry.name)
    .sort((a, b) => a.localeCompare(b));
  const sitemap = await sitemapPaths();
  const paths = only.length > 0 ? only : sitemap;
  let failed = 0;

  const notInSitemap = packIds.filter((id) => !sitemap.includes(`/${id}`));
  if (notInSitemap.length > 0) {
    failed++;
    console.log(`FAIL sitemap.xml is missing ${notInSitemap.join(", ")}`);
  }
  console.log(`${SITE_URL}: ${sitemap.length} sitemap URLs, ${packIds.length} packs in the repo`);

  if (SHOTS_DIR) mkdirSync(SHOTS_DIR, { recursive: true });

  const { chromium } = loadPlaywright();
  // Full Chromium in headless mode can use the GPU. The software WebGL of the
  // headless shell is too slow for these scenes and times out.
  const browser = await chromium.launch({
    channel: "chromium",
    args:
      process.platform === "darwin"
        ? ["--enable-gpu", "--use-angle=metal", "--ignore-gpu-blocklist"]
        : [],
  });

  for (const path of paths) {
    const { problems, summary } = await checkPage(browser, path, packIds);
    if (problems.length > 0) failed++;
    const result = problems.length > 0 ? `FAIL ${path}` : `ok   ${path}`;
    console.log([result, summary, ...problems].filter(Boolean).join(" | "));
  }
  await browser.close();

  console.log(failed > 0 ? `${failed} failed` : `All ${paths.length} URLs passed`);
  process.exitCode = failed > 0 ? 1 : 0;
}

main();
