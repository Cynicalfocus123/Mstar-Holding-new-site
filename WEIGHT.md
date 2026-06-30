# Weight And Deployment Notes

## Permanent Deployment Rules

- Deploy live uploads from `dist/` only, not from the full source repository.
- Do not remove, rename, replace, compress, or visually change approved images, videos, logos, icons, article media, layouts, crop intent, article order, or approved design without a new explicit request.
- Keep all used Git assets visible on live.
- Keep public metadata, schema, canonical links, Open Graph URLs, and Twitter image URLs on `https://mstarholding.com/`.
- Do not use GitHub Pages URLs in public metadata, schema, navigation, or CTAs.
- Preserve Vite relative build compatibility.
- Do not create a deployment ZIP unless explicitly requested.
- Use `npm run weight:audit` before later packaging or upload decisions.

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
