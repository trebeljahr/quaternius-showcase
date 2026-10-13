# Model licenses

All 3D models in `public/glb/` are by [Quaternius](https://quaternius.com).
This file lists the upstream license and source page for each pack. The MIT
license in [`LICENSE`](LICENSE) covers the showcase code only.

Last checked against quaternius.com: 2026-10-10.

## Packs

| Pack id | Pack name | License | Source URL |
| --- | --- | --- | --- |
| `animals_pack` | Ultimate Animated Animal Pack | CC0-1.0 | https://quaternius.com/packs/ultimateanimatedanimals.html |
| `buildings_pack_1` | Buildings Pack | CC0-1.0 | https://quaternius.com/packs/buildings.html |
| `buildings_pack_2` | Ultimate Buildings Pack | CC0-1.0 | https://quaternius.com/packs/ultimatetexturedbuildings.html |
| `crops_pack` | Ultimate Crops Pack | CC0-1.0 | https://quaternius.com/packs/ultimatecrops.html |
| `cute_fish_pack` | Animated Cute Fish Pack | CC0-1.0 | https://quaternius.com/packs/cutefish.html |
| `cyberpunk_pack` | Cyberpunk Game Kit | CC0-1.0 | https://quaternius.com/packs/cyberpunkgamekit.html |
| `dinosaurs_pack` | Animated Dinosaur Pack | CC0-1.0 | https://quaternius.com/packs/animateddinosaurs.html |
| `easy_enemies_pack` | Easy Enemy Pack | CC0-1.0 | https://quaternius.com/packs/easyenemy.html |
| `fantasy_real_time_strategy` | Ultimate Fantasy RTS | CC0-1.0 | https://quaternius.com/packs/ultimatefantasyrts.html |
| `fish_pack` | Animated Fish Pack | CC0-1.0 | https://quaternius.com/packs/animatedfish.html |
| `house_interior_pack` | Ultimate House Interior Pack | CC0-1.0 | https://quaternius.com/packs/ultimatehomeinterior.html |
| `mech_pack` | Animated Mech Pack | CC0-1.0 | https://quaternius.com/packs/animatedmech.html |
| `medieval_village_pack` | Medieval Village Pack | CC0-1.0 | https://quaternius.com/packs/medievalvillage.html |
| `medieval_weapons_pack` | Modular Weapons Pack | CC0-1.0 | https://quaternius.com/packs/medievalweapons.html |
| `modular_dungeon_pack_1` | Modular Dungeons Pack | CC0-1.0 | https://quaternius.com/packs/modulardungeon.html |
| `modular_dungeon_pack_2` | Modular Dungeon Pack | CC0-1.0 | https://quaternius.com/packs/medievaldungeon.html |
| `modular_men_pack` | Ultimate Modular Men Pack | CC0-1.0 | https://quaternius.com/packs/ultimatemodularcharacters.html |
| `modular_sci_fi_guns_pack` | Sci-Fi Modular Gun Pack | CC0-1.0 | https://quaternius.com/packs/scifimodularguns.html |
| `modular_sci_fi_pack` | Ultimate Modular Sci-Fi Pack | CC0-1.0 | https://quaternius.com/packs/ultimatemodularscifi.html |
| `modular_women_pack` | Ultimate Modular Women Pack | CC0-1.0 | https://quaternius.com/packs/ultimatemodularwomen.html |
| `nature_pack` | Ultimate Nature Pack | CC0-1.0 | https://quaternius.com/packs/ultimatenature.html |
| `platformer_game_pack` | Platformer Game Kit | CC0-1.0 | https://quaternius.com/packs/ultimateplatformer.html |
| `platformer_pack` | Modular Platformer Pack | CC0-1.0 | https://quaternius.com/packs/modularplatformer.html |
| `rpg_items_pack` | Ultimate RPG Pack | CC0-1.0 | https://quaternius.com/packs/ultimaterpg.html |
| `ships_pack` | Ships Pack | CC0-1.0 | https://quaternius.com/packs/ships.html |
| `simple_nature_pack` | Simple Nature Pack | CC0-1.0 | https://quaternius.com/packs/simplenature.html |
| `single_knight_pack` | Animated Knight Pack | CC0-1.0 | https://quaternius.com/packs/knightcharacter.html |
| `spaceships_pack` | Ultimate Spaceships Pack | CC0-1.0 | https://quaternius.com/packs/ultimatespaceships.html |
| `street_pack` | Modular Streets Pack | CC0-1.0 | https://quaternius.com/packs/modularstreets.html |
| `survival_pack` | Survival Pack | CC0-1.0 | https://quaternius.com/packs/survival.html |
| `tank_pack` | Animated Tanks Pack | CC0-1.0 | https://quaternius.com/packs/animatedtanks.html |
| `ultimate_space_pack` | Ultimate Space Kit | CC0-1.0 | https://quaternius.com/packs/ultimatespacekit.html |

`Pack id` is the directory in `src/components/quaternius/` and the page path
on the site, for example `/animals_pack`. CC0-1.0 is the
[CC0 1.0 Universal](https://creativecommons.org/publicdomain/zero/1.0/)
public domain dedication. The source page of each pack above names CC0 and
links to that deed.

No pack was removed. Every pack on the site is CC0-1.0 upstream.

The license badge in the sidebar of each pack page reads
[`src/lib/licenses.ts`](src/lib/licenses.ts). When you change this table,
change that file too.

## Model directories

The site has 32 packs, but `public/glb/` has 33 directories.

Eight packs load their models from a `public/glb/` directory with a different
name:

| Pack id | Model directory |
| --- | --- |
| `buildings_pack_1` | `public/glb/buildings_pack_2/` |
| `buildings_pack_2` | `public/glb/buildings_pack_3/` |
| `fantasy_real_time_strategy` | `public/glb/real_time_strategy_pack/` |
| `modular_dungeon_pack_1` | `public/glb/modular_dungeon_1/` |
| `modular_dungeon_pack_2` | `public/glb/modular_dungeon_pack/` |
| `modular_men_pack` | `public/glb/modular_men/` |
| `modular_sci_fi_pack` | `public/glb/modular_sci_fi/` |
| `modular_women_pack` | `public/glb/modular_women/` |

The other 24 packs use a directory with the same name as the pack id.

One directory has no pack page: `public/glb/modular_medieval_buildings_pack/`
holds the 30 models of the
[Modular Medieval Building Pack](https://quaternius.com/packs/modularmedievalbuildings.html)
(CC0-1.0). No component loads it and the sitemap does not list it, but the
static host still serves its files.

## How this was checked

The packs were copied from quaternius.com in December 2022. The upstream pack
pages do not list model names, so each pack was matched to its page by model
names, model count and the preview images. Some model counts differ from the
upstream page, because Quaternius has updated some packs since then.

Newer Quaternius releases use the Quaternius Asset License (QAL) instead of
CC0. The QAL does not allow redistribution of the assets themselves. The
"License" link in the quaternius.com header now opens the QAL page, last
updated 2026-08-28. No pack on this site is under the QAL: each of their
source pages still names CC0. Before you add a pack, check the license on its
source page. Do not add a QAL pack, because this site serves the model files
for download.

## Lighting image

The viewer lights every model with one HDR image. It is not a Quaternius
asset.

| File | Name | Author | License | Source URL |
| --- | --- | --- | --- | --- |
| `public/hdri/potsdamer_platz_1k.hdr` | Potsdamer Platz | Greg Zaal, Poly Haven | CC0-1.0 | https://polyhaven.com/a/potsdamer_platz |

The file is an unchanged copy of `hdri/potsdamer_platz_1k.hdr` from
[pmndrs/drei-assets](https://github.com/pmndrs/drei-assets) at commit
`456060a`. That repo credits its HDRIs to HDRI Haven, which is now Poly Haven.
Poly Haven licenses all its assets as CC0: https://polyhaven.com/license.
The site loaded this file from GitHub until 2026-10-13. It now ships with the
site.
