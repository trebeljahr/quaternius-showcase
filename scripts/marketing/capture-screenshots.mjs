// Captures the README and marketing screenshots of the real viewer in
// headless Chromium. Nothing is mocked up.
//
//   pnpm build                       # writes the static site to out/
//   pnpm marketing:screenshots       # serves out/ and writes docs/marketing/screenshots/
//
// Options:
//   --base-url=<url>   capture a running site, for example the live one, instead of out/
//   --only=a,b         capture only the named shots
//
// Requests to the visit counters are blocked, so captures never count as visits.
// Playwright is not a project dependency. The script loads it from the
// project, then from the global npm root (`npm i -g playwright`). Set
// CHROMIUM_PATH to use a Chromium build other than Playwright's default.
import { execSync } from "node:child_process";
import { createHash } from "node:crypto";
import { readFile, stat, writeFile } from "node:fs/promises";
import { createServer } from "node:http";
import { createRequire } from "node:module";
import { extname, join, normalize } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = fileURLToPath(new URL("../../", import.meta.url));
const OUT_DIR = join(ROOT, "docs", "marketing", "screenshots");
const MANIFEST = join(ROOT, "docs", "marketing", "manifest.json");
const SITE_DIR = join(ROOT, "out");

const DESKTOP = { viewport: { width: 1600, height: 1000 }, deviceScaleFactor: 2 };
const MOBILE = {
  viewport: { width: 390, height: 844 },
  deviceScaleFactor: 3,
  isMobile: true,
  hasTouch: true,
};

// `next` presses the viewer's next-model button that many times.
// `sidebar` opens the pack list. `settle` waits for the model to load and turn.
const SHOTS = [
  {
    name: "dinosaurs-trex-sidebar",
    purpose: "README hero: a pack page with the pack list open",
    path: "/dinosaurs_pack",
    next: 3,
    sidebar: true,
    settle: 4000,
  },
  {
    name: "animals-pack",
    purpose: "A pack page with the pack list closed",
    path: "/animals_pack",
    next: 2,
    settle: 4000,
  },
  {
    name: "spaceships-pack",
    purpose: "A pack page: spaceships",
    path: "/spaceships_pack",
    settle: 4000,
  },
  {
    name: "mech-pack",
    purpose: "A pack page: mechs",
    path: "/mech_pack",
    settle: 4000,
  },
  {
    name: "mobile-dinosaurs",
    purpose: "Phone width: a pack page",
    path: "/dinosaurs_pack",
    next: 3,
    device: "mobile",
    settle: 4000,
  },
];

const TYPES = {
  ".html": "text/html; charset=utf-8",
  ".js": "text/javascript",
  ".css": "text/css",
  ".json": "application/json",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".svg": "image/svg+xml",
  ".ico": "image/x-icon",
  ".woff2": "font/woff2",
  ".glb": "model/gltf-binary",
  ".hdr": "application/octet-stream",
  ".txt": "text/plain",
  ".xml": "application/xml",
};

async function fileAt(path) {
  try {
    return (await stat(path)).isFile() ? path : null;
  } catch {
    return null;
  }
}

// Serves out/ the way the Cloudflare assets binding does: /dinosaurs_pack
// reads dinosaurs_pack.html, unknown paths get 404.html.
function serveStaticExport() {
  const server = createServer(async (req, res) => {
    const pathname = normalize(decodeURIComponent(new URL(req.url, "http://x").pathname));
    const base = join(SITE_DIR, pathname.replace(/^(\.\.[/\\])+/, ""));
    const file =
      (await fileAt(base)) ||
      (await fileAt(`${base}.html`)) ||
      (await fileAt(join(base, "index.html")));
    if (!file) {
      res.writeHead(404, { "content-type": "text/html" });
      res.end(await readFile(join(SITE_DIR, "404.html")).catch(() => "Not found"));
      return;
    }
    res.writeHead(200, { "content-type": TYPES[extname(file)] ?? "application/octet-stream" });
    res.end(await readFile(file));
  });
  return new Promise((resolve) => {
    // Port 0 lets the OS pick a free port, so this never takes a dev server's port.
    server.listen(0, "127.0.0.1", () => resolve(server));
  });
}

async function loadPlaywright() {
  try {
    return await import("playwright");
  } catch {
    const globalRoot = execSync("npm root -g").toString().trim();
    return createRequire(`${globalRoot}/`)("playwright");
  }
}

async function capture(browser, baseUrl, shot) {
  const device = shot.device === "mobile" ? MOBILE : DESKTOP;
  const context = await browser.newContext(device);
  await context.route(/plausible|cloudflareinsights/, (route) => route.abort());
  const page = await context.newPage();
  await page.goto(new URL(shot.path, baseUrl).href, { waitUntil: "networkidle" });
  await page.waitForTimeout(1500);

  for (let i = 0; i < (shot.next ?? 0); i++) {
    await page.locator("button", { hasText: /^>$/ }).first().click();
    await page.waitForLoadState("networkidle");
  }
  if (shot.sidebar) await page.locator("#close-btn").click();
  await page.mouse.move(0, 0);
  await page.waitForTimeout(shot.settle);

  const file = join(OUT_DIR, `${shot.name}.jpg`);
  await page.screenshot({ path: file, type: "jpeg", quality: 82 });
  await context.close();

  const bytes = await readFile(file);
  return {
    file: `docs/marketing/screenshots/${shot.name}.jpg`,
    purpose: shot.purpose,
    width: device.viewport.width * device.deviceScaleFactor,
    height: device.viewport.height * device.deviceScaleFactor,
    bytes: bytes.length,
    sha256: createHash("sha256").update(bytes).digest("hex"),
    source: `${new URL(shot.path, baseUrl).href}${shot.next ? ` (next model x${shot.next})` : ""}`,
    sidebar: shot.sidebar ? "open" : "closed",
  };
}

const args = Object.fromEntries(
  process.argv.slice(2).map((arg) => {
    const [key, value = "true"] = arg.replace(/^--/, "").split("=");
    return [key, value];
  }),
);
const only = args.only ? new Set(args.only.split(",")) : null;
const server = args["base-url"] ? null : await serveStaticExport();
const baseUrl = args["base-url"] ?? `http://127.0.0.1:${server.address().port}`;

const { chromium } = await loadPlaywright();
const browser = await chromium.launch({
  executablePath: process.env.CHROMIUM_PATH || undefined,
  args: ["--use-angle=metal", "--enable-gpu", "--ignore-gpu-blocklist", "--mute-audio"],
});

const commit = execSync("git rev-parse --short HEAD", { cwd: ROOT }).toString().trim();
const manifest = JSON.parse(await readFile(MANIFEST, "utf8").catch(() => "{}"));
manifest.screenshots ??= {};
try {
  for (const shot of SHOTS) {
    if (only && !only.has(shot.name)) continue;
    const entry = await capture(browser, baseUrl, shot);
    manifest.screenshots[shot.name] = {
      ...entry,
      captured: new Date().toISOString().slice(0, 10),
      commit,
    };
    console.log(`Wrote ${entry.file} (${entry.width}x${entry.height}, ${entry.bytes} bytes)`);
  }
} finally {
  await browser.close();
  server?.close();
}
await writeFile(MANIFEST, `${JSON.stringify(manifest, null, 2)}\n`);
