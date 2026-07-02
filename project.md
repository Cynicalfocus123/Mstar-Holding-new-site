# Project Changelog

## 2026-07-02 About Collage Logo And Metrics Section

- Replaced the final About collage placeholder label with the existing Mstar brand share image.
- Added a new bottom About metrics / achievements section after Global Presence.
- Implemented responsive mixed-size metric and image cards styled to match the current Mstar off-white, charcoal, and gold design system.
- Added scroll-triggered requestAnimationFrame counters that run once only when the metrics section is meaningfully reached.
- Kept the change scoped to About page markup, shared About CSS/JS, documentation, and regenerated build output.
- Passed: `cmd /c npm.cmd run build`.
- Passed: `cmd /c npm.cmd run lint`.
- Passed: `cmd /c npm.cmd test`.

## 2026-07-02 About Mobile Layout And Collage Frame Fix

- Changed the About page windmill collage frame from a circle to a vertical rounded rectangle.
- Kept contained, centered image fitting so the vertical windmill image remains visible without distortion or aggressive cropping.
- Fixed the About page mobile top blank area by making the President Message reveal observer more reliable and adding a phone-width visible fallback.
- Mobile President Message cards now appear promptly below the header, stacked as message card then portrait card, with no intended overlap or horizontal overflow.
- Kept the change scoped to About page markup, shared About CSS/JS, documentation, and regenerated build output.
- Passed: `cmd /c npm.cmd run build`.
- Passed: `cmd /c npm.cmd run lint`.
- Passed: `cmd /c npm.cmd test`.

## 2026-07-02 About Mstar Holding Image Collage

- Replaced the About page `About Mstar Holding` left-side abstract placeholder with a responsive three-part collage.
- Added local public About media copies for the Wall Street/New York main image and the windmill supporting image.
- Kept the third frame as a styled future-image placeholder.
- Used contained, centered image fitting to prevent unwanted zoom, distortion, and harsh cropping.
- Kept the change scoped to About page markup, scoped shared CSS, local About media assets, documentation, and regenerated build output.
- Passed: `cmd /c npm.cmd run build`.
- Passed: `cmd /c npm.cmd run lint`.
- Passed: `cmd /c npm.cmd test`.

## 2026-07-02 About Mstar Holding Section

- Added a new `About Mstar Holding` section between the About page President Message and Global Presence sections.
- Implemented a premium two-column layout with a reusable shaped image placeholder on the left and the provided company history / innovation text on the right.
- Added one-shot fade-up scroll animation with reduced-motion fallback.
- Added responsive tablet and mobile behavior, stacking the placeholder first on small screens.
- Kept the change scoped to About page markup, shared CSS/JS, documentation, and regenerated build output.

## 2026-07-01 About Stats Counter Trigger Refinement

- Fixed the About global presence stat counters so they use their own IntersectionObserver on the stats wrapper.
- Counters now start only when the stats area is reached, not when the global presence section or map first enters the viewport.
- The counters run once, disconnect after activation, and keep reduced-motion users on final values without animated counting.
- Updated the Clients stat to `2500+` while keeping Countries at `20+`.
- Kept the change scoped to About stats markup, shared JS counter trigger logic, documentation, and regenerated build output.

## 2026-07-01 About Global Presence Animation Refinement

- Tuned the About global presence section so its map animation and stat counters start only when the section enters the viewport.
- Kept the existing map design and geometry while slowing the base reveal and gold market stagger for a more premium pace.
- Added one-shot `requestAnimationFrame` counters for `20+ Countries` and `1000+ Clients`, with reduced-motion fallback to final values.
- Increased contrast between softer charcoal/navy base dots and stronger Mstar gold highlighted markets.
- Kept the change scoped to About global presence markup, shared JS/CSS, documentation, and the regenerated production build.

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
