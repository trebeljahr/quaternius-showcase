// Checks that every model's download link points at a file under public/.
//
// The URLs come from the same readModelUrls() the pack pages are built from, so
// this tests the hrefs users get. Path segments are matched case-sensitively:
// macOS forgives a wrong case, the deployed site does not.
//
// Run from the repo root: pnpm verify:downloads
import { readdir, readFile } from "node:fs/promises";
import { join } from "node:path";
import { listPackIds, PACKS_DIR, readModelUrls } from "../src/lib/modelUrls.server.ts";

const PUBLIC_DIR = join(process.cwd(), "public");

// A model maps to one URL today. Accept an object of format -> URL as well, so
// adding e.g. a .gltf link next to the .glb one keeps this check working.
function downloadUrls(entry) {
  return typeof entry === "string" ? [entry] : Object.values(entry);
}

const dirListings = new Map();

function listDir(dir) {
  if (!dirListings.has(dir)) {
    dirListings.set(
      dir,
      readdir(dir).then(
        (names) => new Set(names),
        () => new Set(),
      ),
    );
  }
  return dirListings.get(dir);
}

async function existsInPublic(url) {
  let dir = PUBLIC_DIR;
  for (const segment of url.split("/").filter(Boolean).map(decodeURIComponent)) {
    if (!(await listDir(dir)).has(segment)) return false;
    dir = join(dir, segment);
  }
  return true;
}

const problems = [];
let modelCount = 0;
let urlCount = 0;

const packIds = (await listPackIds()).sort();

for (const id of packIds) {
  const modelUrls = await readModelUrls(id);
  const names = Object.keys(modelUrls);
  modelCount += names.length;

  // The viewer shows every export of the pack's index.ts, but only exports that
  // readModelUrls() can parse get a download link. Catch any it skips.
  const indexSource = await readFile(join(PACKS_DIR, id, "index.ts"), "utf8");
  const exportCount = (indexSource.match(/^export\b/gm) ?? []).length;
  if (exportCount !== names.length) {
    problems.push(
      `${id}: index.ts has ${exportCount} exports, but only ${names.length} have a download URL`,
    );
  }

  for (const name of names) {
    for (const url of downloadUrls(modelUrls[name])) {
      urlCount += 1;
      if (!(await existsInPublic(url))) problems.push(`${id}/${name}: ${url} is not in public/`);
    }
  }
}

if (problems.length > 0) {
  console.error(`${problems.length} broken download link(s):`);
  for (const problem of problems) console.error(`  ${problem}`);
  process.exit(1);
}

console.log(
  `OK: ${urlCount} download links for ${modelCount} models in ${packIds.length} packs all resolve under public/.`,
);
