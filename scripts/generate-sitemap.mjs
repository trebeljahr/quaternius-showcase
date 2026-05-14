import { readdir, readFile, stat, writeFile } from "node:fs/promises";
import { join } from "node:path";

const SITE_URL = "https://quaternius.trebeljahr.com";
const PACKS_DIR = join(process.cwd(), "src", "components", "quaternius");
const SITEMAP_PATH = join(process.cwd(), "public", "sitemap.xml");

function escapeXml(value) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&apos;");
}

async function packEntries() {
  const dirs = await readdir(PACKS_DIR, { withFileTypes: true });
  const packs = dirs
    .filter((entry) => entry.isDirectory())
    .map((entry) => entry.name)
    .sort((a, b) => a.localeCompare(b));

  return Promise.all(
    packs.map(async (pack) => {
      const indexPath = join(PACKS_DIR, pack, "index.ts");
      const [source, stats] = await Promise.all([readFile(indexPath, "utf8"), stat(indexPath)]);
      const modelCount = (source.match(/^export const /gm) ?? []).length;

      return {
        path: `/${pack}`,
        lastModified: stats.mtime,
        changeFrequency: "monthly",
        priority: pack === "animals_pack" ? 1 : 0.8,
        modelCount,
      };
    }),
  );
}

function renderSitemap(entries) {
  const urls = entries
    .map(
      ({ path, lastModified, changeFrequency, priority }) => `  <url>
    <loc>${escapeXml(new URL(path, SITE_URL).toString())}</loc>
    <lastmod>${lastModified.toISOString()}</lastmod>
    <changefreq>${changeFrequency}</changefreq>
    <priority>${priority.toFixed(1)}</priority>
  </url>`,
    )
    .join("\n");

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`;
}

const entries = [
  ...(await packEntries()),
  {
    path: "/imprint",
    lastModified: (await stat(join(process.cwd(), "src", "pages", "imprint.tsx"))).mtime,
    changeFrequency: "yearly",
    priority: 0.3,
  },
];

await writeFile(SITEMAP_PATH, renderSitemap(entries), "utf8");
console.log(`Wrote ${entries.length} URLs to public/sitemap.xml`);
