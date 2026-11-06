// Renders the three GitHub social preview options (1280x640 PNG, under 1 MB)
// from docs/marketing/social-preview/template.html. Run after
// capture-screenshots.mjs when the cards should show new captures:
//
//   pnpm marketing:social-preview
//
// Playwright loads the same way as in capture-screenshots.mjs.
import { execSync } from "node:child_process";
import { createHash } from "node:crypto";
import { readFile, writeFile } from "node:fs/promises";
import { createRequire } from "node:module";
import { join } from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const ROOT = fileURLToPath(new URL("../../", import.meta.url));
const DIR = join(ROOT, "docs", "marketing", "social-preview");
const MANIFEST = join(ROOT, "docs", "marketing", "manifest.json");
const MAX_BYTES = 1_000_000;

const VARIANTS = {
  a: "Screenshot-led: the T-rex large on the left, title, line and fan-made note on the right",
  b: "Brand-led: the og-image gradient and cube, with the fan-made note",
  c: "Four models in a row, one line and the fan-made note below",
};

async function loadPlaywright() {
  try {
    return await import("playwright");
  } catch {
    const globalRoot = execSync("npm root -g").toString().trim();
    return createRequire(`${globalRoot}/`)("playwright");
  }
}

const { chromium } = await loadPlaywright();
const browser = await chromium.launch({ executablePath: process.env.CHROMIUM_PATH || undefined });
const page = await browser.newPage({
  viewport: { width: 1280, height: 640 },
  deviceScaleFactor: 1,
});
const template = pathToFileURL(join(DIR, "template.html")).href;
const manifest = JSON.parse(await readFile(MANIFEST, "utf8").catch(() => "{}"));
manifest.socialPreview ??= {};

try {
  for (const [variant, purpose] of Object.entries(VARIANTS)) {
    await page.goto(`${template}?v=${variant}`, { waitUntil: "load" });
    await page.evaluate(() => document.fonts.ready);
    const buffer = await page.screenshot({ type: "png" });
    if (buffer.length > MAX_BYTES) throw new Error(`Option ${variant} is over 1 MB`);
    const name = `social-preview-${variant}.png`;
    await writeFile(join(DIR, name), buffer);
    manifest.socialPreview[variant] = {
      file: `docs/marketing/social-preview/${name}`,
      purpose,
      width: 1280,
      height: 640,
      bytes: buffer.length,
      sha256: createHash("sha256").update(buffer).digest("hex"),
      rendered: new Date().toISOString().slice(0, 10),
    };
    console.log(`Wrote ${name} (${buffer.length} bytes)`);
  }
} finally {
  await browser.close();
}
await writeFile(MANIFEST, `${JSON.stringify(manifest, null, 2)}\n`);
