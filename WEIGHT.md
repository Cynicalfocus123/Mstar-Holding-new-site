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
