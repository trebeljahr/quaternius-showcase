export const SITE_URL = "https://quaternius.trebeljahr.com";
export const SITE_NAME = "3D Models by @Quaternius";
export const DEFAULT_DESCRIPTION =
  "Browse free low-poly 3D model packs by Quaternius, preview them in the browser, and download GLB files for games and prototypes.";
// One link preview for every page: the og-wordmark card from
// docs/marketing/social-preview, as JPEG (scripts/marketing/render-social-preview.mjs).
export const DEFAULT_SOCIAL_IMAGE = "/og-card.jpg";
export const DEFAULT_SOCIAL_IMAGE_TYPE = "image/jpeg";
export const DEFAULT_SOCIAL_IMAGE_ALT =
  "Quaternius Showcase, fan-made and not affiliated with Quaternius, over low-poly models of a T-rex, a cow, a spaceship and a mech";

export function absoluteUrl(path: string) {
  return new URL(path, SITE_URL).toString();
}

export function formatPackName(id: string) {
  const words = id.split("_").map((word) => {
    if (word === "rpg") return "RPG";
    if (word === "sci") return "Sci";
    if (word === "fi") return "Fi";
    if (/^\d+$/.test(word)) return word;

    return word.charAt(0).toUpperCase() + word.slice(1);
  });

  return words.join(" ").replace("Sci Fi", "Sci-Fi");
}

export function getPackSeo(id: string, modelCount: number) {
  const packName = formatPackName(id);
  const modelLabel = modelCount === 1 ? "model" : "models";

  return {
    title: `${packName} - Free Low-Poly 3D Models`,
    description: `Preview and download ${modelCount} free low-poly ${packName} 3D ${modelLabel} by Quaternius as GLB files.`,
    path: `/${id}`,
    image: DEFAULT_SOCIAL_IMAGE,
    imageAlt: DEFAULT_SOCIAL_IMAGE_ALT,
  };
}
