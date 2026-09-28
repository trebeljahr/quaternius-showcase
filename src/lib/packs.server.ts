import { readdir, readFile } from "node:fs/promises";
import { join } from "node:path";
import { getPackSeo } from "@/lib/seo";

const PACKS_DIR = join(process.cwd(), "src", "components", "quaternius");

// Biome wraps the longer of these across lines, so allow whitespace after dynamic(.
const EXPORT_PATTERN = '^export const (\\w+) = dynamic\\(\\s*\\(\\) => import\\("\\./([^"]+)"\\)';
const GLTF_RE = /useGLTF\(\s*"(\/glb\/[^"]+\.glb)"/;

function parseExports(indexSource: string) {
  // A fresh regex per call: a shared /g regex would carry lastIndex between packs.
  const re = new RegExp(EXPORT_PATTERN, "gm");
  const found: { name: string; moduleName: string }[] = [];
  let match = re.exec(indexSource);
  while (match !== null) {
    found.push({ name: match[1], moduleName: match[2] });
    match = re.exec(indexSource);
  }
  return found;
}

export async function listPackIds() {
  const entries = await readdir(PACKS_DIR);
  return entries.filter((name) => name !== "index.ts");
}

/**
 * Maps each exported model name to the .glb it actually loads.
 *
 * The pack directory and the export name are not reliable download URLs: eight
 * packs keep their models under a differently named /glb/ directory (for
 * example buildings_pack_1 -> /glb/buildings_pack_2), and models whose file
 * name starts with a digit are exported with a leading "A" to stay a valid JS
 * identifier (A1Story_Mat -> 1Story_Mat.glb). The useGLTF() call inside the
 * component is the only source of truth, so read it from there.
 */
async function readModelUrls(id: string) {
  const packDir = join(PACKS_DIR, id);
  const indexSource = await readFile(join(packDir, "index.ts"), "utf8");
  const exports = parseExports(indexSource);

  const entries = await Promise.all(
    exports.map(async ({ name, moduleName }) => {
      const source = await readFile(join(packDir, `${moduleName}.tsx`), "utf8");
      const url = source.match(GLTF_RE)?.[1];
      if (!url) throw new Error(`No useGLTF("/glb/...") literal in ${id}/${moduleName}.tsx`);
      return [name, url] as const;
    }),
  );

  return Object.fromEntries(entries);
}

export async function getPackProps(id: string) {
  const modelUrls = await readModelUrls(id);

  return { id, modelUrls, ...getPackSeo(id, Object.keys(modelUrls).length) };
}
