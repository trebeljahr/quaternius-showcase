import { execFile } from "node:child_process";
import { readdir, readFile, stat, writeFile } from "node:fs/promises";
import { join } from "node:path";
import { promisify } from "node:util";

const execFileAsync = promisify(execFile);

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

// lastmod is the last commit that touched the page's source. File mtime is the
// checkout time, so it differed in every clone and every deploy stamped all
// pages as modified at that moment. Needs full history: a shallow clone
// answers with the date of HEAD for every path.
async function lastModified(path) {
  try {
    const { stdout } = await execFileAsync("git", ["log", "-1", "--format=%cI", "--", path]);
    if (stdout.trim()) return new Date(stdout.trim());
  } catch {
    // No git, for example a source tarball: fall through to mtime.
  }
  return (await stat(path)).mtime;
}

async function packEntries() {
  const dirs = await readdir(PACKS_DIR, { withFileTypes: true });
  const packs = dirs
    .filter((entry) => entry.isDirectory())
    .map((entry) => entry.name)
    .sort((a, b) => a.localeCompare(b));

  return Promise.all(
    packs.map(async (pack) => {
      const packDir = join(PACKS_DIR, pack);
      const [source, modified] = await Promise.all([
        readFile(join(packDir, "index.ts"), "utf8"),
        lastModified(packDir),
      ]);
      const modelCount = (source.match(/^export const /gm) ?? []).length;

      return {
        path: `/${pack}`,
        lastModified: modified,
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
    lastModified: await lastModified(join(process.cwd(), "src", "pages", "imprint.tsx")),
    changeFrequency: "yearly",
    priority: 0.3,
  },
  {
    path: "/privacy",
    lastModified: await lastModified(join(process.cwd(), "src", "pages", "privacy.tsx")),
    changeFrequency: "yearly",
    priority: 0.3,
  },
  {
    path: "/press",
    lastModified: await lastModified(join(process.cwd(), "src", "pages", "press.tsx")),
    changeFrequency: "monthly",
    priority: 0.3,
  },
];

await writeFile(SITEMAP_PATH, renderSitemap(entries), "utf8");
console.log(`Wrote ${entries.length} URLs to public/sitemap.xml`);
