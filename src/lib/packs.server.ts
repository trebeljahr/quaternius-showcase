import { readdir, readFile } from "node:fs/promises";
import { join } from "node:path";
import { getPackSeo } from "@/lib/seo";

const PACKS_DIR = join(process.cwd(), "src", "components", "quaternius");

export async function listPackIds() {
  const entries = await readdir(PACKS_DIR);
  return entries.filter((name) => name !== "index.ts");
}

export async function getPackProps(id: string) {
  const indexSource = await readFile(join(PACKS_DIR, id, "index.ts"), "utf8");
  const modelCount = (indexSource.match(/^export const /gm) ?? []).length;

  return { id, ...getPackSeo(id, modelCount) };
}
