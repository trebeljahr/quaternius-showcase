# Marketing assets

Screenshots and GitHub social preview cards for the Quaternius Showcase. Every screenshot is a capture of the real viewer in headless Chromium (ANGLE Metal GPU). Nothing is mocked up or generated. The models shown are Quaternius's work.

The 2026-11-06 captures come from the live site, which ran commit `c664c6f2`, the same commit as `main` at the time. The capture script blocks the visit counters, so the captures did not count as visits.

[`manifest.json`](manifest.json) lists every file with its purpose, size, SHA-256, source URL and capture date.

## Rebuild

```bash
pnpm build                      # static site in out/
pnpm marketing:screenshots      # serves out/ on a free port, writes screenshots/
pnpm marketing:social-preview   # renders social-preview/*.png from template.html
```

Both scripts need Playwright, which is not a project dependency: install it with `npm i -g playwright`. Set `CHROMIUM_PATH` to use a Chromium build other than Playwright's default. `--only=name1,name2` recaptures single shots. `--base-url=https://quaternius.trebeljahr.com` captures the live site instead of `out/`.

Scripts: [`scripts/marketing/capture-screenshots.mjs`](../../scripts/marketing/capture-screenshots.mjs) and [`scripts/marketing/render-social-preview.mjs`](../../scripts/marketing/render-social-preview.mjs).

## Screenshots

Desktop shots are 1600×1000 CSS pixels at device scale 2, so the files are 3200×2000 JPEG, quality 82.

| File | What it shows | Used in |
| --- | --- | --- |
| `screenshots/dinosaurs-trex-sidebar.jpg` | Dinosaurs Pack, T-rex, pack list open | README hero, cards A and C |
| `screenshots/animals-pack.jpg` | Animals Pack, cow | README, card C |
| `screenshots/spaceships-pack.jpg` | Spaceships Pack, first model | README, card C |
| `screenshots/mech-pack.jpg` | Mech Pack, first model | README, card C |
| `screenshots/mobile-dinosaurs.jpg` | Dinosaurs Pack, T-rex, at phone width (390×844 at scale 3, 1170×2532) | Marketing set |

## Social preview cards

1280×640 PNG, each under 1 MB, key content inside a 64 px margin. Built from [`social-preview/template.html`](social-preview/template.html) with the site's colours, and for B the gradient, cube and wording of [`public/og-image.svg`](../../public/og-image.svg). Every card says the site is fan-made and not affiliated with Quaternius.

| File | Composition |
| --- | --- |
| `social-preview/social-preview-a.png` | A, screenshot-led: the T-rex large on the left, title, line and fan-made note on the right |
| `social-preview/social-preview-b.png` | B, brand-led: the og-image gradient and cube, with the fan-made note |
| `social-preview/social-preview-c.png` | C, four models in a row, one line and the fan-made note below |

Cards A and C crop the captures in CSS to show the models larger. None of them is uploaded to GitHub yet. The repository settings take one card under **Social preview**.
