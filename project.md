# Project Changelog

## 2026-07-01 About Global Presence SVG Map Redesign

- Replaced the About global presence fake dotted map with accurate local SVG country paths generated from Natural Earth 1:110m admin-0 geometry.
- Added base dark dotted world layer and separate Mstar gold dotted overlays for all requested operating markets.
- Updated the section copy to the requested wording and kept only `20+ Countries` / `1000+ Clients` stats.
- Removed the old procedural landmass/dot generator and changed the animation to scroll-triggered country/region group reveals.
- Preserved reduced-motion support and responsive scaling, with no remote runtime assets or external map libraries.
- Refreshed the production deployment ZIP from the final `dist/` output.

## 2026-07-01 About Global Map Silhouette And Scroll Fix

- Improved the About global presence dotted world map silhouette with more detailed generated landmass polygons.
- Replaced rectangular market highlights with compact Mstar gold ellipse clusters for all requested operating countries/regions.
- Kept the map section content to the eyebrow, heading, body copy, map, and `20+ Countries` / `1000+ Clients` stats.
- Fixed scroll-triggered animation behavior so it waits for the section to enter the viewport, runs once, disconnects, and respects reduced motion.
- Kept the change scoped to the About map section logic/styles, documentation, and refreshed deployment ZIP.

## 2026-07-01 About President Card Overlap Adjustment

- Reduced the About President portrait card overlap so it no longer covers body text.
- Kept the portrait card size, image source, image fitting, message text, and animation behavior unchanged.
- Refreshed the production deployment ZIP from the final build output.

## 2026-07-01 About Global Presence Map Refinement

- Rebuilt the About page global presence section with centered copy, a recognizable dotted world map, and `20+ Countries` / `1000+ Clients` stats.
- Replaced the previous ellipse-based map with a lightweight SVG dot generator using simplified landmass polygons and Mstar gold operating-market regions.
- Preserved the requested operating countries/regions and removed any country-name list or map tooltip text.
- Kept the scroll-triggered IntersectionObserver animation: dark dots appear first, gold dots populate progressively, animation runs once, and reduced-motion is respected.
- Kept the change scoped to the About global presence section, shared CSS/JS, documentation, and deployment ZIP.

## 2026-07-01 About President Portrait Layout Refinement

- Restored the President portrait card to the approved compact size.
- Kept the high-quality Jakapun portrait source from the requested leadership image folder.
- Changed only image fitting/positioning so the portrait is bottom-aligned, less zoomed, and undistorted.
- Preserved the overlapping card composition and the cards-meet animation, with subtle fade-up behavior on mobile.
- Refreshed the production deployment ZIP from the final build output.

## 2026-07-01 About Global Presence Map

- Added the `Growing Our Global Presence` section below the About page President Message.
- Implemented a responsive generated SVG dotted world map with dark base dots and animated Mstar gold market highlights.
- Added one-shot IntersectionObserver activation and a reduced-motion fallback.
- Kept the change scoped to the About page, shared CSS, shared JS, and project notes.
- Refreshed the production deployment ZIP from the final `dist/` output.

## 2026-07-01 About President Message Refinement

- Replaced the About page President message body with the full personal message.
- Swapped the President portrait to the higher-quality original Jakapun Viwatkurkul WebP asset.
- Adjusted portrait image fitting so the body aligns to the bottom of the portrait card without changing the section layout.
- Refreshed the production deployment ZIP from the final build output.

## 2026-07-01

- Added the new premium About page for Mstar Holding.
- Built the first section as a President message with overlapping message and portrait cards on desktop/tablet and stacked cards on mobile.
- Added the supplied Jakapun Viwatkurkul portrait asset under `public/media/about/`.
- Registered the About page in the Vite production build and updated site navigation links.
- Added one-shot, reduced-motion-aware IntersectionObserver reveal animation.
- Created the production deployment ZIP from the final `dist/` build output.
