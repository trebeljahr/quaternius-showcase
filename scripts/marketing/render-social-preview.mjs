// Renders the three GitHub social preview options (1280x640 PNG, under 1 MB)
// from docs/marketing/social-preview/template.html, and two og:image cards
// (1200x630 PNG) built on option C. Run after capture-screenshots.mjs when the
// cards should show new captures:
//
//   pnpm marketing:social-preview
//
// Playwright loads the same way as in capture-screenshots.mjs, or from
// PLAYWRIGHT_MODULE (any playwright or playwright-core folder). The og:image
// cards also need ImageMagick (`magick`) for the downscale.
import { execFileSync, execSync } from "node:child_process";
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

// og:image cards. Option C is laid out at 1280x672, the 1200x630 shape on the
// template's 1280 px width, rendered at device scale 2 and downscaled to
// exactly 1200x630, so nothing is cropped or squashed.
const OG_WIDTH = 1280;
const OG_HEIGHT = 672;
const OG_TALL = `html, body { width: ${OG_WIDTH}px !important; height: ${OG_HEIGHT}px !important; }`;
// Per clean tile: the capture scale (of 3200x2000) and the model's centre in
// the capture as fractions, measured from the screenshots: the trimmed
// bounding boxes (model + shadow), moved up 0.8% so the model, not its
// shadow, sits on the tile's centre line.
const OG_TILES = [
  { scale: 0.47, fx: 0.4935, fy: 0.509 }, // T-rex
  { scale: 0.45, fx: 0.475, fy: 0.484 }, // Cow
  { scale: 0.56, fx: 0.5106, fy: 0.578 }, // Spaceship
  { scale: 0.37, fx: 0.49, fy: 0.445 }, // Mech
];
const OG_CARDS = {
  // The live card C: the model row takes the 32 px of extra height, the text
  // band keeps its 64 px margins.
  "og-wordmark": {
    purpose: "og:image: card C at 1200x630, models on top, title, fan-made note and URL below",
    css: `
      .card { height: 672px; }
      #c .row { height: 392px; }
      #c .text { top: 436px; }
    `,
  },
  // No text: the same four crops as a 2x2 grid that fills the card, same beige
  // tiles and 4 px gaps, each model centred in its tile.
  "og-clean": {
    purpose: "og:image without text: the four model crops of card C as a 2x2 grid",
    css: `
      .card { height: 672px; }
      #c .text { display: none !important; }
      #c .row {
        top: 0; bottom: 0; height: 672px;
        grid-template-columns: repeat(2, 1fr);
        grid-template-rows: repeat(2, 1fr);
      }
    `,
    js: (tiles) => {
      document.querySelectorAll("#c .row .crop").forEach((el, i) => {
        const t = tiles[i];
        const r = el.getBoundingClientRect();
        const w = 3200 * t.scale;
        const h = 2000 * t.scale;
        el.style.backgroundSize = `${w}px ${h}px`;
        el.style.backgroundPosition = `${r.width / 2 - w * t.fx}px ${r.height / 2 - h * t.fy}px`;
      });
    },
  },
};

function downscale(png, out) {
  try {
    // No date chunks, so an unchanged card keeps its SHA-256.
    execFileSync(
      "magick",
      ["png:-", "-resize", "1200x630!", "-define", "png:exclude-chunks=date,time", out],
      {
        input: png,
      },
    );
  } catch (error) {
    if (error.code === "ENOENT")
      throw new Error("The og:image cards need ImageMagick: brew install imagemagick");
    throw error;
  }
}

async function loadPlaywright() {
  if (process.env.PLAYWRIGHT_MODULE)
    return createRequire(import.meta.url)(process.env.PLAYWRIGHT_MODULE);
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

  const og = await browser.newPage({
    viewport: { width: OG_WIDTH, height: OG_HEIGHT },
    deviceScaleFactor: 2,
    colorScheme: "dark",
  });
  for (const [name, card] of Object.entries(OG_CARDS)) {
    await og.goto(`${template}?v=c`, { waitUntil: "networkidle" });
    await og.evaluate(() => document.fonts.ready);
    await og.addStyleTag({ content: OG_TALL + card.css });
    if (card.js) await og.evaluate(card.js, OG_TILES);
    await og.evaluate(() =>
      Promise.all([...document.images].map((img) => img.decode().catch(() => {}))),
    );
    await og.waitForTimeout(400);
    const file = join(DIR, `${name}.png`);
    downscale(await og.screenshot({ type: "png" }), file);
    const buffer = await readFile(file);
    manifest.socialPreview[name] = {
      file: `docs/marketing/social-preview/${name}.png`,
      purpose: card.purpose,
      width: 1200,
      height: 630,
      bytes: buffer.length,
      sha256: createHash("sha256").update(buffer).digest("hex"),
      rendered: new Date().toISOString().slice(0, 10),
    };
    console.log(`Wrote ${name}.png (${buffer.length} bytes)`);
  }
} finally {
  await browser.close();
}
await writeFile(MANIFEST, `${JSON.stringify(manifest, null, 2)}\n`);
