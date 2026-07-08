# Weight And Deployment Notes

## Live File Rule

- Keep `mstar-latest-changes-deploy.zip` aligned with the latest committed site change.
- Refresh this existing ZIP from the Hostinger/root `dist/` build instead of creating a new ZIP filename when the user says not to create a new ZIP.

## 2026-07-08 About Collage Prime Minister Image Update

- Scope is About page image replacement only: `about/index.html`, one new optimized About WebP asset, documentation, and a small deploy ZIP.
- Source photo: `site content pic and video/jack with prime minister.jpg`, 1879 x 879, 196,854 bytes.
- New live asset: `public/media/about/jack-with-prime-minister.webp`, 1879 x 879, 122,326 bytes.
- Previous main collage image `public/media/about/jakapun-wallstreet.webp` remains in source history but is no longer referenced by the built site after this change; it was not included in the small deploy ZIP.
- No other images, videos, logos, icons, About sections, text, page layouts, header, footer, or deployment paths were changed.
- Passed: `cmd /c npm.cmd run build`.
- Passed: `cmd /c npm.cmd run build:hostinger`.
- Passed: `cmd /c npm.cmd run lint`.
- Passed: `cmd /c npm.cmd test`.
- Built reference verification passed: `dist/about/index.html` references `../media/about/jack-with-prime-minister.webp`, the built image exists, and no built HTML/CSS/JS reference to `jakapun-wallstreet.webp` remains.
- Small ZIP filename: `mstar-about-collage-image-update.zip`.
- Small ZIP size: 129,017 bytes.
- Small ZIP contents are limited to `about/index.html` and `media/about/jack-with-prime-minister.webp`; no full media folder, unrelated videos/images, source files, docs, package files, old ZIP files, wrapper folder, or Windows backslash paths are included.

## 2026-07-08 Safe Deployment Weight Optimization And Hostinger ZIP

- Ran the requested current audit. `cmd /c "npm.cmd run weight:audit 2>&1 | head -c 4000"` could not run because `head` is unavailable in this Windows shell, so the audit was run with `cmd /c npm.cmd run weight:audit` and output kept concise.
- Source/public optimization result: no tracked image or video binaries were changed. Safe PNG recompression testing produced no smaller exact-pixel output for tracked assets, and the already optimized videos/WebP portraits/logos were left untouched to avoid visual degradation.
- Current `public/` before optimization: 55,873,519 bytes across 96 files.
- Current `public/` after optimization: 55,873,519 bytes across 96 files.
- Generated `dist/` before deploy cleanup: 56,328,119 bytes.
- Cleaned final `dist/` after unused deploy-asset exclusion and root governance aliases: 48,752,285 bytes across 97 files.
- Removed from final deploy `dist/`: `media/operations-poster.png`, `media/growth-poster.png`, `media/hero-poster.png`, `videos/business-senior-home-care.mp4`, `videos/business-foodonlines.mp4`, `videos/business-seniorhome-private-nursing-hut.mp4`, and 13 unused SVG logo alternates under `media/logos/`.
- The three large PNG poster files are untracked local files and unused by the current built site, which references the tracked `.webp` poster files instead; they were not committed and were excluded from the new live ZIP.
- Added root deployment alias folders in final `dist/`: `executive-management/`, `board-of-directors/`, and `code-of-conduct/`; canonical `corporate-governance/` folders remain present.
- Largest files before deploy cleanup included `videos/mstar-holding-company-intro.mp4` at 8,023,223 bytes, `media/leadership/jakapun-viwatkurkul-founder-president.webp` at 6,457,944 bytes, `videos/business-mstar-property.mp4` at 3,879,641 bytes, `videos/business-page-header-desktop.mp4` at 3,185,218 bytes, and `media/about/jakapun-viwatkurkul-president.webp` at 2,673,704 bytes.
- Largest files after deploy cleanup are the same approved live referenced assets, with unused poster PNGs and unused videos no longer included in `dist/`.
- Verification passed: `cmd /c npm.cmd run build`, `cmd /c npm.cmd run build:hostinger`, `cmd /c npm.cmd run lint`, `cmd /c npm.cmd test`, and `cmd /c npm.cmd run weight:audit`.
- Built reference verification passed: 76 deploy media/video/brand assets included, 0 unused included assets found, and 0 broken references found across built HTML/CSS/JS.
- `.htaccess` verification passed: included at ZIP root, no GitHub Pages redirects, no localhost/local IP paths, direct file/directory pass-through remains before any fallback behavior, compression/cache rules remain safe, and root governance shorthand routes redirect to canonical Corporate Governance pages.
- New ZIP filename: `Mstar-Holding-Hostinger-Latest-Optimized.zip`.
- New ZIP size: 48,062,899 bytes.
- ZIP verification passed: 97 entries, contents of `dist/` directly at root, `.htaccess` and `index.html` at root, required page folders present, no wrapper folder, no source files, no `node_modules`, no `.git`, no package files, no docs, no old ZIPs, no screenshots/temp/backups, no unused media assets, no loose misplaced image/text files at root, and no Windows backslash paths.

## 2026-07-08 Footer Typography And Legal Page Styling

- Scope is CSS/docs/deployment ZIP only: global shared footer heading typography and Privacy/Terms legal document styling.
- No media assets, videos, logos, images, legal text meaning, Code of Conduct content, footer link names/order, page content, header, or deployment paths were intentionally changed.
- Passed: `cmd /c npm.cmd run build`.
- Passed: `cmd /c npm.cmd run build:hostinger`.
- Passed: `cmd /c npm.cmd run lint`.
- Passed: `cmd /c npm.cmd test`.
- Existing `mstar-latest-changes-deploy.zip` was refreshed in place from the Hostinger/root `dist/` build; no new ZIP filename was created.
- ZIP size: 55,627,400 bytes.
- ZIP entries: 113.
- Exclusion check passed: no wrapper folder, no source/development files, and no Windows backslash paths.
- Legal page check passed: `terms-of-service/index.html`, `privacy-policy/index.html`, and `.htaccess` are present in the ZIP.

## 2026-07-07 Global Footer Sync And Centering

- Scope is footer/shared layout only: shared footer sync script, package prebuild hooks, source footer normalization, centered footer CSS, and documentation.
- No media assets, videos, logos, images, body page content, header design, corporate governance dropdowns, legal/code content, or deployment base paths were changed.
- Passed: `cmd /c npm.cmd run build`.
- Passed: `cmd /c npm.cmd run build:hostinger`.
- Passed: `cmd /c npm.cmd run lint`.
- Passed: `cmd /c npm.cmd test`.
- Dist footer verification passed for 15 built pages with all required groups present and no old `footer-governance` markup.
- Refreshed existing `mstar-latest-changes-deploy.zip` from the Hostinger/root `dist/` build with no new ZIP filename.
- ZIP size: 55,627,336 bytes.
- ZIP entries: 113.
- Exclusion check passed: no wrapper folder, no source/development files, and no Windows backslash paths.
- Legal page check passed: `terms-of-service/index.html` and `privacy-policy/index.html` are present in the ZIP.

## 2026-07-07 Legal Pages And Footer Links

- Scope is HTML/CSS/JS/docs only: two new legal pages, source footer link groups, legal-page responsive CSS, and inner-page header state support for legal pages.
- No media assets, videos, logos, image crops, deployment base paths, or existing page body content were changed.
- Passed: `cmd /c npm.cmd run build`.
- Passed: `cmd /c npm.cmd run build:hostinger`.
- Passed: `cmd /c npm.cmd run lint`.
- Passed: `cmd /c npm.cmd test`.
- Refreshed existing `mstar-latest-changes-deploy.zip` from the Hostinger/root `dist/` build with no new ZIP filename.
- ZIP size: 55,627,333 bytes.
- ZIP entries: 113.
- Exclusion check passed: no wrapper folder, no source/development files, and no Windows backslash paths.
- Legal page check passed: `terms-of-service/index.html` and `privacy-policy/index.html` are present in the ZIP.

## 2026-07-07 Live Image Asset Weight Optimization

- Optimization scope was limited to tracked public PNG/WebP image assets; videos were audited only through the existing weight audit and were not changed.
- Optimized only candidates that reopened with the same dimensions, the same decoded RGBA pixels, and the same alpha/transparency range.
- Total tracked live image savings: 146,156 bytes.
- Public image total: 29,946,142 bytes before, 29,799,986 bytes after.
- Dist total: 56,407,659 bytes before, 56,261,503 bytes after.
- Dist image total: 29,946,142 bytes before, 29,799,986 bytes after.

### Files Optimized

| File                                                                              |        Before |         After |        Saved |
| --------------------------------------------------------------------------------- | ------------: | ------------: | -----------: |
| `public/media/leadership/board/antonio-pereira-board-member.webp`                 | 591,930 bytes | 579,558 bytes | 12,372 bytes |
| `public/media/leadership/board/ben-king-board-member.webp`                        | 701,282 bytes | 676,634 bytes | 24,648 bytes |
| `public/media/leadership/board/jeffrey-qiu-board-member.webp`                     | 702,818 bytes | 657,850 bytes | 44,968 bytes |
| `public/media/leadership/board/mike-zhao-board-member.webp`                       | 586,148 bytes | 574,278 bytes | 11,870 bytes |
| `public/media/leadership/board/paul-leung-board-member.webp`                      | 717,634 bytes | 689,782 bytes | 27,852 bytes |
| `public/media/leadership/board/rayyan-al-assad-board-member.webp`                 | 684,242 bytes | 662,446 bytes | 21,796 bytes |
| `public/media/leadership/pasit-viwatkurkul-vice-president-ceo-mstar-defense.webp` | 247,660 bytes | 245,010 bytes |  2,650 bytes |

### Largest Images After Optimization

| File                                                          |            Size |
| ------------------------------------------------------------- | --------------: |
| `media/leadership/jakapun-viwatkurkul-founder-president.webp` | 6,457,944 bytes |
| `media/about/jakapun-viwatkurkul-president.webp`              | 2,673,704 bytes |
| `media/operations-poster.png`                                 | 2,142,994 bytes |
| `media/growth-poster.png`                                     | 2,074,676 bytes |
| `media/hero-poster.png`                                       | 1,932,927 bytes |
| `media/leadership/steven-lou-chief-strategy-officer.png`      | 1,457,219 bytes |
| `media/leadership/chief-financial-officer.png`                |   966,045 bytes |
| `media/logos/american-buying-service-logo.png`                |   864,971 bytes |
| `media/logos/mstar-property-logo.png`                         |   811,198 bytes |
| `media/about/mstar-holding-logo.png`                          |   722,791 bytes |

### Verification And Live ZIP

- Decoded-pixel verification passed for every optimized file: dimensions unchanged, alpha ranges unchanged, and RGBA pixel comparison identical against the previous committed file.
- Tracked PNG recompression audit found no smaller pixel-identical PNG candidates, so no PNG files were changed.
- Passed: `cmd /c npm.cmd run build`.
- Passed: `cmd /c npm.cmd run build:hostinger`.
- Passed: `cmd /c npm.cmd run lint`.
- Passed: `cmd /c npm.cmd test`.
- Passed: `cmd /c npm.cmd run weight:audit`.
- Refreshed existing `mstar-latest-changes-deploy.zip` from the Hostinger/root `dist/` build.
- ZIP filename was not changed and no new ZIP filename was created.
- ZIP size: 55,608,646 bytes.
- ZIP entries: 111.
- Exclusion check passed: no wrapper folder, source folders, development files, docs, `node_modules/`, `.git/`, Windows backslash paths, or absolute paths.

## 2026-07-07 Board Of Directors Profile Grid Assets

- Replaced the previous Paul Leung board asset with the requested replacement portrait.
- Replaced the old `antonia-espada-board-member.webp` asset with the requested Antonio Pereira portrait as `antonio-pereira-board-member.webp`.
- Added six cleaned transparent board portrait assets as lossless WebP files under `public/media/leadership/board/`.
- Asset sizes:
  - `mike-zhao-board-member.webp`: 586,148 bytes.
  - `jeffrey-qiu-board-member.webp`: 702,818 bytes.
  - `rayyan-al-assad-board-member.webp`: 684,242 bytes.
  - `paul-leung-board-member.webp`: 717,634 bytes.
  - `antonio-pereira-board-member.webp`: 591,930 bytes.
  - `ben-king-board-member.webp`: 701,282 bytes.
- The Board page also reuses the existing approved `jakapun-viwatkurkul-founder-president.webp` leadership image.
- Refreshed the existing `mstar-latest-changes-deploy.zip` from the Hostinger/root `dist/` build after verification.
- ZIP filename was not changed and no new ZIP filename was created.
- ZIP size: 55,756,748 bytes.
- ZIP entries: 111.
- Exclusion check passed: no wrapper folder, source folders, development files, docs, `node_modules/`, `.git/`, Windows backslash paths, or absolute paths.

## 2026-07-07 Leadership Portrait Background Transparency

- Updated all five active `public/media/leadership/` Executive Management portrait assets so their image backgrounds are transparent.
- The remaining visible portrait pixels were preserved unchanged in RGB; only border-connected white/near-white background pixels were changed to transparent alpha.
- Asset size changes:
  - `jakapun-viwatkurkul-founder-president.webp`: 648,310 bytes to 6,457,944 bytes.
  - `pasit-viwatkurkul-vice-president-ceo-mstar-defense.jpg`: removed 102,519-byte opaque JPG.
  - `pasit-viwatkurkul-vice-president-ceo-mstar-defense.webp`: added 247,660-byte transparent WebP.
  - `chief-financial-officer.png`: 908,100 bytes to 966,045 bytes.
  - `paul-pongpichant-chief-operating-officer.webp`: 16,950 bytes to 160,456 bytes.
  - `steven-lou-chief-strategy-officer.png`: unchanged at 1,457,219 bytes.

## 2026-07-07 Leadership Transparency Live File Refresh

- Refreshed the existing `mstar-latest-changes-deploy.zip` from the Hostinger/root `dist/` build after making all Executive Management leadership portrait backgrounds transparent.
- ZIP filename was not changed and no new ZIP file was created.
- ZIP size: 51,772,511 bytes.
- Verified the ZIP contains exactly the five active transparent leadership assets, removes the old Pasit JPG, keeps exactly five Executive Management profiles, and preserves `https://mstarholding.com/` canonicals.
- Exclusion check passed: no wrapper folder, source folders, development files, docs, `node_modules/`, or `.git/` entries.

## 2026-07-06 Leadership Portrait Box Live File Refresh

- Refreshed the existing `mstar-latest-changes-deploy.zip` from the Hostinger/root `dist/` build after the Executive Management portrait box alignment fix.
- ZIP filename was not changed and no new ZIP file was created.
- ZIP size: 45,577,548 bytes.
- Verified the ZIP Executive Management page references the new CSS asset, keeps exactly five leadership profiles, and the built CSS includes the portrait flex-end alignment, hidden overflow, and center-bottom object positioning rules.
- Exclusion check passed: no wrapper folder, source folders, development files, docs, `node_modules/`, or `.git/` entries.

## 2026-07-06 Steven Lou Leadership Image Transparency

- Updated only `public/media/leadership/steven-lou-chief-strategy-officer.png`.
- The corrected transparent PNG keeps the same 1086 x 1448 dimensions and preserves all visible person RGB pixels unchanged.
- Source/public image size changed from 1,407,047 bytes to 1,457,219 bytes after replacing the baked-in checker/white-gray background pixels with alpha transparency.
- No ZIP file was created.

## 2026-07-06 Jakapun Biography Live File Refresh

- Refreshed the existing `mstar-latest-changes-deploy.zip` from the Hostinger/root `dist/` build after the Jakapun Executive Management biography update.
- ZIP filename was not changed and no new ZIP file was created.
- ZIP size: 45,577,500 bytes.
- Verified the ZIP Executive Management page contains the updated Jakapun biography, keeps exactly five leadership profiles, uses `https://mstarholding.com/` canonicals, and contains no GitHub Pages URLs.
- Exclusion check passed: no wrapper folder, source folders, development files, docs, `node_modules/`, or `.git/` entries.

## 2026-07-06 Corporate Governance Live File Refresh

- Refreshed existing `mstar-latest-changes-deploy.zip` from the latest Hostinger/root `dist/` build.
- ZIP filename was not changed.
- ZIP size: 45,511,982 bytes.
- ZIP entries: 105.
- Required governance entries verified present: Board of Directors page, Executive Management page, Code of Conduct page, and all five leadership images.
- Exclusion check passed: no wrapper folder, no source/development files, no docs, no `node_modules/`, no `.git/`, and no bad backslash paths.

## 2026-07-02 Homepage Growth Card Row Scroll Fix ZIP

- Created small deploy ZIP `mstar-homepage-card-row-scroll-fix.zip` for the homepage mobile/tablet growth card-row scroll fix.
- ZIP source: selected files from current `dist/` build only.
- ZIP size: 98,392 bytes.
- ZIP entries: 12.
- Included updated route HTML files that reference the new hashes: root `index.html`, `about/index.html`, `business/index.html`, `news/index.html`, and all six News article detail pages.
- Included new built assets: `assets/main-B-eN-78P.js` and `assets/main-aQXvLJu1.css`.
- Excluded media, videos, source folders, docs, backups, old ZIP files, `node_modules/`, and unrelated development files.
- ZIP verification: 0 missing required files, 0 excluded files, 0 bad loose root files, no wrapper folder, and no Windows backslash paths.
- Final upload instruction: upload `mstar-homepage-card-row-scroll-fix.zip` into Hostinger `public_html`, extract it directly there, and overwrite the matching files. Do not extract into a nested folder.

### Verification

- Passed: `cmd /c npm.cmd run build`.
- Passed: `cmd /c npm.cmd run build:hostinger`.
- Passed: `cmd /c npm.cmd run lint`.
- Passed: `cmd /c npm.cmd test`.
- Confirmed production CSS includes `touch-action: pan-x` for the homepage growth-theme row.
- Confirmed production JS includes `requestAnimationFrame` and `orientationchange` hint recalculation.
- Confirmed built HTML references `assets/main-B-eN-78P.js` and `assets/main-aQXvLJu1.css`.

## 2026-07-02 About Tightening And Growth Theme Scroll Hint

- No media, video, image source, icon source, font, dependency, deployment ZIP, or deployment base-path change was added.
- The change is limited to About page spacing/alignment CSS, homepage growth-theme scroll hint markup/CSS, shared lightweight scroll-hint JavaScript, and documentation.
- Further tightened desktop About section rhythm and aligned Built Across Industries heading/body text.
- Added the mobile/tablet right-scroll hint for the homepage Infrastructure / Investment / Innovation / Asia Growth Opportunities / Strategic Partnerships row.
- Rebuilt production output with regular Vite build for verification only; no Hostinger ZIP was created in this pass.
- New verification build bundle files: `assets/main-CVgXB58C.js` and `assets/main-DTRsy_DO.css`.

### Verification

- Passed: `cmd /c npm.cmd run build`.
- Passed: `cmd /c npm.cmd run lint`.
- Passed: `cmd /c npm.cmd test`.
- Confirmed built homepage output includes the growth-theme scroll hint markup/state hook.
- Confirmed built CSS/JS include the growth-theme scroll hint styles and shared scroll-state helper.
- Confirmed About spacing changes remain scoped to About selectors and do not change image paths, map content, counter values, or page text.

## 2026-07-02 About Desktop Spacing And Section Alignment

- No media, video, image source, font, dependency, deployment ZIP, or deployment base-path change was added.
- The change is limited to About page spacing/alignment CSS plus documentation.
- Tightened desktop President Message, About Mstar Holding, Global Presence, and Built Across Industries spacing.
- Corrected Built Across Industries heading/body alignment without changing content or metric card design.
- Rebuilt production output with regular Vite build for verification only; no Hostinger ZIP was created in this pass.
- New verification build bundle files: `assets/main-COQy6FrI.js` and `assets/main-CKrAfO47.css`.

### Verification

- Passed: `cmd /c npm.cmd run build`.
- Passed: `cmd /c npm.cmd run lint`.
- Passed: `cmd /c npm.cmd test`.
- Confirmed the source changes are CSS-scoped to About page selectors and do not change image paths or content.

## 2026-07-02 Homepage Scroll Hint And Sector Label Refinement

- No media, video, image source, font, dependency, deployment ZIP, or deployment base-path change was added.
- The change is limited to homepage HTML/CSS/JS plus documentation.
- Added a small homepage sector scroll hint overlay and lightweight scroll-state JavaScript.
- Centered desktop slanted sector card labels without changing card/image dimensions, crop/fitting, or source files.
- Rebuilt production output with regular Vite build for verification only; no Hostinger ZIP was created in this pass.
- New verification build bundle files: `assets/main-B9BZ_vPE.js` and `assets/main-BBYStwF7.css`.

### Verification

- Passed: `cmd /c npm.cmd run build`.
- Passed: `cmd /c npm.cmd run lint`.
- Passed: `cmd /c npm.cmd test`.
- Confirmed source and built homepage output include the scroll hint markup/state hooks.
- Confirmed source CSS contains the desktop label safe-positioning rule and preserves existing tablet/mobile label overrides.

## 2026-07-02 Mobile Menu Contrast Deployment ZIP

- Created `Mstar-Holding-Live-Hostinger-2026-07-02-Mobile-Menu-Fix.zip` as the latest full Hostinger deployment package including the mobile/tablet hamburger menu contrast fix.
- Replaced the previous tracked `Mstar-Holding-Live-Hostinger-2026-07-02-Optimized-Full.zip` package.
- ZIP source: `dist/` contents only.
- ZIP size: 36,349,589 bytes, about 34.67 MB.
- ZIP entries: 94.
- ZIP required-file check: 0 missing required files.
- ZIP excluded-file check: 0 excluded source/development entries.
- ZIP root is direct-extract ready for Hostinger `public_html`, with entries such as `.htaccess`, `index.html`, `about/index.html`, `assets/`, `media/`, `business/`, `news/`, and `videos/`.
- New production bundle files: `assets/main-DUWOFW4m.js` and `assets/main-DzHvP890.css`.
- `public/`: 35 MB across 82 files.
- `dist/`: 35 MB across 94 files.
- MP4 total: 25 MB across 20 files.
- PNG total: 4.6 MB across 29 files.
- JPG/JPEG total: 0 B across 0 files.
- WebP total: 5.4 MB across 18 files.
- Final upload instruction: upload `Mstar-Holding-Live-Hostinger-2026-07-02-Mobile-Menu-Fix.zip` into Hostinger `public_html`, extract it directly there, and overwrite the old live files. Do not extract into a nested folder.

### Verification

- Passed: `cmd /c npm.cmd run build`.
- Passed: `cmd /c npm.cmd run build:hostinger`.
- Passed: `cmd /c npm.cmd run lint`.
- Passed: `cmd /c npm.cmd test`.
- Passed: `cmd /c npm.cmd run weight:audit`.
- Confirmed the built CSS includes the mobile/tablet open-menu overlay rule and the current HTML references the new built CSS/JS files.

## 2026-07-02 About Collage Alignment And Counter Deployment Refresh

- No media, video, image, font, dependency, social/fav asset, or deployment base-path change was added.
- Refreshed `Mstar-Holding-Live-Hostinger-2026-07-02-Optimized-Full.zip` from `dist/` after the About collage alignment and metrics counter fix.
- Refreshed ZIP size: 36,349,510 bytes, about 34.67 MB.
- `public/`: 35 MB across 82 files.
- `dist/`: 35 MB across 94 files.
- MP4 total: 25 MB across 20 files.
- PNG total: 4.6 MB across 29 files.
- JPG/JPEG total: 0 B across 0 files.
- WebP total: 5.4 MB across 18 files.
- New production bundle files: `assets/main-BsqR2vtj.js` and `assets/main-BUz7QNU7.css`.
- ZIP verification: 94 entries, 0 missing required files, 0 excluded source/development entries, no old `main-CmlMijk8.js`, no old `main-BY3jYTCw.css`, no stale live `main-CnkKb-uX.js`, and no stale live `main-D4DzLPMp.css`.
- The ZIP remains direct-extract ready for Hostinger `public_html` and is still built from `dist/` only.
- Final upload instruction: upload `Mstar-Holding-Live-Hostinger-2026-07-02-Optimized-Full.zip` into Hostinger `public_html`, extract it directly there, and overwrite the old live files. Do not extract into a nested folder.

### Verification

- Passed: `cmd /c npm.cmd run build`.
- Passed: `cmd /c npm.cmd run build:hostinger`.
- Passed: `cmd /c npm.cmd run lint`.
- Passed: `cmd /c npm.cmd test`.
- Passed: `cmd /c npm.cmd run weight:audit`.
- Confirmed `dist/about/index.html` includes the latest About sections and metric counter data attributes.
- Confirmed the production JS bundle includes the About metrics grid observer target, mobile-safe `-10%` bottom root margin, `requestAnimationFrame` animation, and refresh-near-section viewport fallback.
- Confirmed the production CSS bundle includes the desktop/tablet About collage wrapper alignment rule.

## 2026-07-02 Optimized Full Hostinger Deployment ZIP

- Created `Mstar-Holding-Live-Hostinger-2026-07-02-Optimized-Full.zip` as the new optimized full live-site Hostinger package.
- Previous ZIP: `Mstar-Holding-Live-Hostinger-2026-07-02-Latest.zip`.
- Previous ZIP size: 45,799,192 bytes, about 43.68 MB.
- New optimized ZIP size: 36,349,401 bytes, about 34.67 MB.
- Previous `dist/` size: 44 MB across 94 files.
- New optimized `dist/` size: 35 MB across 94 files.
- New optimized `public/` size: 35 MB across 82 files.
- MP4 total: 25 MB across 20 files.
- PNG total: 4.6 MB across 29 files.
- JPG/JPEG total: 0 B across 0 files.
- WebP total: 5.4 MB across 18 files.
- ZIP source: `dist/` contents only.
- ZIP entries: 94.
- ZIP path check: 0 backslash-stored paths.
- ZIP required-file check: 0 missing required files.
- ZIP excluded-file check: 0 excluded source/development entries.
- Built reference validation: 239 local references checked, 0 missing/outside references, and 0 GitHub Pages/GitHub repository/localhost/source-folder references.
- Final upload instruction: upload `Mstar-Holding-Live-Hostinger-2026-07-02-Optimized-Full.zip` into Hostinger `public_html`, extract it directly there, and overwrite the old live files. Do not extract into a nested folder.

### Optimization Steps

- Converted `public/media/about/jack-windmill.jpg` to `public/media/about/jack-windmill.webp` at the same 2988 x 5312 dimensions.
- Converted `public/media/about/jakapun-wallstreet.jpg` to `public/media/about/jakapun-wallstreet.webp` at the same 3264 x 2448 dimensions.
- Updated About page source references to the optimized WebP paths and removed the unused old JPGs from `public/media/about/`.
- Losslessly optimized `public/media/about/mstar-holding-logo.png` from 827,665 bytes to 722,791 bytes.
- Kept transparent icons as PNG and confirmed the eight About metric icons preserve real alpha transparency with zero partial-alpha halo pixels.
- Left approved MP4 videos unchanged because `ffmpeg` and `ffprobe` were not available on PATH during this pass.
- Added Hostinger-safe `.htaccess` `DirectoryIndex` and extensionless page redirects while preserving compression/cache rules and asset pass-through.

### Largest Files After Optimization

1. `videos/mstar-holding-company-intro.mp4` 7.7 MB.
2. `videos/business-mstar-property.mp4` 3.7 MB.
3. `videos/business-page-header-desktop.mp4` 3.0 MB.
4. `media/about/jakapun-viwatkurkul-president.webp` 2.5 MB.
5. `videos/business-page-header-mobile.mp4` 1.8 MB.
6. `videos/business-american-buying-service.mp4` 1.1 MB.
7. `videos/business-senior-home.mp4` 941 KB.
8. `media/logos/american-buying-service-logo.png` 845 KB.
9. `videos/business-buyhomeforless.mp4` 808 KB.
10. `media/logos/mstar-property-logo.png` 792 KB.
11. `videos/business-boogoo.mp4` 738 KB.
12. `videos/business-mstar-airsoft.mp4` 728 KB.
13. `media/about/mstar-holding-logo.png` 706 KB.
14. `videos/business-mstar-defense.mp4` 693 KB.
15. `media/about/jack-windmill.webp` 646 KB.
16. `videos/business-hospitality-senior-home-care.mp4` 637 KB.
17. `videos/business-senior-home-care.mp4` 637 KB.
18. `videos/business-foodonlines.mp4` 595 KB.
19. `videos/business-foodonlines-2.mp4` 561 KB.
20. `media/about/jakapun-wallstreet.webp` 455 KB.

### Verification

- Passed: `cmd /c npm.cmd run build:hostinger`.
- Passed: `cmd /c npm.cmd run lint`.
- Passed: `cmd /c npm.cmd test`.
- Passed: `cmd /c npm.cmd run weight:audit`.
- Confirmed `dist/index.html`, `dist/about/index.html`, `dist/business/index.html`, `dist/news/index.html`, `dist/.htaccess`, `dist/assets/`, `dist/media/`, and `dist/videos/` exist.
- Confirmed all six News article detail pages exist under `dist/news/`.
- Confirmed `dist/about/index.html` includes `Message from the President`, `About Mstar Holding`, `Growing Our Global Presence`, `Built Across Industries`, `Employees`, `R&D`, `Real Estate Projects`, `Real Estate Development`, `Logistics`, `Defense`, `Hospitality`, and `Food`.
- Confirmed `dist/about/index.html` references `jakapun-wallstreet.webp` and `jack-windmill.webp`.
- Confirmed `dist/.htaccess` includes `DirectoryIndex index.html`, extensionless `/about`, `/business`, and `/news` redirects, and file/directory pass-through before existing compression/cache rules.

## 2026-07-02 Latest Hostinger Deployment ZIP

- Created and verified `Mstar-Holding-Live-Hostinger-2026-07-02-Latest.zip` as the latest full live-site Hostinger package.
- ZIP source: `dist/` contents only.
- ZIP size: 45,799,192 bytes, about 43.68 MB.
- ZIP root is direct-extract ready for Hostinger `public_html`, with no enclosing `dist/`, repository, or staging wrapper folder.
- ZIP root entries include `.htaccess`, `index.html`, `about/index.html`, `assets/`, `media/`, `business/`, `news/`, and `videos/`.
- Required files verified present in the ZIP/build output: `index.html`, `about/index.html`, `.htaccess`, `assets/`, `media/about/mstar-holding-logo.png`, `media/about/jakapun-wallstreet.jpg`, `media/about/jack-windmill.jpg`, and the eight About metric icon PNG files.
- The ZIP excludes `.git/`, `node_modules/`, `src/`, `public/`, `site content pic and video/`, package files, Vite config, project notes, source maps, backups, screenshots, temporary deploy folders, and previous deployment ZIP files.
- Removed older tracked deployment ZIP artifacts from the repository working tree: `mstar-about-page-live-deploy-2026-07-01.zip`, `mstar-business-contact-section-live-update.zip`, and `mstar-holding-full-live-site-clean.zip`.
- Final upload instruction: upload `Mstar-Holding-Live-Hostinger-2026-07-02-Latest.zip` into Hostinger `public_html`, extract it directly there, and overwrite the old live files. Do not extract into a nested folder.

### Latest Size Audit

- `public/`: 44 MB across 82 files.
- `dist/`: 44 MB across 94 files.
- MP4 total: 25 MB across 20 files.
- PNG total: 4.7 MB across 29 files.
- JPG/JPEG total: 10 MB across 2 files.
- WebP total: 4.4 MB across 16 files.
- Largest files in `dist/`: `videos/mstar-holding-company-intro.mp4` 7.7 MB, `media/about/jack-windmill.jpg` 6.9 MB, `videos/business-mstar-property.mp4` 3.7 MB, `media/about/jakapun-wallstreet.jpg` 3.1 MB, and `videos/business-page-header-desktop.mp4` 3.0 MB.

### Latest ZIP Checks

- Passed earlier packaging checks: `cmd /c npm.cmd run build:hostinger`, `cmd /c npm.cmd run lint`, `cmd /c npm.cmd test`, and `cmd /c npm.cmd run weight:audit`.
- Passed follow-up `cmd /c npm.cmd run weight:audit` before documentation and commit.
- Confirmed the ZIP has 94 entries, zero backslash-stored paths, zero missing required files, and zero excluded source/development entries.
- Confirmed the ZIP listing starts directly with live files/folders, including `.htaccess`, `index.html`, `about/index.html`, `assets/`, `media/`, `business/`, `news/`, and `videos/`.
- Confirmed built local asset-reference validation checked 157 references with 0 missing references.
- Confirmed no `/Mstar-Holding-new-site/`, GitHub Pages, GitHub repository, localhost, or source-folder references were found in `dist`.

## 2026-07-02 About Stat Icon Glow Removal

- No new media, image, video, font, third-party library, runtime dependency, remote asset, social/fav asset, or deployment base-path change was added.
- The change removes the existing About metric card top-right radial glow CSS and adds defensive no-filter/no-shadow icon CSS only.
- Production build output was regenerated by `cmd /c npm.cmd run build`.
- Passed: `cmd /c npm.cmd run build`.
- Passed: `cmd /c npm.cmd run lint`.
- Passed: `cmd /c npm.cmd test`.

## 2026-07-02 About Stat Card Icon Refinement

- Replaced the eight existing About metric icon PNG copies in `public/media/about/icons/` with cleaner transparent 512px versions generated from the existing local source icon folder.
- No new media categories, video, font, third-party library, runtime dependency, remote asset, social/fav asset, or deployment base-path change was added.
- The CSS change removes one icon drop-shadow rule and standardizes existing metric icon size/placement only.
- Production build output was regenerated by `cmd /c npm.cmd run build`.
- Passed: `cmd /c npm.cmd run build`.
- Passed: `cmd /c npm.cmd run lint`.
- Passed: `cmd /c npm.cmd test`.

## 2026-07-02 About Collage Logo Card Fit

- No new media, image, video, font, third-party library, runtime dependency, remote asset, social/fav asset, or deployment base-path change was added.
- The change adjusts only the existing CSS aspect ratio and padding for the third About collage logo card.
- Production build output was regenerated by `cmd /c npm.cmd run build`.
- Passed: `cmd /c npm.cmd run build`.
- Passed: `cmd /c npm.cmd run lint`.
- Passed: `cmd /c npm.cmd test`.

## 2026-07-02 About Collage Logo Fit

- No new media, image, video, font, third-party library, runtime dependency, remote asset, social/fav asset, or deployment base-path change was added.
- The change reduces existing CSS padding inside the About collage logo frame only.
- Production build output was regenerated by `cmd /c npm.cmd run build`.
- Passed: `cmd /c npm.cmd run build`.
- Passed: `cmd /c npm.cmd run lint`.
- Passed: `cmd /c npm.cmd test`.

## 2026-07-02 About Collage Spacing And Metrics Card Style

- No new media, image, video, font, third-party library, runtime dependency, remote asset, social/fav asset, or deployment base-path change was added.
- The collage refinement removes a CSS background shape and adjusts the existing logo card position only.
- The metrics refinement changes the Employees card theme from dark to light using existing card CSS patterns and keeps the existing icon asset.
- Production build output was regenerated by `cmd /c npm.cmd run build`.
- Passed: `cmd /c npm.cmd run build`.
- Passed: `cmd /c npm.cmd run lint`.
- Passed: `cmd /c npm.cmd test`.

## 2026-07-02 About Collage Placement And Metrics Icon Refinement

- Added eight optimized local transparent PNG icon copies under `public/media/about/icons/` for the About metrics cards.
- The icon copies are 512px PNGs created from the provided local icon folder; no remote assets, fonts, videos, third-party libraries, runtime dependencies, social/fav assets, or deployment base-path changes were added.
- Removed the previous large decorative metric image/logo cards from the About metrics layout, so the section is lighter visually and avoids unnecessary oversized blank surfaces.
- The counter fix remains lightweight browser JavaScript using `IntersectionObserver` and `requestAnimationFrame`.
- Production build output was regenerated by `cmd /c npm.cmd run build`.
- Passed: `cmd /c npm.cmd run build`.
- Passed: `cmd /c npm.cmd run lint`.
- Passed: `cmd /c npm.cmd test`.

## 2026-07-02 About Exact Logo Asset Correction

- Added one local About logo image copied from the provided source: `public/media/about/mstar-holding-logo.png`.
- No new video, font, third-party library, runtime dependency, remote asset, social/fav asset, or deployment base-path change was added.
- The change is limited to the About collage/metrics logo references, documentation, and regenerated production build output.
- Passed: `cmd /c npm.cmd run build`.
- Passed: `cmd /c npm.cmd run lint`.
- Passed: `cmd /c npm.cmd test`.

## 2026-07-02 About Collage Logo And Metrics Section

- No new image, video, font, third-party library, runtime dependency, remote asset, social/fav asset, or deployment base-path change was added.
- The collage logo and metrics logo card reuse the existing local brand asset `public/assets/brand/mstar-share.png`.
- The metrics image card reuses the existing local About windmill image.
- Added lightweight About-page HTML, CSS, and JavaScript only; counters use `IntersectionObserver` and `requestAnimationFrame` with no dependency additions.
- Production build output was regenerated by `cmd /c npm.cmd run build`.
- Passed: `cmd /c npm.cmd run build`.
- Passed: `cmd /c npm.cmd run lint`.
- Passed: `cmd /c npm.cmd test`.

## 2026-07-02 About Mobile Layout And Collage Frame Fix

- No new media, video, font, third-party library, runtime dependency, remote asset, social/fav asset, or deployment base-path change was added.
- The windmill collage fix reuses the existing local About windmill image and changes CSS geometry only.
- The mobile top visibility fix changes the About President Message observer trigger and phone-width CSS fallback only.
- Production build output was regenerated by `cmd /c npm.cmd run build`.
- Passed: `cmd /c npm.cmd run build`.
- Passed: `cmd /c npm.cmd run lint`.
- Passed: `cmd /c npm.cmd test`.

## 2026-07-02 About Mstar Holding Image Collage

- Added two local JPG assets for the About collage:
  - `public/media/about/jakapun-wallstreet.jpg`
  - `public/media/about/jack-windmill.jpg`
- No remote assets, fonts, videos, heavy libraries, runtime dependencies, or deployment base-path changes were added.
- The previous CSS-only placeholder became a three-frame responsive collage with one future-image placeholder.
- Production build output was regenerated by `cmd /c npm.cmd run build`.
- Passed: `cmd /c npm.cmd run build`.
- Passed: `cmd /c npm.cmd run lint`.
- Passed: `cmd /c npm.cmd test`.

## 2026-07-02 About Mstar Holding Section

- No media, image, video, font, third-party library, or runtime dependency was added.
- The left-side visual is a CSS-only shaped placeholder prepared for a future image.
- The change is limited to About page markup, scoped shared CSS, a small shared JS observer, documentation, and regenerated production build output.
- Production build output was regenerated by `cmd /c npm.cmd run build`.
- Passed: `cmd /c npm.cmd run build`.
- Passed: `cmd /c npm.cmd run lint`.
- Passed: `cmd /c npm.cmd test`.

## 2026-07-01 About Stats Counter Trigger Refinement

- No media, map assets, fonts, videos, images, third-party libraries, or runtime dependencies were added.
- The change is limited to one About stats wrapper data attribute, the Clients stat target/duration, shared JS counter observer logic, and documentation.
- Map CSS, map geometry, map animation styling, and media assets were not changed.
- Production build output was regenerated by `cmd /c npm.cmd run build`.
- Passed: `cmd /c npm.cmd run build`.
- Passed: `cmd /c npm.cmd run lint`.
- Passed: `cmd /c npm.cmd test`.

## 2026-07-01 About Global Presence Animation Refinement

- No media, map assets, fonts, videos, images, third-party libraries, or runtime dependencies were added.
- The change is limited to About page markup data attributes, shared CSS timing/contrast, shared JS observer/counter logic, and documentation.
- Production build output was regenerated by `cmd /c npm.cmd run build`.
- Passed: `cmd /c npm.cmd run build`.
- Passed: `cmd /c npm.cmd run lint`.
- Passed: `cmd /c npm.cmd test`.

## 2026-07-01 About Global Presence SVG Map Redesign

- Added one local generated source module, `src/world-map-data.js`, containing optimized SVG path data from Natural Earth 1:110m country geometry.
- No image, video, font, remote runtime asset, external map library, canvas renderer, or third-party animation library was added.
- The map renders as inline SVG paths with reusable dot patterns, keeping runtime behavior local and scalable.
- Refreshed the deployment ZIP from the latest `dist/` build output only.

## 2026-07-01 About Global Map Silhouette And Scroll Fix

- Refined the map using JavaScript geometry and SVG dots only; no new media assets were added.
- No remote assets, external map libraries, canvas renderer, third-party animation library, font, image, or video dependency was introduced.
- Compact ellipse highlight regions replace broad rectangular regions without increasing asset weight.
- Refreshed the deployment ZIP from the latest `dist/` build output only.

## 2026-07-01 About President Card Overlap Adjustment

- No asset changes were made.
- This refinement is CSS layout-only plus documentation and refreshed deployment ZIP.
- Refreshed the deployment ZIP from the latest `dist/` build output only.

## 2026-07-01 About Global Presence Map Refinement

- Rebuilt the map with generated SVG dots and simplified JavaScript geometry only.
- No new image, video, font, remote asset, dependency, map library, canvas renderer, or animation library was added.
- The section uses inline SVG groups populated at runtime for reasonable DOM size and crisp scaling.
- Refreshed the deployment ZIP from the latest `dist/` build output only.

## 2026-07-01 About President Portrait Layout Refinement

- No additional media variants were added.
- The About portrait remains a single WebP copied from the highest-quality available source in the requested leadership folder.
- The old generated PNG remains removed, so the live build does not carry duplicate About portrait assets.
- Refreshed the deployment ZIP from the latest `dist/` build output only.

## 2026-07-01 About Global Presence Map

- Added the About global presence map without new image, video, font, or remote assets.
- The dotted map is generated from lightweight inline JavaScript into the existing About page SVG.
- No external map libraries or heavy dependencies were added.
- Refreshed the deployment ZIP from the latest `dist/` build output only.

## 2026-07-01 About President Message Refinement

- Replaced the smaller generated About portrait PNG with the higher-quality original WebP portrait.
- Removed the unused generated PNG to avoid carrying duplicate About portrait media.
- No new video assets were added.
- Refreshed the deployment ZIP from the latest `dist/` build output only.

## 2026-07-01 About Page

- Added one optimized PNG portrait asset at `public/media/about/jakapun-viwatkurkul-president.png`.
- No new video assets were added.
- Production build continues to copy only final static assets into `dist/`.
- New full deployment ZIP is generated from `dist/` only as `mstar-about-page-live-deploy-2026-07-01.zip`.
- ZIP verification checks confirm no source folders, `.git`, `node_modules`, package files, old ZIP files inside the archive, wrapper folder, or misplaced loose brand/favicon image files.

## Permanent Deployment Rules

- Deploy live uploads from `dist/` only, not from the full source repository.
- Do not remove, rename, replace, compress, or visually change approved images, videos, logos, icons, article media, layouts, crop intent, article order, or approved design without a new explicit request.
- Keep all used Git assets visible on live.
- Keep public metadata, schema, canonical links, Open Graph URLs, and Twitter image URLs on `https://mstarholding.com/`.
- Do not use GitHub Pages URLs in public metadata, schema, navigation, or CTAs.
- Preserve Vite relative build compatibility.
- Do not create a deployment ZIP unless explicitly requested.
- Use `npm run weight:audit` before later packaging or upload decisions.

## 2026-07-06 Corporate Governance Pages

- Added five approved leadership images to `public/media/leadership/` for the Executive Management page.
- Source images were copied only once from the local leadership board folder and renamed with clean lowercase kebab-case filenames.
- No AI-generated, stock, duplicate, or unused leadership images were added.
- No existing approved images, videos, logos, icons, article media, layouts, crop intent, article order, or approved design assets were removed, renamed, compressed, or replaced.
- No deployment ZIP was created for this pass.

## 2026-06-30 GitHub Pages And Hostinger Build Split

- No new deployment ZIP was created for the GitHub Pages styling fix.
- GitHub Pages build uses `/Mstar-Holding-new-site/` and is not reused for Hostinger upload.
- Hostinger/root build remains available with `/` for future live ZIP creation.
- The existing deployment-weight rules still apply to future ZIPs: exclude development files, old backups, `.git`, `node_modules`, previous ZIPs, temporary deploy folders, and unused source-only files.

## 2026-06-30 Business Contact Section Update

- No new heavy assets were added.
- Update is HTML/CSS-only and reuses the existing homepage contact visual system.
- No images, videos, logos, icons, or media files were added or changed.

## 2026-06-30 Full Live ZIP Forward-Slash Packaging

- Created `mstar-holding-full-live-site-clean.zip` as a full live-site Hostinger package from a clean `dist/` staging folder.
- Full live ZIP excludes development files, `node_modules`, `.git`, old backups, previous ZIP files, temporary deploy folders, and unused source-only files.
- ZIP uses forward-slash paths for Hostinger/Linux extraction, verified with Python `ZipFile.namelist()`.
- No loose duplicate brand image files are included at the ZIP root; brand assets remain inside `assets/brand/`.
- No unnecessary heavy media was added.

## 2026-06-30 Corrected Brand-Only Root Clean ZIP

- Recreated `mstar-holding-clean-live-deploy.zip` after deleting old ZIP files and the previous temporary deploy folder.
- Clean ZIP excludes development files, old backups, loose duplicate image files, `node_modules`, `.git`, source folders, package files, and old ZIPs.
- No favicon, logo, social preview, or brand image files are loose in the ZIP root.
- All brand assets are inside `assets/brand/`.
- No unnecessary heavy media was added.

## 2026-06-30 Clean Full Hostinger Deploy ZIP

- Created `mstar-holding-clean-live-deploy.zip` from a clean staging folder populated only from the final built live output.
- The ZIP is direct-extract ready for Hostinger `public_html` and does not contain a wrapper folder.
- The clean deploy ZIP excludes development files, old backups, `node_modules`, `.git`, previous ZIP files, package files, source folders, screenshots, temporary deploy folders, and unused source-only assets.
- No unnecessary heavy media was added.
- Included only static live-site files: built HTML, built assets, organized brand assets, root favicon fallbacks, `.htaccess`, used media, and used videos.
- Verified archive entries use normal forward-slash folder paths for pages such as `business/index.html` and `news/.../index.html`.

## 2026-06-30 Approved Media Compression Pass

- Explicit approval was given to optimize/compress approved media for smaller deployment size.
- No public asset paths, filenames, layout, crop intent, article order, card behavior, metadata behavior, or page structure were changed.
- Original media backups were kept outside the repo and outside Vite build output.
- No backup originals were placed in `public/`, `dist/`, or Git.
- No approved image, video, logo, icon, or article media was removed.
- No deployment ZIP was created.

### Final Size Summary

- `public/`: 253 MB before, 107.43 MB after.
- `dist/`: 253 MB before, 107.53 MB after.
- MP4 total: 226 MB before, 81.36 MB after.
- PNG total: 27 MB before, 26 MB after.
- Final Hostinger upload target is `dist/`, now 107.53 MB.

### Video Optimization

- Re-encoded all `public/videos/*.mp4` files to H.264 MP4 with `-movflags +faststart` and `pix_fmt yuv420p`.
- Removed audio from autoplay-muted videos because no site video exposes controls or uses audio.
- Kept the same filenames and paths.
- Used CRF 28 for all videos first.
- Used CRF 30 only for larger below-fold/company videos after the CRF 28 pass, keeping hero/header videos at CRF 28.
- All final MP4 files are ffprobe-readable.

| File                                          | Original |    Final |    Saved |
| --------------------------------------------- | -------: | -------: | -------: |
| `business-mstar-property.mp4`                 | 35.97 MB | 17.74 MB | 18.23 MB |
| `mstar-holding-company-intro.mp4`             | 22.80 MB | 12.39 MB | 10.42 MB |
| `business-senior-home.mp4`                    | 15.88 MB |  4.06 MB | 11.81 MB |
| `business-foodonlines.mp4`                    | 14.63 MB |  2.63 MB | 11.99 MB |
| `business-buyhomeforless.mp4`                 | 14.47 MB |  3.70 MB | 10.77 MB |
| `business-page-header-desktop.mp4`            | 14.06 MB |  4.99 MB |  9.07 MB |
| `business-page-header-mobile.mp4`             | 13.72 MB |  5.99 MB |  7.73 MB |
| `business-seniorhome-private-nursing-hut.mp4` | 11.72 MB |  0.84 MB | 10.88 MB |
| `business-senior-home-care.mp4`               | 10.64 MB |  2.80 MB |  7.84 MB |
| `business-hospitality-senior-home-care.mp4`   | 10.64 MB |  2.80 MB |  7.84 MB |
| `business-boogoo.mp4`                         |  9.84 MB |  3.50 MB |  6.34 MB |
| `business-american-buying-service.mp4`        |  9.71 MB |  5.09 MB |  4.61 MB |
| `business-mstar-defense.mp4`                  |  9.59 MB |  3.40 MB |  6.19 MB |
| `business-ecommerce-foodonlines.mp4`          |  8.12 MB |  2.30 MB |  5.82 MB |
| `business-foodonlines-2.mp4`                  |  7.35 MB |  2.50 MB |  4.85 MB |
| `business-mstar-airsoft.mp4`                  |  5.79 MB |  3.31 MB |  2.48 MB |
| `business-mstar-technology.mp4`               |  4.00 MB |  0.81 MB |  3.19 MB |
| `business-one-taste.mp4`                      |  2.76 MB |  1.13 MB |  1.63 MB |
| `business-hizoz.mp4`                          |  2.74 MB |  0.88 MB |  1.86 MB |
| `business-abs-fulfillment.mp4`                |  1.39 MB |  0.49 MB |  0.90 MB |

### PNG Optimization

- Used lossless PNG recompression with Pillow where output was smaller.
- Preserved transparency and dimensions.
- Kept the same filenames and paths.

| File                                                    | Original |    Final |    Saved |
| ------------------------------------------------------- | -------: | -------: | -------: |
| `homepage/sector-defense.png`                           | 2.421 MB | 2.290 MB | 0.131 MB |
| `hero-poster.png`                                       | 1.843 MB | 1.745 MB | 0.098 MB |
| `homepage/sector-import-export.png`                     | 2.229 MB | 2.159 MB | 0.070 MB |
| `operations-poster.png`                                 | 2.044 MB | 1.976 MB | 0.068 MB |
| `homepage/sector-real-estate.png`                       | 2.405 MB | 2.339 MB | 0.066 MB |
| `growth-poster.png`                                     | 1.979 MB | 1.914 MB | 0.064 MB |
| `homepage/sector-food-hospitality.png`                  | 2.309 MB | 2.255 MB | 0.055 MB |
| `homepage/sector-ecommerce-technology.png`              | 2.622 MB | 2.578 MB | 0.045 MB |
| `homepage/sector-entertainment.png`                     | 2.841 MB | 2.808 MB | 0.033 MB |
| `logos/buyhomeforless-logo.png`                         | 0.138 MB | 0.114 MB | 0.023 MB |
| `news/mstar-defense-major-contract-asia-africa-ipo.png` | 0.608 MB | 0.606 MB | 0.002 MB |

### Commands Run

- `npm.cmd run weight:audit 2>&1 | Select-Object -First 120`
- Temporary ffmpeg/ffprobe setup outside the repo.
- `ffprobe` inspection for all `public/videos/*.mp4`.
- H.264 CRF 28 encode pass for all `public/videos/*.mp4`.
- H.264 CRF 30 encode pass for larger below-fold/company MP4s.
- Bundled Python/Pillow lossless PNG recompression for `public/media/**/*.png`.
- `cmd /c npm.cmd run build`
- `npm.cmd run lint`
- `npm.cmd test`
- `npm.cmd run weight:audit` with final output written to `$env:TEMP\mstar-weight-audit-after.txt`.

### Verification

- Passed: `cmd /c npm.cmd run build`.
- Passed: `npm.cmd run lint`.
- Passed: `npm.cmd test`.
- Passed: `npm.cmd run weight:audit`.
- All 20 MP4 files exist in `dist/videos` and are ffprobe-readable.
- All 45 files from `public/media` exist in `dist/media`.
- `dist/.htaccess` exists.
- Homepage hero video remains at `videos/mstar-holding-company-intro.mp4`.
- Business company videos still lazy-load through `IntersectionObserver`, `data-src`, and `preload="none"`.
- Homepage and News page article cards preserve external-source behavior with `target="_blank"` and `rel="noopener noreferrer"`.
- Current article data has external URLs for all six articles; the renderer still keeps future URL-less article cards non-clickable.
- No GitHub Pages URLs were found in public/build metadata, navigation, schema, or CTAs.
- No approved media was removed.
- No deployment ZIP was created.

## 2026-06-30 Live Deployment Weight Pass

- Added `public/.htaccess` so Vite copies Apache delivery rules to `dist/.htaccess`.
- `.htaccess` enables gzip/deflate compression for HTML, CSS, JS, SVG, JSON, XML, and text files.
- `.htaccess` adds long browser cache rules for images, videos, fonts, CSS, and JS while keeping HTML no-cache.
- Added `scripts/asset-audit.mjs` to scan `public/` and `dist/`, print total size, list the top 40 largest files, and group files by extension.
- Added `npm run weight:audit`.
- Added async decoding hints to non-hero lazy images while keeping hero posters eager.
- Changed below-fold Business company videos to lazy-load with `IntersectionObserver`, `preload="none"`, and the same MP4 paths stored in `data-src`.
- Preserved video autoplay, muted, loop, and playsinline behavior once company videos are near the viewport.
- Added homepage live metadata using `https://mstarholding.com/`.
- No images, videos, logos, icons, or article media were removed.
- No deployment ZIP was created.

## Files Changed

- `index.html`
- `src/main.js`
- `package.json`
- `public/.htaccess`
- `scripts/asset-audit.mjs`
- `AGENT.md`
- `DESIGNER.md`
- `WEIGHT.md`

## Commands Run

- `cmd /c npm.cmd run build`
- `npm.cmd run lint`
- `npm.cmd test`
- `npm.cmd run weight:audit` with output written to a temp file and only the first lines inspected in chat
- Static checks for `dist/.htaccess`, compression/cache rules, live metadata URLs, lazy image decoding hints, company video lazy loading, and article card external-link behavior.

## Build, Lint, Test, And Audit Status

- Passed: `cmd /c npm.cmd run build`
- Passed: `npm.cmd run lint`
- Passed: `npm.cmd test`
- Passed: `npm.cmd run weight:audit`

## Weight Audit Notes

- `public/`: 253 MB across 66 files.
- `dist/`: 253 MB across 77 files.
- MP4 files dominate both folders at 226 MB across 20 files.
- PNG files are the next largest group at 27 MB across 32 files.
- Largest approved media files:
  - `videos/business-mstar-property.mp4`: 36 MB
  - `videos/mstar-holding-company-intro.mp4`: 23 MB
  - `videos/business-senior-home.mp4`: 16 MB
  - `videos/business-foodonlines.mp4`: 15 MB
  - `videos/business-buyhomeforless.mp4`: 14 MB
- The safest current weight reduction is operational: upload `dist/` only, use `.htaccess` compression/cache rules, and avoid eager loading all below-fold Business MP4s.
- Further size reduction would require explicit approval to compress, replace, or remove approved media.

## Verification Notes

- `dist/.htaccess` exists after build.
- Homepage metadata uses `https://mstarholding.com/`.
- Static checks found no GitHub Pages URLs in public/build metadata, navigation, or CTAs.
- Homepage Business links, homepage News links, Business/News back-home navigation, and the homepage News CTA remain live-safe relative links.
- Homepage and News page article cards preserve external-source behavior with `target="_blank"` and `rel="noopener noreferrer"` when article URLs exist.
- Article cards were not changed to use internal detail pages.
- ABS Fulfillment remains on `../videos/business-abs-fulfillment.mp4`.
- No approved media was removed.
- No deployment ZIP was created.

## 2026-06-30 Aggressive Media Optimization Pass

- Goal: reduce the already-optimized live deployment below 80 MB while preserving approved media, page structure, metadata, crops, and article-card behavior.
- Final `dist/`: 30.33 MB across 77 files.
- Final `public/`: 30.22 MB across 66 files.
- Final MP4 total: 24.81 MB across 20 files.
- Final PNG total: 3.58 MB across 17 files.
- Final WebP total: 1.82 MB across 15 files.
- Backups were created outside the repo before replacement.

### MP4 Results

| File                                          |   Before |   Final |    Saved |
| --------------------------------------------- | -------: | ------: | -------: |
| `business-mstar-property.mp4`                 | 17.74 MB | 3.70 MB | 14.04 MB |
| `mstar-holding-company-intro.mp4`             | 12.39 MB | 7.65 MB |  4.74 MB |
| `business-page-header-mobile.mp4`             |  5.99 MB | 1.78 MB |  4.21 MB |
| `business-american-buying-service.mp4`        |  5.09 MB | 1.15 MB |  3.94 MB |
| `business-page-header-desktop.mp4`            |  4.99 MB | 3.04 MB |  1.95 MB |
| `business-senior-home.mp4`                    |  4.06 MB | 0.92 MB |  3.14 MB |
| `business-buyhomeforless.mp4`                 |  3.70 MB | 0.79 MB |  2.91 MB |
| `business-boogoo.mp4`                         |  3.50 MB | 0.72 MB |  2.78 MB |
| `business-mstar-defense.mp4`                  |  3.40 MB | 0.68 MB |  2.72 MB |
| `business-mstar-airsoft.mp4`                  |  3.31 MB | 0.71 MB |  2.60 MB |
| `business-hospitality-senior-home-care.mp4`   |  2.80 MB | 0.62 MB |  2.18 MB |
| `business-senior-home-care.mp4`               |  2.80 MB | 0.62 MB |  2.18 MB |
| `business-foodonlines.mp4`                    |  2.63 MB | 0.58 MB |  2.05 MB |
| `business-foodonlines-2.mp4`                  |  2.50 MB | 0.55 MB |  1.95 MB |
| `business-ecommerce-foodonlines.mp4`          |  2.30 MB | 0.42 MB |  1.88 MB |
| `business-one-taste.mp4`                      |  1.13 MB | 0.22 MB |  0.91 MB |
| `business-hizoz.mp4`                          |  0.88 MB | 0.17 MB |  0.71 MB |
| `business-seniorhome-private-nursing-hut.mp4` |  0.84 MB | 0.21 MB |  0.63 MB |
| `business-mstar-technology.mp4`               |  0.81 MB | 0.19 MB |  0.62 MB |
| `business-abs-fulfillment.mp4`                |  0.49 MB | 0.10 MB |  0.39 MB |

### WebP Conversion

- Converted 15 photo-style PNG files to WebP and updated references.
- Converted root posters: `hero-poster.webp`, `operations-poster.webp`, `growth-poster.webp`.
- Converted homepage sector images to `media/homepage/*.webp`.
- Converted all six news article images to `media/news/*.webp`.
- Logo and icon PNGs remain PNG.

### Commands Run

- `cmd /c npm.cmd run build`
- `cmd /c npm.cmd run lint`
- `cmd /c npm.cmd test`
- `cmd /c npm.cmd run weight:audit`
- `ffprobe` check for all `dist/videos/*.mp4`
- Static checks for footer copyright, converted WebP assets, `.htaccess`, GitHub URL absence, and article external-link rendering.

### Verification

- Passed: build, lint, test, and weight audit.
- All 20 MP4 files exist in `dist/videos` and are ffprobe-readable.
- All 15 converted WebP assets exist in `dist/media`.
- All 9 built HTML pages contain `Â© 2026 Mstar Holding Inc.`.
- The April 23, 2024 CEOWORLD article remains external and uses `target="_blank"` with `rel="noopener noreferrer"`.
- No deployment ZIP was created.

## 2026-06-30 Hostinger Deployment ZIP

- Created `Mstar-Holding-Live-Hostinger-2026-06-30.zip` for direct extraction inside Hostinger `public_html`.
- ZIP size: 29.98 MB.
- Source folder: `dist/`.
- ZIP root entries: `index.html`, `.htaccess`, `assets/`, `media/`, `videos/`, `business/`, and `news/`.
- The ZIP does not contain an enclosing `dist/`, `mstar-live/`, or repository folder.
- The ZIP does not contain `.git/`, `node_modules/`, `src/`, `public/`, `site content pic and video/`, package files, Vite config, project notes, source maps, backups, screenshots, or temp files.
- ZIP contents include 77 entries: 9 HTML files, 20 MP4 files, 15 WebP files, and 17 PNG files.
- Built `dist/` remains 30.33 MB before ZIP.
- Footer source now uses `&copy; 2026 Mstar Holding Inc.` on all 9 HTML pages.
- `dist/.htaccess` remains Apache/Hostinger compatible compression and cache rules only, with no GitHub Pages redirect.
- Static asset verification checked 35 built local references with zero missing assets.

### Commands Run

- `cmd /c npm.cmd run build`
- `cmd /c npm.cmd run lint`
- `cmd /c npm.cmd test`
- `cmd /c npm.cmd run weight:audit`
- ZIP creation from the `dist/` contents using `System.IO.Compression.ZipArchive`.
- ZIP root, required-entry, bad-entry, and media-count checks.

### Verification

- Passed: build, lint, test, and weight audit.
- Confirmed all required `dist` folders and article detail pages exist.
- Confirmed no source-only or GitHub URLs appear in `dist`.
- Confirmed all checked built image, video, CSS, and JS references exist.
- Confirmed `.htaccess` is included at the ZIP root.

## 2026-06-30 Social Preview And Favicon Assets

- Added the official Mstar logo social preview image at `public/og/mstar-share.png`.
- Added favicon assets at `public/favicon.png`, `public/favicon.ico`, and `public/apple-touch-icon.png`.
- Kept the social preview image web-friendly at 1200 x 630 and about 141 KB.
- Kept favicon/touch assets small enough for live use.
- Avoided unused duplicate social preview images; all Open Graph and Twitter/X image metadata points to `https://mstarholding.com/og/mstar-share.png`.
- The small Hostinger live ZIP for this update is `mstar-social-preview-favicon-live-update.zip`.
- ZIP size after the Real Estate image-position refresh: 368.5 KB.
- ZIP contents are limited to the four new live assets, the 9 built HTML files whose metadata changed, and the current built CSS/JS assets needed by those HTML files.
- No source folders, package files, project notes, node modules, backups, source maps, or unused assets are included in the small live ZIP.

## 2026-06-30 Homepage Real Estate Image Position Update

- Adjusted only the Real Estate sector image positioning in homepage CSS.
- No media files were added, removed, recompressed, or duplicated.
- The latest small live ZIP was refreshed to include the compiled CSS/JS assets and HTML references needed for this newest homepage-only change.

## 2026-06-30 Organized Brand Social Assets

- Centralized brand social preview and favicon assets under `public/assets/brand/`.
- Kept root favicon files as fallback copies for browser compatibility.
- Avoided adding duplicate social preview variants; the organized preview image is `assets/brand/mstar-share.png`.
- Updated metadata so Open Graph and Twitter/X image URLs point to `https://mstarholding.com/assets/brand/mstar-share.png`.
- Corrected live ZIP contains only the organized brand assets, root favicon fallbacks, and updated built HTML files needed for this change.

## 2026-06-30 Verified Brand ZIP Structure

- Removed the old `public/og/` social preview output to avoid duplicate loose preview locations.
- Rebuilt the live ZIP from a clean temporary folder.
- ZIP contains only required live upload files: organized `assets/brand/` assets, root favicon fallback files, and updated built HTML.
- No unused old `og/` folder or loose root `mstar-share.png` is included.

## 2026-06-30 Full ZIP Without Root Favicons

- Removed root favicon fallback files from `public/` so they do not appear at the top level of the full live ZIP.
- Kept only the organized brand assets under `assets/brand/`.
- No duplicate root favicon assets are included in the new full live ZIP.

## 2026-06-30 Non-Home Header Top-State Fix

- No asset changes were made for this header and footer text fix.
- The implementation is a JS-only header state update in `src/main.js` plus a static footer tagline text update in the HTML source pages.
- The existing built CSS asset is reused; no media, logo, favicon, social preview, image, or video files were added, removed, renamed, recompressed, or duplicated.
- The small Hostinger update ZIP is limited to the updated built JS asset and the built HTML files that reference it and contain the updated footer tagline.
