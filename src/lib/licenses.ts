import type { Ids } from "@/components/PackViewerProvider";

// Only CC0 so far. Newer Quaternius packs use the Quaternius Asset License,
// which forbids redistributing the files, so those must not be added at all.
export type LicenseId = "CC0-1.0";

interface License {
  /** Short text for the badge. */
  label: string;
  name: string;
  url: string;
}

export const LICENSES: Record<LicenseId, License> = {
  "CC0-1.0": {
    label: "CC0",
    name: "CC0 1.0 Universal",
    url: "https://creativecommons.org/publicdomain/zero/1.0/",
  },
};

interface PackLicense {
  /** The pack's name on quaternius.com. */
  name: string;
  license: LicenseId;
  /** The pack's page on quaternius.com. */
  source: string;
}

const QUATERNIUS = "https://quaternius.com/packs";

/**
 * Upstream license per pack, copied from LICENSES.md; update both together.
 * Keyed by pack id, so adding or removing a pack without an entry here fails
 * the type check.
 */
export const PACK_LICENSES: Record<Ids, PackLicense> = {
  animals_pack: {
    name: "Ultimate Animated Animal Pack",
    license: "CC0-1.0",
    source: `${QUATERNIUS}/ultimateanimatedanimals.html`,
  },
  buildings_pack_1: {
    name: "Buildings Pack",
    license: "CC0-1.0",
    source: `${QUATERNIUS}/buildings.html`,
  },
  buildings_pack_2: {
    name: "Ultimate Buildings Pack",
    license: "CC0-1.0",
    source: `${QUATERNIUS}/ultimatetexturedbuildings.html`,
  },
  crops_pack: {
    name: "Ultimate Crops Pack",
    license: "CC0-1.0",
    source: `${QUATERNIUS}/ultimatecrops.html`,
  },
  cute_fish_pack: {
    name: "Animated Cute Fish Pack",
    license: "CC0-1.0",
    source: `${QUATERNIUS}/cutefish.html`,
  },
  cyberpunk_pack: {
    name: "Cyberpunk Game Kit",
    license: "CC0-1.0",
    source: `${QUATERNIUS}/cyberpunkgamekit.html`,
  },
  dinosaurs_pack: {
    name: "Animated Dinosaur Pack",
    license: "CC0-1.0",
    source: `${QUATERNIUS}/animateddinosaurs.html`,
  },
  easy_enemies_pack: {
    name: "Easy Enemy Pack",
    license: "CC0-1.0",
    source: `${QUATERNIUS}/easyenemy.html`,
  },
  fantasy_real_time_strategy: {
    name: "Ultimate Fantasy RTS",
    license: "CC0-1.0",
    source: `${QUATERNIUS}/ultimatefantasyrts.html`,
  },
  fish_pack: {
    name: "Animated Fish Pack",
    license: "CC0-1.0",
    source: `${QUATERNIUS}/animatedfish.html`,
  },
  house_interior_pack: {
    name: "Ultimate House Interior Pack",
    license: "CC0-1.0",
    source: `${QUATERNIUS}/ultimatehomeinterior.html`,
  },
  mech_pack: {
    name: "Animated Mech Pack",
    license: "CC0-1.0",
    source: `${QUATERNIUS}/animatedmech.html`,
  },
  medieval_village_pack: {
    name: "Medieval Village Pack",
    license: "CC0-1.0",
    source: `${QUATERNIUS}/medievalvillage.html`,
  },
  medieval_weapons_pack: {
    name: "Modular Weapons Pack",
    license: "CC0-1.0",
    source: `${QUATERNIUS}/medievalweapons.html`,
  },
  modular_dungeon_pack_1: {
    name: "Modular Dungeons Pack",
    license: "CC0-1.0",
    source: `${QUATERNIUS}/modulardungeon.html`,
  },
  modular_dungeon_pack_2: {
    name: "Modular Dungeon Pack",
    license: "CC0-1.0",
    source: `${QUATERNIUS}/medievaldungeon.html`,
  },
  modular_men_pack: {
    name: "Ultimate Modular Men Pack",
    license: "CC0-1.0",
    source: `${QUATERNIUS}/ultimatemodularcharacters.html`,
  },
  modular_sci_fi_guns_pack: {
    name: "Sci-Fi Modular Gun Pack",
    license: "CC0-1.0",
    source: `${QUATERNIUS}/scifimodularguns.html`,
  },
  modular_sci_fi_pack: {
    name: "Ultimate Modular Sci-Fi Pack",
    license: "CC0-1.0",
    source: `${QUATERNIUS}/ultimatemodularscifi.html`,
  },
  modular_women_pack: {
    name: "Ultimate Modular Women Pack",
    license: "CC0-1.0",
    source: `${QUATERNIUS}/ultimatemodularwomen.html`,
  },
  nature_pack: {
    name: "Ultimate Nature Pack",
    license: "CC0-1.0",
    source: `${QUATERNIUS}/ultimatenature.html`,
  },
  platformer_game_pack: {
    name: "Platformer Game Kit",
    license: "CC0-1.0",
    source: `${QUATERNIUS}/ultimateplatformer.html`,
  },
  platformer_pack: {
    name: "Modular Platformer Pack",
    license: "CC0-1.0",
    source: `${QUATERNIUS}/modularplatformer.html`,
  },
  rpg_items_pack: {
    name: "Ultimate RPG Pack",
    license: "CC0-1.0",
    source: `${QUATERNIUS}/ultimaterpg.html`,
  },
  ships_pack: {
    name: "Ships Pack",
    license: "CC0-1.0",
    source: `${QUATERNIUS}/ships.html`,
  },
  simple_nature_pack: {
    name: "Simple Nature Pack",
    license: "CC0-1.0",
    source: `${QUATERNIUS}/simplenature.html`,
  },
  single_knight_pack: {
    name: "Animated Knight Pack",
    license: "CC0-1.0",
    source: `${QUATERNIUS}/knightcharacter.html`,
  },
  spaceships_pack: {
    name: "Ultimate Spaceships Pack",
    license: "CC0-1.0",
    source: `${QUATERNIUS}/ultimatespaceships.html`,
  },
  street_pack: {
    name: "Modular Streets Pack",
    license: "CC0-1.0",
    source: `${QUATERNIUS}/modularstreets.html`,
  },
  survival_pack: {
    name: "Survival Pack",
    license: "CC0-1.0",
    source: `${QUATERNIUS}/survival.html`,
  },
  tank_pack: {
    name: "Animated Tanks Pack",
    license: "CC0-1.0",
    source: `${QUATERNIUS}/animatedtanks.html`,
  },
  ultimate_space_pack: {
    name: "Ultimate Space Kit",
    license: "CC0-1.0",
    source: `${QUATERNIUS}/ultimatespacekit.html`,
  },
};

export function getPackLicense(id: Ids) {
  const { name, license, source } = PACK_LICENSES[id];
  return { packName: name, source, ...LICENSES[license] };
}
