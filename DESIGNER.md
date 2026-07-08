# Designer Notes

## Permanent Design Documentation Rule

- Every site change must update `DESIGNER.md` with concise design intent, visual behavior, responsive behavior, and any asset/crop/motion notes relevant to the change.
- Keep design notes concise and avoid large implementation logs.

## 2026-07-08

### About Collage Spacing Refinement

- Shifted the main Jack with prime minister card farther left so it reads more clearly as the hero image in the collage.
- Reduced crowding from the windmill and Mstar logo cards while preserving a subtle layered collage effect.
- Kept all three boxes large, rounded, and premium, with mobile-specific spacing so the composition stays inside the viewport.
- No image files, crops, page text, or non-collage sections changed.

### About Collage Overlap Rebalance

- Rebalanced the enlarged About collage so the Mstar logo card supports the composition instead of covering the two photo cards.
- The main and portrait image cards now sit above the logo card, while the logo is lower and slightly tucked behind them for a cleaner layered effect.
- The Jack with prime minister image keeps a tighter wide frame and proportional cover fit, removing the white bands without stretching or visually editing the image.
- Responsive card sizing from the prior pass remains intact, preserving larger desktop/tablet/mobile collage presence without intended horizontal overflow.

### About Collage Sizing And Fit Refinement

- Enlarged the About Mstar Holding collage so it has stronger visual presence beside the About copy while keeping the same premium overlapping rounded-card language.
- The new Jack with prime minister image now sits in a wider main card with proportional cover fitting, removing the large white top/bottom bands without stretching or altering the source image.
- The portrait and logo cards scale up with the main card, with adjusted overlap and spacing so the three-card composition stays balanced.
- Desktop, tablet, and mobile collage caps were increased with `min(100%, ...)` sizing so the larger cards remain responsive and avoid intended horizontal overflow.

### About Collage Prime Minister Image Update

- Replaced only the main About Mstar Holding collage photo with the supplied Jack with prime minister image.
- The photo keeps its original proportions inside the existing collage frame using the same contained fitting behavior, so there is no stretch, warp, retouch, recolor, or crop change to the source image.
- About text, President Message, Global Presence, Built Across Industries, navigation, footer, and all non-About pages remain visually unchanged.
- The small Hostinger ZIP includes only the built About page and the new About image asset required for this visual swap.

### Safe Deployment Weight Optimization And Hostinger ZIP

- No visual design, layout, copy, image crop, logo rendering, video appearance, portrait transparency, or page content changed.
- Approved images/videos/logos/icons were tested conservatively and left unchanged when exact-pixel or no-visible-change savings were not available.
- The final Hostinger ZIP uses a cleaner deployment structure by excluding unused copied media and old alternate assets from `dist/`, while keeping live referenced assets inside `assets/`, `media/`, and `videos/`.
- `.htaccess` keeps the live static routing safe with direct file/directory pass-through, compression/cache rules, and canonical governance redirects without GitHub/local development paths.

### Footer Typography And Legal Page Styling

- Strengthened the shared footer group headings so Company, Media / Press, Corporate Governance, and Legal read as clear section labels above the lighter centered links.
- Kept the footer dark, restrained, centered, and premium by using contrast, weight, and a small size lift instead of oversized type.
- Brought Privacy Policy and Terms of Service into the same white/off-white legal document language as Code of Conduct, with matching readable width, left-aligned heading/body rhythm, charcoal text, and subtle Mstar gold accents.
- Mobile and tablet legal pages keep safe gutters, balanced wrapped headings, and no intended horizontal overflow.

## 2026-07-07

### Global Footer Sync And Centering

- Centered the global footer system so brand text, group headings, links, and copyright align around the middle of the site instead of pushing the link groups to the right.
- Rebalanced the desktop footer grid into similarly weighted columns, keeping the Mstar dark premium footer style and restrained spacing.
- Tablet and mobile footer layouts stack into a centered single-column rhythm with safe wrapping and no intended horizontal overflow.
- Standardized the footer group order across all pages: Company, Media / Press, Corporate Governance, then Legal.
- Footer HTML is now generated from one shared sync script before builds, reducing future drift between Home, News, article, governance, and legal pages.

### Legal Pages And Footer Links

- Added Terms of Use and Privacy Policy as formal legal-document pages using the existing Mstar premium corporate language: off-white surface, charcoal body text, restrained gold eyebrow/accent line, and a readable centered document width.
- Legal headings and paragraphs are left-aligned to the same document edge, with generous section rhythm and subtle dividers so wrapped long headings remain clean.
- The footer now uses distinct Company, Corporate Governance, Media / Press, and Legal groups, keeping Terms of Service and Privacy Policy in their own Legal group.
- Desktop lays footer groups in a clean multi-column grid; tablet and mobile stack groups left-aligned with safe wrapping and no intended horizontal overflow.
- No header design, page content outside the new legal pages, media assets, image crops, videos, or deployment path behavior changed.

### Code Of Conduct Content Update

- Fixed the Code of Conduct document body so the full text is visible by default instead of depending on one long scroll-reveal wrapper.
- The hero and Table of Contents can still use the existing subtle reveal treatment, while the legal document body stays readable immediately throughout the page.
- Updated the Code of Conduct page into a formal governance document layout with a polished intro, Table of Contents, numbered content sections, and Administration and Implementation area.
- The Table of Contents uses a fixed small number column so wrapped titles align cleanly with the first title line instead of falling under the number.
- Section headings, subsection headings, and paragraphs share a consistent left document edge with restrained gold accents, subtle dividers, charcoal text, and comfortable legal-document spacing.
- Desktop keeps the content in a readable max-width column; tablet and mobile retain safe gutters, single-column flow, readable font sizes, and no intended horizontal overflow.
- No media assets, governance navigation order, footer order, Executive Management layout, Board layout, or non-governance page design changed.

### Live Image Asset Weight Optimization

- No visual design, layout, crop, image placement, color, typography, navigation, or page behavior changed in this pass.
- Seven transparent portrait WebP assets were recompressed losslessly from their existing decoded pixels, preserving exact dimensions, alpha behavior, and visible RGBA output.
- The optimized assets remain on the same public paths, so Executive Management and Board of Directors card/image layouts continue to render with the same contained, bottom-aligned portrait behavior.
- PNG assets were audited for lossless recompression opportunities, but no tracked PNG produced a smaller pixel-identical file, so PNG visuals and binaries were left unchanged.

### Board Of Directors Profile Grid

- Refined the board grid with the requested replacement portraits for Paul Leung and Antonio Pereira, replacing the old Antonia Espada entry.
- Updated the Board of Directors page from open oversight text rows to small premium profile cards so it visually matches the Executive Management portrait-box language at a board-grid scale.
- Each board card uses a contained top portrait area, bottom-aligned full-person image fitting, a white/off-white text panel, bold name, role, location, restrained gold accent, subtle border, and soft institutional shadow.
- Added seven board members in the requested order while keeping large biographies off the page.
- Cleaned the supplied board portraits into transparent lossless WebP assets so checkerboard and white source backgrounds do not appear inside the cards.
- Desktop uses a multi-column grid, tablet steps down to fewer columns, and mobile uses compact two-column cards with safe wrapping and no intended horizontal overflow.
- Corporate Governance dropdown and footer order remains Executive Management, Board of Directors, then Code of Conduct.

## 2026-07-06

### Leadership Portrait Background Transparency

- Made all five Executive Management leadership portrait backgrounds transparent so the portrait-box surface shows around each person instead of a white image rectangle.
- The people remain visually unchanged; only the white/near-white source backgrounds were removed from the public portrait assets.
- Pasit's portrait now uses a transparent WebP source, while the portrait boxes and bottom-aligned image behavior remain unchanged.

### Leadership Portrait Box Alignment

- Added subtle white/off-white portrait boxes around Executive Management leadership images so the people feel grounded within a defined image area.
- Leadership images remain contained and center-bottom aligned with zero bottom padding, making each visible body rest against the bottom inside edge instead of floating.
- The portrait boxes use a restrained border and light tonal surface only; biography text, page structure, navigation, and image files were not changed.

### Jakapun Executive Biography Update

- Added Jakapun Viwatkurkul's longer approved Executive Management biography while keeping the premium open editorial profile layout.
- The bio is split into readable paragraphs with scoped responsive spacing so desktop, tablet, and mobile views do not become dense, clipped, or horizontally cramped.
- Jakapun's image, other leadership profiles, governance navigation, header, footer, Board page, and Code of Conduct page were not changed.

### Steven Lou Leadership Image Transparency

- Removed the baked-in checkerboard/white-gray background from the Steven Lou leadership image while preserving the person image unchanged.
- Steven Lou now renders as a clean transparent cutout on the Executive Management page's white background with the existing contained, center-bottom image treatment.
- No Executive Management layout, text, navigation, other leadership images, header, footer, or governance page design was changed.

### Corporate Governance Navigation And Leadership Refinement

- Refined the Corporate Governance pages back to a bright white/soft-white institutional background with only a barely visible warm white gradient.
- Executive Management leadership media now sits on transparent page background with no colored image boxes, no hard photo panels, and contained full-pose image fitting.
- Desktop governance dropdown now uses a light premium surface and a hover-safe bridge so the submenu remains available while moving from the parent item into the dropdown.
- Mobile/tablet governance submenu is collapsed by default and opens only from the Corporate Governance tap state, preserving a closed hamburger menu on page load.
- Governance submenu order is Executive Management, Board of Directors, then Code of Conduct across headers and footer governance groups.

### Corporate Governance Pages

- Added a Corporate Governance navigation dropdown with Board of Directors, Executive Management, and Code of Conduct links.
- Added a Corporate Governance footer group while preserving the existing footer brand hierarchy and copyright line.
- Board of Directors, Executive Management, and Code of Conduct use the bright institutional design language: white/off-white backgrounds, charcoal typography, restrained Mstar gold lines, and open editorial spacing.
- The Board page uses a no-box oversight layout with thin gold accents and crawlable governance copy instead of fake board portraits or invented directors.
- The Executive Management page uses exactly five leadership slots and the approved local leadership images.
- Leadership images use spacious editorial media areas with `object-fit: contain` and center-bottom positioning so visible body, clothing, hands, and pose details are preserved instead of cropped into headshots.
- Profile text sits directly on the page background with thin vertical gold accents beside names and titles; no biography cards, boxed text panels, or dashboard modules were added.
- Desktop alternates image and text rhythm for executive profiles; tablet and mobile stack safely without horizontal overflow.
- Subtle fade-in reveal animation uses opacity and small vertical movement only, and reduced-motion users receive static visible content.
- The Code of Conduct page is intentionally simple and consistent, leaving room for formal legal content later without overbuilding placeholder material.

## 2026-07-02 Homepage Growth Card Row Scroll Fix

- Fixed the mobile/tablet horizontal swipe behavior for the homepage growth-theme row only: Infrastructure, Investment, Innovation, Asia Growth Opportunities, and Strategic Partnerships.
- Kept the same card design, icons, text, sizing language, row styling, and right-arrow hint visual; the row now remains one horizontal scrollable strip instead of being locked wider than the screen.
- The scroll hint remains subtle and scoped to this row, appearing only when additional content is available to the right.
- Desktop navigation/layout, homepage hero, sector collage, News section, About page, Business page, News page, header, footer, and unrelated visual systems were not changed.

## 2026-07-02 About Tightening And Growth Theme Scroll Hint

- Tightened the desktop About page further so President Message, About Mstar Holding, Global Presence, and Built Across Industries read as a more connected page sequence.
- The President Message card has less internal empty space through tighter padding, paragraph rhythm, signature spacing, and portrait offset, while retaining the premium white overlapping-card design.
- About Mstar Holding has a tighter desktop section rhythm and a closer collage/text relationship without changing the collage assets, crops, or copy.
- Global Presence and Built Across Industries now sit closer together, with less blank space after the 20+ Countries / 2500+ Clients stats.
- Built Across Industries heading and paragraph now share the same left edge/content width so the heading block feels intentionally aligned.
- The homepage growth-theme card row now has the intended mobile/tablet right-scroll hint arrow for the Infrastructure / Investment / Innovation / Asia Growth Opportunities / Strategic Partnerships row.
- The arrow uses the existing gold-on-dark premium cue language, sits near the row's right edge, avoids the main card copy, and fades when there is no more content to the right.
- Business page, News page, header, footer, page content, image sources, icons, map design, counters, and unrelated sections were not changed.

## 2026-07-02 About Desktop Spacing And Alignment

- Tightened the desktop About page so President Message, About Mstar Holding, Global Presence, and Built Across Industries feel more connected and less stretched.
- The President Message section no longer holds a full-viewport height on desktop; card padding, paragraph rhythm, signature spacing, and portrait offset are more compact while keeping the approved overlapping card style.
- The About Mstar Holding section uses reduced vertical padding and a smaller desktop column gap so the collage and text read as one connected composition.
- Global Presence starts closer to the About section, and Built Across Industries starts closer to the Global Presence stats without changing the map, counters, or metric cards.
- Built Across Industries heading/body alignment now relies on clean zero-margin heading text and the section's grid gap, so the heading and paragraph left edges feel intentional.
- Mobile/tablet responsive behavior remains governed by existing breakpoints; no image source, crop, content, header, footer, homepage, Business page, or News page design was changed.

## 2026-07-02 Homepage Scroll Hint And Sector Labels

- Added a clean right-side scroll hint arrow to the homepage sector card row so mobile/tablet users can immediately tell the row continues horizontally.
- The hint is intentionally subtle and premium: dark neutral circular overlay, restrained Mstar gold arrow, gentle nudge motion, and no interaction blocking.
- The hint sits near the right edge of the sector row and hides when the row cannot scroll further, so it does not become permanent visual clutter.
- Re-centered desktop slanted sector card labels inside the safe visible area of the angled card shapes.
- The gold line above each sector label remains aligned with the text, and the multi-line `E-commerce & Technology` label remains readable and centered.
- Preserved the existing card layout, slanted geometry, card sizes, gaps, image sources, image crop/fitting, mobile/tablet card treatment, section order, header, footer, and all non-home pages.

## 2026-07-02 Mobile Menu Contrast Fix

- Fixed the mobile/tablet hamburger menu readability issue by keeping the premium off-white overlay style and changing the open menu links to dark charcoal at full opacity.
- Added clear Mstar gold hover/focus treatment for mobile/tablet menu links so keyboard focus remains visible.
- Kept the hamburger/close icon visible against the off-white menu by using the same dark charcoal open-state color.
- Desktop navigation, layout, page sections, footer, metrics, and content design were not changed.

## 2026-07-02 About Collage Alignment And Live Metric Counter Fix

- Moved the entire About Mstar Holding collage group upward on desktop and tablet so it aligns more naturally beside the About heading/text instead of sitting low against the long copy column.
- Used only wrapper-level grid/media alignment changes; the three collage boxes, image sizes, crop/fitting behavior, source files, Mstar logo fit, rounded corners, shadows, spacing language, and mobile layout were preserved.
- The metric counter fix changes scroll-trigger behavior only; metric card design, icons, labels, values, grid layout, and visual styling were not changed.
- No homepage, Business page, News page, header, footer, President Message, or Global Presence map design was changed.

## 2026-07-02 Optimized Full Hostinger Package

- No design behavior changed; this was a deployment-weight and Hostinger packaging optimization only.
- The About collage still uses the same two approved corporate photos, layout, sizing, contained fitting, crop intent, and responsive behavior; only the file format changed from JPG to high-quality WebP.
- The About logo PNG was optimized losslessly with no intended visual change.
- The `.htaccess` update affects Hostinger static routing only and does not change page design or interaction behavior.

## 2026-07-02 Latest Hostinger Live Package

- No design behavior, layout, copy, CSS, JavaScript, media, image crop, or animation was changed during this packaging pass.
- The fresh `dist/` build packaged in `Mstar-Holding-Live-Hostinger-2026-07-02-Latest.zip` keeps the latest About page state: President Message, About Mstar Holding, Growing Our Global Presence, and Built Across Industries.
- The packaged About page includes the latest collage spacing, full Mstar logo card fit, white Employees metric card, transparent gold metric icons, and removal of the metric card icon glow source.
- The ZIP is a deployment artifact only and is intended for direct extraction into Hostinger `public_html`.

## 2026-07-02 About Stat Icon Glow Removal

- Removed the actual remaining glow source from the About metric cards: the top-right gold radial highlight built into each card background.
- Metric cards now keep a clean white/light premium surface with only the subtle card border and card shadow, so no yellow burst appears behind the icons.
- The shared metric icon rule now explicitly prevents background, filter, and icon shadow effects while preserving consistent top-right placement and sizing.
- Metric copy, values, card order, counter behavior, and unrelated About/site sections were not changed.

## 2026-07-02 About Stat Card Icon Refinement

- Cleaned the About metrics icons so they render as crisp transparent gold line art without yellow glow, smear, halo, blur, or shadow effects.
- Standardized all metric card icons to the same transparent canvas, same visual color, same shared responsive size, and same top-right card placement.
- Removed the special Employees/feature-card icon drop shadow so no metric icon receives a glow treatment.
- Desktop icons are smaller and more consistently inset to avoid crowding the card label or number; mobile uses a shared reduced size.
- No metric copy, number values, card order, card layout, counter behavior, or unrelated About/site sections were redesigned.

## 2026-07-02 About Collage Logo Card Fit

- The third About collage logo card now uses a taller, logo-friendly card ratio so the full Mstar logo can sit inside the frame without being cut off.
- The logo remains centered and proportionally contained, with balanced padding and the same premium white rounded-rectangle card styling.
- The card keeps its current placement tucked beneath the two upper collage frames, and the first and second image boxes remain unchanged.
- No About copy, President Message, Global Presence map, metrics section behavior, header, footer, homepage, Business page, or News page design was changed.

## 2026-07-02 About Collage Logo Fit

- Tightened only the internal padding inside the third About collage logo frame so the Mstar logo fills the white rounded box more confidently.
- The logo remains centered and uses contained fitting, preserving the mark, `Mstar`, and tagline without distortion.
- The logo frame position, size, rounded rectangle shape, border, shadow, and the other two collage image frames were not changed.
- No About copy, President Message, Global Presence map, metrics behavior, header, footer, homepage, Business page, or News page design was changed.

## 2026-07-02 About Collage Spacing And Metrics Card Style

- The About collage now reads cleaner and more intentional: the large organic background circle behind the image frames has been removed.
- The Mstar logo frame is lifted closer to the two upper image frames and remains centered below the space between the Wall Street and windmill cards.
- The logo keeps the same contained fitting, internal padding, rounded corporate frame, subtle border, and soft shadow so the mark and tagline stay legible.
- The Employees metric card now matches the white/light card language used by the other metrics instead of using a dark feature-card treatment.
- The Employees card keeps its larger dashboard span, top-right icon, rounded corners, and premium number hierarchy.
- No President Message, Global Presence map, About copy, header, footer, homepage, Business page, or News page design was changed.

## 2026-07-02 About Collage Placement And Metrics Icon Refinement

- Repositioned the About collage logo card as a balanced lower-middle third card between the main Wall Street frame and the windmill frame.
- The Mstar logo card keeps the premium rounded frame, subtle border, soft shadow, centered contain fitting, and additional breathing room so the full logo/tagline remains legible.
- Reworked `Built Across Industries` into a more compact dashboard-style metric section with less empty card space and clearer number hierarchy.
- Each metric card now carries a restrained gold top-right icon; source checkerboard backgrounds were removed for the About metric icon copies so the icons sit naturally on the card surface.
- Desktop uses a four-column stat dashboard with a dark Employees feature card and wider Hospitality/Food cards; tablet becomes two columns; mobile stacks compact cards without oversized blank areas.
- Counter motion remains tied to the metrics section itself, not the page load or Global Presence map, and respects reduced-motion preferences.
- President Message, About copy, Global Presence map, header, footer, homepage, Business page, News page, social/fav assets, and base path behavior were not redesigned.

## 2026-07-02 About Exact Logo Asset Correction

- Updated the About collage logo box and metrics logo card to use the exact user-provided square Mstar logo asset.
- The logo remains centered and contained inside the existing rounded frames with padding, preserving legibility of the mark, name, and tagline.
- No layout, counter behavior, section text, header, footer, or unrelated page styling was changed.

## 2026-07-02 About Collage Logo And Metrics Section

- Replaced the last `About Mstar Holding` collage placeholder with the existing Mstar logo image while preserving the rounded image-frame styling.
- The logo uses contain fitting, centered positioning, and internal padding so the mark and `Putting Big Ideas Into Action` tagline remain legible inside the small collage box.
- Added a bottom About metrics section inspired by a dashboard/stat-card layout, restyled into the current Mstar bright corporate language rather than the green reference theme.
- The metrics composition uses off-white surfaces, one dark charcoal feature card, restrained Mstar gold accents, subtle borders, soft shadows, mixed card spans, and integrated image cards.
- Desktop presents a dynamic four-column grid; tablet shifts to three/two columns; mobile stacks cards cleanly with strong numeric hierarchy and no intended horizontal overflow.
- Counter animation is designed to begin only when the user reaches the metrics section, so the numbers feel tied to the section rather than page load.
- Header, footer, President Message, About copy, Global Presence map design, and unrelated pages were not redesigned.

## 2026-07-02 About Mobile Layout And Collage Frame Fix

- Refined only the About page image collage and mobile top-section visibility behavior.
- The windmill image no longer uses a circular frame; it now sits in a portrait-oriented rounded rectangle that respects the source image's vertical composition.
- The windmill frame keeps a clean neutral backing, subtle border, rounded corporate corners, soft shadow, and contained centered image fitting.
- The main Wall Street/New York image and future-image placeholder remain in the same collage system.
- Mobile About page top content is protected from animation-related invisibility: the President Message card and portrait card are visible by default at phone widths, stack vertically, and do not overlap.
- The phone top spacing below the header is tighter so users see the President Message content rather than a large off-white blank area.
- Desktop and tablet retain the existing premium fade/slide animation for the President Message section.

## 2026-07-02 About Mstar Holding Image Collage

- Refined only the `About Mstar Holding` section media area.
- Replaced the single abstract organic placeholder with a three-image collage system: a large Wall Street/New York main image, a smaller circular windmill image, and a smaller rounded placeholder for a future image.
- The collage keeps the existing premium white/off-white corporate page language with organic rounded frames, neutral image backing, soft shadows, subtle borders, and restrained Mstar gold accents.
- Desktop keeps the collage in the left column and the existing company history text on the right.
- Tablet reduces the collage width and spacing while keeping the two-column relationship readable.
- Mobile stacks the collage above the text and uses percentage-positioned frames inside a responsive aspect-ratio container to prevent intended horizontal overflow.
- Both real images use contained fitting and centered positioning so the people, New York setting, and windmill composition remain visible instead of zoomed or distorted.
- The existing section fade-up animation remains the only motion behavior.

## 2026-07-02 About Mstar Holding Section

- Added a new premium `About Mstar Holding` content section between the President Message and Global Presence sections.
- The section uses a white/off-white investor-grade corporate layout with generous spacing, a restrained Mstar gold line accent, and readable long-form body copy.
- Desktop composition is two columns: a shaped neutral image placeholder on the left and the company history text on the right.
- The placeholder is an organic rounded corporate frame prepared for a future image, with no stock image, AI image, icon, or real media inserted.
- `Innovation is in our DNA` is styled as a strong internal subheading in the right text column.
- The whole section fades up from `translateY(48px)` on scroll and animates only opacity/transform; reduced-motion users receive the final state immediately.
- Tablet keeps a two-column layout where space allows with reduced gap and placeholder size.
- Mobile stacks the placeholder first and text below, with safe type sizing and no intended horizontal overflow.
- President Message, Global Presence map/counter design, header, footer, and unrelated pages remain unchanged.

## 2026-07-01 About Stats Counter Trigger Refinement

- Refined only the About global presence stats counter trigger.
- The map design and map animation remain unchanged.
- Number counting now waits for the stats row itself instead of starting when the section or map enters the viewport.
- A dedicated stats-wrapper IntersectionObserver uses a stricter middle-viewport trigger so the numbers begin only when they are clearly visible to the user on desktop, tablet, and mobile.
- Counters run once and do not replay after scrolling away and back.
- The final displayed stats are `20+ Countries` and `2500+ Clients`.
- Reduced-motion users see the final values without animated counting when the stats area is reached.

## 2026-07-01 About Global Presence Animation Refinement

- Refined only the About `Growing Our Global Presence` section animation behavior and highlight readability.
- The approved SVG map design and operating-market geometry remain unchanged.
- The map reveal now waits until the section enters the viewport, runs once, and does not replay on scroll.
- Base dots fade/scale in more slowly at 620ms for a calmer premium reveal.
- Gold operating-market groups populate with a slower staggered fade/scale treatment: 760ms opacity, 820ms transform, and 80ms between groups.
- Base map dots are softer charcoal/navy with lower visual weight, while active markets use brighter, richer Mstar gold and a subtle restrained glow so highlighted regions read clearly on desktop, tablet, and mobile.
- The `20+ Countries` and `1000+ Clients` stats now count up only when the section is reached, use smooth ease-out pacing, run once, and keep the plus sign visible.
- Reduced-motion users see the final highlighted map and final stat values without counting animation once the section is reached.

## 2026-07-01 About Global Presence SVG Map Redesign

- Rebuilt the About global presence map as an accurate SVG country-path map instead of a hand-guessed dot cloud.
- The base map uses Natural Earth country geometry with a dark navy/charcoal SVG dot pattern so the continents immediately read as a real world map.
- The highlighted markets are separate Mstar gold SVG overlays using the same dotted visual language, with Hong Kong represented by a small precise marker.
- All requested markets are highlighted: United States, Mexico, United Kingdom, France, Germany, Belgium, Croatia, Ukraine, Latvia, Estonia, Saudi Arabia, UAE, Iraq, Sudan, Nigeria, Mali, India, China, Hong Kong, Taiwan, Thailand, Vietnam, Malaysia, and Indonesia.
- The section keeps a white/off-white premium corporate composition with centered eyebrow, editorial heading, body copy, large centered map, and only the two stats below the map.
- No tooltip box, country list, floating label, or oversized rectangular highlight remains.
- Animation waits until the map section enters the viewport, then fades the base map and quickly populates gold market groups with staggered scale/opacity.
- Desktop spans most of the content width; tablet and mobile scale the same SVG proportionally without intended clipping or horizontal overflow.

## 2026-07-01 About Global Map Silhouette And Scroll Fix

- Refined only the About global presence map section.
- The map now uses a more recognizable dotted world silhouette with separated, more natural continent forms: North America, South America, Greenland, Europe, Africa, Middle East, Asia, India, Southeast Asia, Japan, Indonesia, and Australia.
- Gold highlights are compact operating-region clusters rather than rectangular country blocks.
- All requested operating countries/regions remain highlighted in the correct general regions: Sudan, Nigeria, Saudi Arabia, Ukraine, United Kingdom, China, Malaysia, Taiwan, Indonesia, Latvia, Estonia, Germany, France, Thailand, United States, UAE, Croatia, Belgium, Iraq, Vietnam, India, Hong Kong, Mexico, and Mali.
- The visible content remains the requested eyebrow, heading, body, large centered map, and `20+ Countries` / `1000+ Clients` stats only.
- No country list, floating tooltip, or map label is shown.
- The animation now waits until the map section enters the viewport, then base dots appear quickly and gold dots populate with fast clustered staggered opacity/scale.
- Desktop keeps the map large and centered; tablet and mobile scale the SVG within the viewport with no intended clipping or horizontal overflow.

## 2026-07-01 About President Card Overlap Adjustment

- Refined only the About page President Message section layout.
- The portrait card keeps the same approved size, source image, image fitting, and front z-index.
- The final overlap is reduced so the portrait still visually sits above the message card but uses more of the available right-side whitespace.
- Desktop overlap is now lighter and closer to the 15-20% target.
- Tablet overlap is reduced further to protect body-copy readability.
- Mobile remains stacked with no overlap.
- The existing fade/slide cards-meet animation remains unchanged.

## 2026-07-01 About Global Presence Map Refinement

- Rebuilt the global presence section as a centered premium corporate composition instead of a text/map split.
- Added the requested uppercase eyebrow, large editorial heading, concise centered body copy, large dotted world map, and centered stats below the map.
- The new map shape is generated from simplified geographic landmass polygons, making the dotted silhouette recognizable as North America, South America, Europe, Africa, the Middle East, Asia, Southeast Asia, and Australia.
- Default dots use dark navy/charcoal; operating-market dots use Mstar gold.
- Highlighted markets are Sudan, Nigeria, Saudi Arabia, Ukraine, United Kingdom, China, Malaysia, Taiwan, Indonesia, Latvia, Estonia, Germany, France, Thailand, United States, UAE, Croatia, Belgium, Iraq, Vietnam, India, Hong Kong, Mexico, and Mali.
- Animation follows the Bechtel-style behavior: dark world dots resolve first, then gold operating dots populate progressively with staggered opacity/scale.
- Desktop uses centered text above a large map and balanced stats underneath.
- Tablet scales the map down with the same centered composition.
- Mobile keeps the map within viewport width, prevents horizontal overflow/clipping, and keeps the two stats compact and readable.
- No country-name list, map tooltip box, remote map asset, external map library, or unrelated page changes were introduced.

## 2026-07-01 About President Portrait Layout Refinement

- Refined only the President portrait behavior inside the About page President Message section.
- The portrait card is restored to the approved compact executive-card size rather than stretching across tablet/mobile widths.
- The card keeps its 2:3 portrait proportion, white background, rounded corners, soft shadow, and front z-index above the message card.
- The high-quality Jakapun portrait source in `site content pic and video/leadership boar/jack white background.webp` is used for the live About portrait asset because the requested `(4)` variant was not present in the folder.
- The portrait image uses contain fitting and bottom anchoring so the body feels grounded at the bottom edge of the card without zooming the face or distorting the body.
- Desktop/tablet retain the approved overlap and cards-meet animation; mobile stacks the cards and uses a subtler fade-up motion.
- No heading, message text, message card size, header/footer, homepage, Business page, or News page design was changed.

## 2026-07-01 About Global Presence Map

- Added a premium white/off-white About section immediately after the President Message.
- The section uses a large editorial heading, restrained body copy, Mstar gold accent line, and a centered dotted world map.
- The map uses dark navy/charcoal dots for the world base and Mstar gold dots for active Mstar Holding markets.
- Highlighted markets animate progressively on scroll to evoke the Bechtel-style populated map behavior while staying lightweight.
- Desktop balances text and map side by side with generous spacing and a large readable map.
- Tablet stacks the text and map with a controlled max width.
- Mobile stacks text above the map, keeps the SVG within the viewport width, and avoids clipping or horizontal overflow.
- Motion is limited to opacity and scale on SVG dots and respects `prefers-reduced-motion`.
- No homepage, Business, News, header, footer, President Message content, or unrelated visual assets were changed.

## 2026-07-01 About President Message Refinement

- Updated only the About page President Message section.
- The President message now uses the full personal message supplied for Jakapun Viwatkurkul.
- The portrait card keeps the same overlapping composition above the message card.
- The portrait image now uses the higher-quality original white-background Jakapun portrait instead of the softer cropped derivative.
- Image fitting is bottom-anchored so the body aligns visually with the bottom of the portrait card, while preserving face clarity and avoiding distortion.
- No card redesign, new CTA, header/footer change, homepage change, Business page change, or News page change was made.
- Existing desktop/tablet overlap and mobile stacking behavior remain the intended design.

## 2026-07-01 Premium About Page

### About Page Design Specification

- New About page direction is white, minimal, premium, corporate, and consistent with the homepage bright section system.
- The first section is a President message, not a marketing hero, and uses generous whitespace, restrained Mstar gold accents, charcoal typography, soft border treatment, and the existing premium shadow language.
- The page keeps the existing global header and footer so it feels native to the current Mstar site.

### CEO Message Layout

- Desktop uses two completely independent cards.
- Left card: wide white President message card, rounded 24px corners, subtle border, premium soft shadow, large internal spacing, and no fixed height.
- Right card: portrait-only card with the supplied Jakapun Viwatkurkul image, white background, rounded corners, and matching premium shadow.
- The portrait card overlaps the message card's right edge and sits above it through z-index.
- The message card visually continues behind the portrait card with a background extension, while text remains protected inside the readable content width.

### Responsive Behavior

- Desktop overlap is approximately 25-30%.
- Tablet keeps the same composition with a reduced overlap.
- Mobile removes overlap completely and stacks cards vertically: message first, portrait second, centered.
- Text scales with existing `clamp()` typography and safe gutters; no viewport-width font scaling was introduced.

### Animation Rules

- The About page reveal uses IntersectionObserver with threshold `0.25`.
- The observer runs once and disconnects after the section becomes visible.
- Message initial state: `opacity: 0` and `transform: translateX(-60px)`.
- Portrait initial state: `opacity: 0` and `transform: translateX(60px)`.
- Visible state: `opacity: 1` and `transform: translateX(0)`.
- Portrait delay is 150ms; duration is 700ms; easing is `cubic-bezier(0.22, 1, 0.36, 1)`.
- Motion is limited to opacity and transform and respects `prefers-reduced-motion`.

### Typography And Spacing

- Heading hierarchy uses one page-level H1: `Message from the President`.
- Body copy uses the existing muted bright-section color and comfortable executive-message line height.
- Signature is separated by a quiet gold-tinted divider and uses a clear three-line hierarchy: name, title, company.
- No CTA button or `Learn More` action appears in the President message section.

## 2026-06-30

### Deployment Base Path Fix

- No design changes were made.
- This was a build/deployment path fix so GitHub Pages and Hostinger can both load the same latest site design correctly.
- GitHub Pages now uses the `/Mstar-Holding-new-site/` deployment base.
- Hostinger now uses the `/` deployment base.
- No new ZIP was created for this GitHub Pages styling fix.

## 2026-06-30

### Business Contact Live-Update ZIP

- Small Business page live-update ZIP created for the latest contact section change only.
- ZIP contains only the Business page and required built assets inside `business/` and `assets/`.
- ZIP uses forward-slash paths, has no wrapper folder, and has no loose files outside correct folders.
- No homepage files, favicon/social images, media, videos, or unrelated design assets are included.

## 2026-06-30

### Business Bright Contact Section

- Business page contact section now matches the homepage contact visual style.
- The section uses a white/off-white background, restrained Mstar gold accents, gold email icon, thin divider, underlined email address, and a large black editorial heading.
- Homepage contact section remains unchanged.
- No Business page hero, videos, portfolio sections, header, footer, or news content was changed.

## 2026-06-30

### Full Live ZIP With Forward-Slash Paths

- Deployment ZIP is clean and public_html-ready.
- The full deployment package includes the latest finished site design and behavior changes.
- Brand assets remain organized in `assets/brand/`.
- No favicon, logo, social preview, or brand image files are loose in the deployment ZIP root.
- ZIP archive entries use forward-slash folder paths for Hostinger/Linux extraction.

## 2026-06-30

### Clean Brand Asset ZIP Root

- Brand assets are organized only in `assets/brand/`.
- No favicon, logo, social preview, or brand image file should appear loose in the deployment ZIP root.
- Footer tagline is `Putting Big Ideas into Action`.
- Non-home pages remain readable from the top with the semi-transparent scrolled header treatment.
- Homepage header behavior is unchanged.

## 2026-06-30

### Clean Full Hostinger Deployment ZIP

- Non-home pages use the readable semi-transparent header from the initial top state, matching the existing scrolled header treatment.
- Homepage header behavior is unchanged and keeps the transparent top state over the hero.
- Footer brand tagline is now `Putting Big Ideas into Action` everywhere.
- The clean live deployment ZIP uses a direct `public_html` structure with root HTML files, normal folders, organized brand assets, root fallback favicon files, `.htaccess`, media, and videos.
- Built asset and favicon references are root-based for the live Hostinger domain.
- No page layout, business/news content, social preview image, favicon design, or media design was changed for this packaging pass.

## 2026-06-30

### Media Compression Pass

- Compressed approved video and image assets to make the live `dist/` upload much smaller without changing filenames, paths, layout, crop intent, article order, card behavior, metadata behavior, or page structure.
- `dist/` is now 107.53 MB, down from about 253 MB.
- MP4s now total 81.36 MB, down from about 226 MB.
- Hero/header videos remain in place and company videos keep the same visual slots, lazy-loading behavior, autoplay, muted, loop, and playsinline behavior.
- PNGs were recompressed losslessly where smaller output was possible; transparent logos/icons remain transparent and were not flattened.
- Homepage and News page article cards still open original external URLs in a new tab.
- No approved image, video, logo, icon, article media, visible design section, or layout was removed.
- No deployment ZIP was created.

## 2026-06-30

### Live Deployment Weight Pass

- Added deployment-weight improvements without changing approved imagery, video choices, logos, icons, article media, article order, card content, layout, crop intent, or visual style.
- Homepage now has live `mstarholding.com` canonical, Open Graph, Twitter, and JSON-LD metadata.
- Non-hero lazy images now include async decoding hints while hero posters remain eager.
- Business company videos keep their exact same media paths and visual placement, but below-fold MP4 sources lazy-load near the viewport before autoplaying muted, looping, and playsinline.
- Apache `.htaccess` compression and cache rules support lighter live delivery without changing the rendered design.
- Homepage and News page article cards still open original external URLs in a new tab and do not route to internal detail pages.
- No images, videos, logos, icons, article media, design sections, or approved layouts were removed.
- No deployment ZIP was created.

## 2026-06-30

### External News Card Link Correction

- Homepage and News page article cards now open the original source article URLs in a new browser tab when a real URL is available.
- The full article card remains the clickable target; image, category, title, excerpt, source, date, and arrow visuals stay inside the card exactly as designed.
- Articles without an external URL keep the same visual card treatment but do not navigate to internal detail pages or `news/`.
- The homepage `All News and Activities` CTA remains the internal link to `news/`.
- Existing detail pages are not used by homepage or News page card clicks.
- News sorting remains newest first by `dateSort`.
- The approved sticky-left homepage News section, 4/2/1 News page grid, and white/off-white Mstar gold design remain preserved.

## 2026-06-30

### 2026 Defense Article And ABS Video Update

- News cards now include the January 26, 2026 The Frontier Report defense article as the newest story.
- Homepage News cards and News page cards continue linking to article detail pages, while the homepage `All News and Activities` CTA continues linking to `news/`.
- The News page continues to use the approved 4/2/1 responsive article grid.
- Detail pages use the same image, date, source, excerpt, and summarized body content as the shared article data.
- The new defense article uses the supplied Mstar Defense image at `public/media/news/mstar-defense-major-contract-asia-africa-ipo.png`.
- The white/off-white Mstar gold News design remains preserved.
- The ABS Fulfillment Business page video was replaced in place without Business page design, layout, CSS, text, logo, CTA, or other video changes.
- The Business page layout remains preserved.

## 2026-06-30

### Finished News And Media System

- News cards now use the complete real article set, including the April 23, 2024 defense entrepreneurship article.
- Homepage News continues to show the latest articles first from the shared sorted data source.
- News page shows all articles latest to earliest by ISO `dateSort`.
- Article cards now link to internal article detail pages instead of directly leaving the site.
- Detail pages keep the original source link available as a refined `Read original article` CTA when a source URL exists.
- All article images are sourced from the supplied `news article` folder and stay consistent across homepage cards, News page cards, and detail pages.
- The image mapping is defense/radar image for the defense article, Pasit close-up for the Prestige profile, Jakapun portrait for the CEO spotlight, father-and-son image for Gulf News expansion, and studio leadership image for COVID-19 recovery.
- Article detail pages use a responsive editorial layout: large title/meta/text on one side, article image on the other at desktop, then stacked cleanly on tablet and mobile.
- The approved white/off-white Mstar gold visual system, rounded cards, sticky-left homepage News behavior, and 4/2/1 News page grid remain preserved.

## 2026-06-30

### Real News Article Content

- News cards now use real Mstar Holding media coverage content instead of placeholder articles.
- Homepage continues to show the latest 4 articles from the shared sorted article data.
- News page continues to display articles latest to earliest by ISO `dateSort`.
- Article cards now include quiet source labels for Prestige Thailand, CEOWORLD Magazine, Gulf News, and Forbes India.
- Cards link out to the original article sources, keeping the website copy limited to short summaries, titles, dates, source names, and imagery.
- The article image set uses editorial/profile-style leadership imagery from the locally supplied `leadership boar` image folder because the task-specific attachment folder did not expose separate image files.
- The white/off-white Mstar gold visual system, rounded premium cards, sticky-left homepage behavior, and 4/2/1 News page grid remain preserved.

## 2026-06-29

### Approved News And Media Homepage Section

- Replaced the previous Enduring Value homepage section with the approved `News and Media` section.
- The section uses the bright Mstar visual system: white/off-white background, charcoal text, restrained gold accents, and premium rounded article cards.
- Desktop uses sticky-left / scrolling-right behavior: the left title, intro, and CTA remain sticky while the right-side news cards move naturally with the main page scroll.
- The right-side article list is not an internal scrolling box; it remains part of the normal page flow.
- Tablet and mobile stack safely with no intended horizontal page overflow.
- Homepage CTA text is `All News and Activities` and links to `news/`.
- Homepage cards link to `news/` until real article detail pages are added.

### News Page Grid

- Added `news/index.html` with a bright white/off-white News and Media page.
- The News page keeps the consistent Mstar header/footer and page-specific SEO metadata.
- The article grid is 4 cards per row on desktop, 2 cards per row on tablet, and 1 card per row on mobile.
- Placeholder article labels are intentionally small and quiet so the page can be reviewed without looking temporary or unfinished.
- Placeholder articles are temporary; real articles and article detail pages will be added later.
- Article display follows the latest-first rule using `dateSort` in ISO date format.
- Reused existing homepage sector images as placeholder media rather than adding heavy new assets.

## 2026-06-29

### Clip-Path Sector Collage Fix

- Replaced the One Group transform-skew collage with clip-path slanted image panels so images fill the panels without black gaps.
- Removed image skew/counter-skew transforms; images now remain unskewed with `object-fit: cover` and per-sector object positioning.
- Desktop keeps six clean slanted panels with white/off-white separators created by the page background and panel gaps.
- Tablet and mobile remove the clip-path and use safe rounded image tiles, preserving readable labels and no page-level horizontal overflow.
- Real Estate is shifted right, and the other sector images use tuned object positions so important subjects stay visible.
- The bright white/off-white visual system, exact sector images, exact gold icons, and no-box rule remain preserved.

## 2026-06-29

### Bright Homepage Layout Proportions

- Fixed the bright homepage sections so the layout matches the approved sample more closely instead of using giant typography.
- One Group now uses a controlled editorial headline, existing Mstar body copy, visible `Explore Our Businesses` CTA, and a right-side six-panel slanted sector collage.
- The One Group collage uses reduced image zoom and a shorter controlled height so more of each supplied sector photo is visible.
- Desktop keeps the slanted six-panel treatment; tablet uses a clean 3x2 grid with labels anchored inside each tile; mobile uses horizontal scroll sector tiles.
- Investing, Enduring Value, and Contact headline sizing is now section-specific and controlled so no title clips or becomes a full-screen typographic block.
- Contact keeps the email block beside the text on desktop and below the text on mobile.
- The no-box rule, bright white/off-white background, restrained gold accents, exact sector assets, and exact transparent gold icons remain preserved.

## 2026-06-29

### Homepage Sector Images And Growth Icons

- The `One Group. Multiple Sectors. Built for Growth.` section now uses the exact six user-provided images in the slanted sector collage.
- Sector mapping is Real Estate -> `real estate image.png`, Food & Hospitality -> `senior home.png`, Import / Export -> `mstar logistic.png`, Defense -> `mstar defense.png`, E-commerce & Technology -> `909155fa-c8d5-401f-a65e-fcf2ed21aa88.png`, and Entertainment -> `mstar hairsoft home page.png`.
- The desktop collage keeps the bright editorial left side with six angled image panels on the right, dark bottom gradients for label readability, and restrained gold line accents.
- Tablet keeps the same image set in a safe 3x2 grid to avoid cramped slanted crops.
- Mobile keeps horizontally scrollable sector tiles with readable labels and protected `E-commerce & Technology` wrapping.

### Exact Gold Icon Row

- The `Investing in the Future of Regional Expansion` icon row now uses the exact uploaded gold icon set: house, growth chart, light bulb, globe, and handshake.
- Icons are transparent PNG gold line art with no white square, black square, or checkerboard background.
- Desktop keeps five clean columns with thin dividers, gold icons, black labels, and muted gray supporting copy.
- Tablet wraps the icon row to 3 + 2 when needed for readability.
- Mobile keeps the row horizontally scrollable without page-level horizontal overflow.
- The no-box rule and white/off-white premium visual system remain preserved.

## 2026-06-29

### Bright Homepage Sections After Dark Hero

- Approved bright homepage direction implemented after the existing dark hero video.
- Preserved the top hero video section and used the new white/off-white system only for the homepage sections that follow it.
- The visual system is bright, premium, corporate, and institutional: white/off-white backgrounds, black/charcoal headings, muted gray body copy, restrained Mstar gold accents, and generous spacing.
- The no-box design rule remains active. White sections may use image masks, thin dividers, gold line accents, soft arcs, CTA outlines, and clean media frames, but not heavy panels, dashboard boxes, or cheesy cards.

### One Group Section

- `One Group. Multiple Sectors. Built for Growth.` now uses a clean white editorial layout with a gold mini-line, large black headline, outline CTA, and responsive sector visuals.
- Desktop uses six angled vertical sector image panels for Real Estate, Food & Hospitality, Import / Export, Defense, E-commerce & Technology, and Entertainment.
- Tablet changes the sector visuals to a safer 3x2 grid.
- Mobile uses horizontally scrollable sector tiles with safe gutters and hidden native scrollbars.
- `E-commerce & Technology` is protected from broken `E-` wrapping.

### Investing And Enduring Value Sections

- `Investing in the Future of Regional Expansion` uses a two-column white layout with a curved city/infrastructure media mask and restrained gold arc treatment.
- The investment theme row remains minimal, using thin gold circular line icons and the existing five themes: Infrastructure, Investment, Innovation, Asia growth opportunities, and Strategic partnerships.
- `A Holding Company Built for Enduring Value` uses the same white split-media language with the approved paragraph and a curved image mask.
- Existing poster assets are reused; no new heavy media assets were added.

### Contact CTA

- `Let us build the next chapter.` now uses white/off-white spacing, a gold mini-line, circular mail icon, thin gold divider, and clear clickable email link.
- Email remains `info@mstarholding.com` with `mailto:info@mstarholding.com`.

### Responsive Targets

- Desktop at 1440px and up is spacious with large editorial typography and wide media treatments.
- Tablet target 1024 x 1366 keeps generous padding and switches unsafe wide layouts to one-column or 3x2 visual grids.
- Mobile target 430 x 932 stacks sections vertically, keeps text first, places media below copy where applicable, uses safe gutters around 24px, and avoids horizontal page overflow.

## 2026-06-22

### Hizoz And ABS Fulfillment Videos

- Replaced the Hizoz.com Business page video with the newly uploaded Hizoz video.
- Added the uploaded ABS Fulfillment video under the Import / Export sector.
- Preserved American Buying Service video, all other company videos, logos, text, CTA links, sticky sector page-scroll behavior, bright Business page layout, hero, header, footer, SEO, and no-box visual system.
- Confirmed the Hizoz.com and ABS Fulfillment videos scale correctly across desktop, tablet, mobile, and mobile landscape.

### Hizoz Business Video

- Added the uploaded Business page video for Hizoz.com.
- Preserved all other company videos, logos, text, CTA links, sticky sector page-scroll behavior, bright Business page layout, hero, header, footer, SEO, and no-box visual system.
- Confirmed the Hizoz.com video scales correctly across desktop, tablet, mobile, and mobile landscape.

## 2026-06-21

### E-commerce Foodonlines Store Video

- Added the uploaded Foodonlines.com store video to the E-commerce & Technology Foodonlines.com company entry only.
- Preserved the Food & Hospitality Foodonlines.com video, company text, logos, CTA, hero, header, footer, SEO, sticky sector behavior, and no-box visual system.

### Business Sector Title Wrapping Fix

- Fixed Business page sector title typography and wrapping so long sector names such as E-commerce & Technology scale cleanly across desktop, tablet, and mobile.
- Prevented broken hyphen wrapping such as `E-` / `commerce`.
- Preserved sticky desktop sector behavior, company layout, logos, videos, CTA, hero, header, footer, SEO, and no-box visual system.

### Desktop Business Text And Media Overlap Fix

- Refined desktop-only Business page layout to prevent company title/copy overlap with media.
- Reduced desktop media width slightly and rebalanced copy/media proportions.
- Improved desktop sticky sector title typography and wrapping for multi-line sector names such as Import / Export and Food & Hospitality.
- Preserved tablet/mobile layout, logo placement, logo sizing, CTA styling, sticky desktop sector behavior, sector spacing, hero, header, footer, SEO, and no-box visual system.

### Desktop Business Media Aspect Ratio Fix

- Corrected desktop-only Business company media sizing so video/media frames render wider without increasing height.
- Adjusted desktop grid/aspect-ratio behavior only.
- Preserved tablet/mobile layout, company text, logo placement, logo size, CTA, sticky desktop sector behavior, sector spacing, hero, header, footer, SEO, and no-box visual system.

### Desktop Business Media Layout

- Adjusted desktop-only Business page layout so sector titles use less horizontal space and company media/video boxes render wider.
- Preserved tablet/mobile layout, company text, company logo placement, company logo size, CTA styling, sticky desktop sector behavior, spacing, hero, header, footer, SEO, and no-box visual system.

### Remaining Business Company Videos

- Added uploaded Business page videos for Mstar Airsoft, Mstar Technology, and Boogoo.
- Preserved all other company videos, logos, text, CTA links, sticky sector page-scroll behavior, bright Business page layout, hero, header, footer, SEO, and no-box visual system.
- Confirmed all new company videos scale correctly across desktop, tablet, mobile, and mobile landscape.

### Business Sector Spacing Tightening

- Tightened Business page vertical spacing between sectors and company blocks across desktop, tablet, and mobile.
- Preserved sticky desktop sector title behavior, normal page-scroll company browsing, company logos, videos, text, CTA links, hero, header, footer, SEO, and no-box visual system.
- Confirmed no internal company scrolling or large blank gaps remain.

## 2026-06-20

### Business Sticky Page-Scroll Sector Layout

- Fixed Business page sector scrolling to match the reference video.
- Sector titles remain sticky on desktop while companies scroll beside them using the main page scroll.
- Removed nested company scrolling and reveal-based company navigation.
- Tablet/mobile now use a safe stacked layout without horizontal overflow.
- Preserved logos, videos, text, CTA links, hero, header, footer, SEO, and no-box visual system.

### Mstar Property Black Background Logo

- Replaced the Business page Mstar Property logo with the supplied black-background logo version.
- Preserved the existing Business page logo mapping, layout, videos, hero, header, footer, CTA, SEO, and company copy.

### Business Main-Flow Company Layout And Logo Normalization

- Removed internal Business sector/company scrolling so all companies now scroll with the main page flow.
- Fixed tablet Business page text alignment and responsive wrapping.
- Normalized active company logo sizing to match the Boogoo Music Festival visual scale, including Mstar Technology.
- Updated One Taste, American Buying Service, and Mstar Property logos with the latest uploaded logo files.
- Reduced company name heading size so sector titles remain the dominant section anchors.
- Preserved hero, header, footer, company videos, CTA, SEO, responsive layout, and no-box visual system.

### Business Logo Scale And SeniorCaring Logos

- Increased Business page active company logo sizing so all company logos remain large and readable, matching the Foodonlines.com visual scale.
- Added the SeniorCaring.net logo to both the Real Estate Senior Home and Food & Hospitality SeniorHome.net company entries.
- Reduced company name heading size so sector titles remain the primary visual anchor.
- Preserved hero, header, footer, company videos, CTA, SEO, responsive layout, and no-box visual system.

### Business Company Hierarchy Refinement

- Reduced Business page active company logo size and company name heading size so sector titles remain the primary visual anchor.
- Improved company-to-sector hierarchy to better match the approved sample reference.
- Preserved hero, header, footer, company assets, CTA, videos, responsive behavior, and no-box visual system.

### Business Sticky Sector Titles

- Updated Business page sectors so each sector title stays stationary/sticky while its company blocks scroll vertically beside it.
- Removed click-to-reveal company tabs/selectors as the main company browsing system.
- Preserved existing company logos, text, videos/media, CTA links, bright Business page layout, hero, header, footer, SEO, and no-box visual system.
- Confirmed desktop, tablet, and mobile layouts work without horizontal overflow.

### Business Stacked Company Sections

- Replaced Business page click-to-switch company tabs with stacked scrollable company blocks inside each sector.
- Each company now appears visibly in sequence with its existing logo, text, media/video, and CTA.
- Removed company selector/tabs as reveal controls while preserving the bright Business page layout, hero, header, footer, videos, logos, SEO, and no-box visual system.
- Confirmed desktop, tablet, and mobile layouts scroll naturally with no horizontal overflow.

### Remaining Business Company Logos

- Added real Business page logos for American Buying Service, Boogoo, Hizoz, ABS Fulfillment, Mstar Technology, Mstar Defense, and Mstar Airsoft.
- Increased active company logo display size by about 30%.
- Preserved mobile text-only company selectors, company videos, bright Business page layout, hero, header, footer, CTA, arrows, SEO, and no-box visual system.
- Confirmed logos remain responsive and clean on the white/off-white section background.

### Business Selector Text-Only Controls

- Removed logos/icons/images from Business page company selector boxes across desktop, tablet, and mobile.
- Company selector boxes now display company names only.
- Preserved active company logos above company content, media, CTA, arrows, header, footer, layout, SEO, and no-box visual system.

### Mobile Business Selector Refinement

- Reduced mobile Business page company selector button height.
- Removed logos/icons from inside mobile selector buttons so they now show text only.
- Preserved desktop/tablet layout, active company logo, media, CTA, header, footer, and overall Business page structure.

### Business Bright Sector Layout

- Updated Business page sector sections below the hero to the approved bright white/off-white responsive layout.
- Kept the Business hero video/header unchanged.
- Preserved data-driven multi-company sector tabs, mobile text controls, logos, videos, CTA, arrows, SEO, and no-box visual system.
- Removed the mockup-style bottom feature/icon row and kept the play button only inside the video/media frame.
- Confirmed desktop, tablet, and mobile layouts remain responsive with no horizontal overflow.

## 2026-06-19

### Business Company Real Logos

- Replaced Business page placeholder logos with real uploaded logos for Mstar Defense, Foodonlines.com, Mstar Property, and BuyHomeForLess.
- Preserved company videos, text, controls, header, footer, CTA, arrows, layout, SEO, and no-box visual system.
- Confirmed logos remain responsive across desktop, tablet, and mobile.

### American Buying Service Business Video

- Added the uploaded American Buying Service video to American Buying Service company media only.
- Preserved all other company videos, text, logos, company controls, header, footer, CTA, arrows, layout, SEO, and no-box visual system.

### Mstar Defense Business Video

- Added the uploaded Mstar Defense video to Mstar Defense company media only.
- Preserved all other company videos, text, logos, company controls, header, footer, CTA, arrows, layout, SEO, and no-box visual system.

### Hospitality SeniorHome Care Video Fix

- Replaced the Food & Hospitality / Hospitality SeniorHome.net video with the newly uploaded senior care video.
- Preserved the Real Estate Senior Home media unchanged.
- Preserved all other company videos, text, logos, company controls, header, footer, CTA, arrows, layout, SEO, and no-box visual system.

### Hospitality Seniorhome Video Update

- Added the uploaded private nursing hut video to Food & Hospitality Seniorhome.net company media.
- Reverted Real Estate Senior Home company media back to the original `business-senior-home.mp4` video.
- Preserved Business page layout, company text, logos, controls, CTA, arrows, header, footer, SEO, bottom preview removal, and no-box visual system.

### Foodonlines Business Video Update

- Replaced Foodonlines.com company media with the newly uploaded Foodonlines video.
- Preserved Foodonlines.com text, One Taste text/video, Real Estate company videos, company logos, company controls, header, footer, CTA, arrows, layout, SEO, and no-box visual system.

### Senior Home Business Video Update

- Replaced Senior Home / SeniorHome.net company media with the uploaded senior care video.
- Preserved Mstar Property video, BuyHomeForLess video, company text, company logos, company controls, header, footer, CTA, arrows, layout, SEO, and no-box visual system.

## 2026-06-18

### Business Sector Title Enlargement

- Enlarged Business page sector name text so each sector title visually reads as a major section heading.
- Kept only one real page H1 for SEO while using H1-size visual styling for sector names.
- Preserved company content, logos, videos, tabs/text controls, CTA, arrows, header, footer, SEO, and no-box visual system.
- Confirmed removed sector intro headline/description text was not restored.
- Sector titles remain unboxed, white, normal-case, and directly on the cinematic page background.

### Business Sector Intro Text Removal

- Removed the extra sector-level headline and description text from all Business page sectors.
- Preserved company names, company descriptions, logos, videos, media, tabs/text controls, CTA, arrows, header, footer, SEO, and no-box visual system.
- Confirmed bottom sector previews were not restored.
- Business sectors now show the sector label, company text controls, active company content, active company media, CTA, and arrows without adding cards, panels, dividers, boxes, or replacement copy.

### Food Business Copy And Videos

- Updated Foodonlines.com copy to `We bring groceries to your door for less.`
- Updated One Taste copy to describe ready-to-eat MRE meal solutions for troops, emergency response, disaster relief, and remote operations.
- Added the uploaded Foodonlines.com video to Foodonlines.com company media only.
- Added the uploaded One Taste MRE video to One Taste company media only.
- Preserved Real Estate company videos, company logos, company controls, header, footer, CTA, arrows, layout, SEO, and no-box visual system.

### BuyHomeForLess Business Video

- Added the uploaded BuyHomeForLess video to BuyHomeForLess company media only.
- Preserved Mstar Property video, Senior Home video, company text, company logos, company controls, header, footer, CTA, arrows, layout, SEO, and no-box visual system.

### Real Estate Company Copy And Senior Home Video

- Updated Real Estate company copy for Mstar Property, BuyHomeForLess, and Senior Home.
- Added the uploaded senior care video to Senior Home company media only.
- Preserved Mstar Property video, BuyHomeForLess media, company logos, company controls, header, footer, CTA, arrows, layout, SEO, and no-box visual system.

### Mstar Property Compressed Video Replacement

- Replaced the Mstar Property Business page video with the lighter compressed MP4 supplied by the user.
- Kept the deployed video path unchanged at `public/videos/business-mstar-property.mp4` so the Business page continues to load `business-mstar-property.mp4`.
- Preserved header, footer, layout, logo, tabs, CTA, arrows, text, and all other company media.

### Mstar Property Live Deployment Video

- Fixed Mstar Property company video loading by correcting the actual media path/rendering issue.
- Confirmed the deployed GitHub Pages video URL was missing before this patch, so the issue was stale repository deployment output rather than user browser cache or local playback.
- Removed the separate fallback image from the Mstar Property video render branch so the uploaded video is the only visible company media below the existing scrim.
- Preserved Seniorhome, Buyhomeforless, all other company media, logo support, company controls, header, footer, CTA, layout, SEO, and no-box visual system.
- Permanent workflow note: when changes are complete, commit and push automatically; do not ask the user whether to push.

### Business Mobile Company Text Controls

- Replaced the mobile native company dropdown with text-style company controls.
- Preserved latest company logo support.
- Preserved Business page layout, header, footer, media, CTA, arrows, SEO, and no-box visual system.
- Confirmed no bottom sector previews were restored.
- Mobile portrait company controls should use the same clean text-tab language as desktop, with active gold treatment and horizontal scrolling when needed.
- Do not use a native `<select>` dropdown for the Business page company controls on mobile.

### Business Placeholder Logos

- Added placeholder logo support to Business page company renderer.
- Each company now displays a placeholder logo above the active company text.
- Real logos can be swapped in later by replacing files in `public/media/logos/`.
- Header, footer, current CSS style, layout, tabs, dropdown, CTA, media, and responsive behavior were preserved.
- Placeholder logos must stay transparent, simple, premium, unboxed, and inside the existing company copy area only.

### Business Company Logo Support

- Added optional company logo support to the Business page company renderer.
- Logos render above the active company text when provided.
- Header, footer, current CSS style, layout, tabs, dropdown, CTA, media, and no-box visual system were preserved.
- Logo implementation is responsive and scales correctly across desktop, tablet, and mobile devices without affecting existing layouts.
- Do not add logo images to the header, footer, navigation, tabs, media frame, sector headline area, or any new card or box.
- If no final logo file exists for a company, do not add a live logo path; the renderer must skip the image and leave the current company content spacing unchanged.

### Business Sector Preview Removal

- Removed repeated bottom sector preview rows from each Business page sector so each sector stands alone and users continue through the page by scrolling.
- Do not include bottom sector preview thumbnails or links.
- Each sector stands on its own, and users continue to the next sector by scrolling.
- Do not add `SectorPreviewLinks`, bottom sector preview rows, sector thumbnail strips, small preview thumbnails, or repeated links to other sectors inside each sector section.
- Keep Business sector navigation at the top of the Business content, company tabs on desktop, the mobile company dropdown, company media, active company copy, CTA buttons, and company count/arrows.

### Approved Business Page Option 2 Layout

- The Business page now uses the approved Option 2 direction: Sector with Company Tabs.
- The Business page video header stays first, followed by premium full-width sector sections rendered from data.
- Each sector presents a small gold sector label, company controls, active company copy, and active company media without the removed sector-level headline or description.
- The layout supports multiple companies per sector without hard-coding individual section markup.

### Desktop Tabs Behavior

- Desktop uses horizontal company tabs under the sector label.
- The active company tab uses a refined gold underline and stronger white text.
- Inactive tabs stay white/gray and transition lightly on hover or focus.
- Tabs update the active company name, description, media, CTA, selected tab state, and index count.
- Keyboard behavior supports arrow, Home, and End navigation for company tabs.

### Mobile Company Text Controls

- Phone portrait uses text-style company controls instead of a native browser dropdown.
- The controls match the dark and gold design language, stay within the viewport, and update the active company content.
- Mobile portrait order is sector label, company text controls, full-width media, company copy, CTA, and bottom controls.

### Landscape Behavior

- Phone landscape keeps horizontal tabs with safe horizontal scrolling when needed.
- Phone landscape preserves the Business header desktop video behavior and does not force portrait mobile video.
- Tablet keeps the desktop-style tab behavior.

### Company Media Rules

- Company media supports image or native HTML5 video.
- Video media uses `autoplay`, `muted`, `loop`, `playsinline`, and `preload="metadata"` with poster fallback support.
- Media frames are cinematic and responsive without becoming heavy card UI.
- Placeholder media paths are documented in the data structure and should be replaced with final approved assets later.

### Button Transition Rules

- Company CTAs use the current homepage/business outline pill style.
- Buttons stay transparent or subtly filled, with a thin outline, white text, a small arrow mark, smooth hover, and slight arrow movement.
- Controls use thin circular arrows that match the premium CTA direction without bulky filled styling.

### No-Box Visual Rule

- Text must sit directly on the cinematic page background or section scrim.
- Do not add cards, boxed text panels, white containers, dashboard modules, or boxed backgrounds behind copy.
- Allowed framing is limited to media frames, buttons, thin dividers, and gold tab underlines.

### SEO Requirement

- Business page SEO must keep a unique title, meta description, canonical URL, Open Graph metadata, Twitter/X metadata, robots metadata, and JSON-LD for `Organization`, `WebPage`, `ItemList`, and `BreadcrumbList`.
- Sector and company text must remain crawlable and must not include fake reviews, ratings, financial claims, or misleading schema.

## 2026-06-17

### Business Header Video Source Logic

- Fixed Business page header video selection so phone portrait views use the mobile video while desktop, tablet, and phone landscape use the desktop video.
- Source selection now uses phone portrait viewport/screen detection with explicit video reload behavior instead of relying on `<source media>` alone.
- Preserved the Business page design, text, buttons, homepage media, sector videos, and no-box visual system.

### Business Header Mobile Video

- Added mobile-only Business page header video source for phone screens while preserving desktop video behavior.
- Business Portfolio header now uses a mobile MP4 source for screens up to 767px and the existing desktop video asset for tablet and desktop.
- Added orientation-safe Business header height handling for phone portrait and mobile landscape without changing Business page text, buttons, sector videos, or homepage media.
- Preserved the no-box design system and existing header scrim/readability treatment.

### Business Header Video Banner

- Updated Business page header video and reduced header section height to a shorter responsive banner format.
- The new desktop header video asset is used only in the Business Portfolio header section and is stored as `business-page-header-desktop.mp4`.
- Business header sizing now follows the requested 1901x656 desktop banner ratio with responsive mobile/tablet clamps.
- Preserved Business page typography, CTA styling, transitions, sector media, and the no-box design system.

### Homepage Headline And Link-Row Patch

- Changed the operations section headline to `One Group. Multiple Sectors. Built for Growth.` with no changes to its font, size, line spacing, layout, responsive behavior, media, CTA button, or sector labels.
- Removed the large homepage link-row section and its related arrows, dividers, hover treatment, spacing, and `.link-band` CSS.
- Preserved the cinematic no-box design system and kept homepage spacing flowing directly from the introduction section into the contact section.
- Added non-visual zero-size anchors only to keep existing main navigation targets valid after the visible link-row section was removed.

### Business Page Link Fix

- Updated homepage and Business page navigation to use project-site-safe relative links so the `Explore Our Businesses` CTA opens the Business page from the GitHub Pages preview.
- Preserved the existing visual design; this was a routing-only fix.

### Business Page

- Created Business page with cinematic HTML5 video hero, sector sections, smooth CTA buttons, SEO metadata, and homepage CTA link.
- The Business page keeps the homepage visual language exactly: cinematic full-bleed media, black/charcoal foundations, white typography, muted body copy, gold line accents, transparent navigation, and no boxed text areas.
- The top hero uses the homepage video-section structure with native HTML5 video attributes, poster fallback, `object-fit: cover`, full-section readability gradients, and reduced-motion support.
- The sector navigation row sits directly under the hero with text links, spacing, thin border lines, subtle hover motion, and horizontal mobile scrolling instead of cards or boxed containers.
- Sector sections alternate text/media layout on desktop and stack safely on mobile, with large cinematic media areas and text placed directly on the page background.
- Sector copy is grammar-checked and crawlable for Real Estate, Food & Hospitality, Import / Export, Defense, E-commerce & Technology, and Entertainment.
- Business page buttons use the homepage lightweight outline CTA family: thin border, transparent glass feel, rounded pill geometry, smooth hover lift, and arrow motion.
- The final CTA section stays open and unboxed, with `Partner with a Multi-Sector Holding Company` and a `Contact Us` button linking to `/contact`.
- Responsive rules: use `clamp()` typography, flexible grids, safe gutters, horizontal-overflow guards, mobile stacking, and no clipped text or buttons at 320px through desktop widths.
- No-box rule remains mandatory: no cards, panels, content boxes, boxed backgrounds, or nested containers for page content; only media frames and clickable buttons are framed.
- SEO requirement for every new page: unique title and meta description, canonical URL, Open Graph metadata, Twitter/X card metadata, robots metadata, JSON-LD where appropriate, one clear `<h1>`, proper heading hierarchy, and crawlable text without fake claims.

### Hero Video Asset Replacement

- Replaced main homepage hero video asset only; layout and responsive styling unchanged.
- Existing hero HTML5 video path, poster behavior, sizing rules, overlays, and responsive formatting remain unchanged.

### Operations Sector Labels

- Grammar-checked sector labels updated from `Technology` to `E-commerce & Technology`, with `Entertainment` added to its right.
- Sector label grid now supports six labels while preserving the same white typography, spacing, and gold accent line style across desktop, tablet, and mobile.

### Operations CTA

- Added the approved grammar-checked `Explore Our Businesses` CTA below `A Multi-Sector Portfolio Built for Growth`.
- CTA uses a thin white outline, subtle transparent glass fill, white text, and a small right-arrow mark without adding cards, panels, or content boxes.
- Responsive spacing keeps the CTA between the headline and sector labels without overlap or clipping.

### Mobile Text Safe Zones

- Fixed homepage text cutoff by constraining headings, paragraphs, navigation, CTAs, link bands, and footer text to safe responsive widths.
- Added horizontal overflow guards after correcting text container sizing, wrapping, and section overflow behavior.
- Audited the grammar-checked hero headline `Putting Big Ideas into Action`; no text wording change was needed in this patch.

### Hero Text And Video Patch

- Grammar-checked hero headline changed from `Building Long-Term Value Across Industries` to `Putting Big Ideas into Action`.
- The first hero now uses `public/videos/mstar-holding-company-intro.mp4` as the only live HTML5 video source.
- Hero headline sizing reduced with responsive clamps to preserve cinematic scale without cropping.

### Permanent Text Rule

- Every time new text is added or existing text is changed, check grammar before saving.
- Fix grammar naturally unless the user explicitly says to keep the exact wording.
- Document the grammar-checked wording in the changelog when text is changed.

### Preview Workflow

- GitHub Pages preview workflow added so pushed changes build and deploy the current cinematic homepage from `dist`.
- Vite uses relative built paths so preview media and assets resolve under the repository Pages URL.
- Visual QA should still be done locally before push; the hosted preview is the shared review surface after Actions completes.

### Visual System

- Direction: cinematic, premium, institutional, corporate, minimal.
- Palette: black and deep charcoal foundations, white typography, muted silver body copy, restrained gold accent lines.
- Typography: modern system sans serif, large display headings, refined compact navigation, no eyebrow labels or badges.
- Container model: full-bleed media sections and open typography. No cards, panels, text boxes, white containers, dark content containers, or bordered content blocks.

### Homepage Structure

- Transparent navigation overlays the hero with white text and minimal premium styling.
- Section 1: full-screen hero video placeholder with headline, introduction, and two text CTAs.
- Section 2: large operations video placeholder with multi-sector portfolio headline and sector themes.
- Section 3: large growth video placeholder with regional expansion headline and investment themes.
- Secondary homepage continuation includes introduction, about/business/global/news/contact link bands, and a direct contact area.

### Three-Video-Section Architecture

- Each primary section includes the required placeholder comments and an HTML5 video tag prepared for future sources.
- Current posters are real image assets in `public/media/` and are layered behind text as production-ready fallbacks.
- CSS uses `object-fit: cover`, stable full-viewport section sizing, and section-level gradients only for readability.

### Video Placeholder Strategy

- Future video tags already include `autoplay`, `muted`, `loop`, `playsinline`, and `preload="metadata"`.
- Poster attributes are set for Safari and Chrome compatibility.
- Image fallback layers keep the visual experience intact until video files are supplied.
- Reduced-motion users do not receive autoplaying video behavior.

### Responsive Behavior

- Desktop uses transparent horizontal navigation and large cinematic type.
- Tablet/mobile switches to a full-screen black menu with the same navigation order; page content is hidden while the menu is open so the hero media never interferes with legibility.
- Media crops preserve readable left-side copy areas with section-specific `object-position` values.
- Theme lists collapse from five columns to two columns, then one column on small screens.

### No-Box Design Rules

- Text remains directly on media or page backgrounds.
- Section gradients are full-section readability treatments, not content containers.
- CTA styling uses text, line accents, and spacing rather than button boxes.

### 2026-06-30 Weight Pass Design Notes

- Added the exact footer copyright line `Â© 2026 Mstar Holding Inc.` as small, subdued footer text without changing the existing footer hierarchy.
- Converted photo-style homepage posters, sector imagery, and news imagery to WebP while preserving visual placement, crop behavior, article card layout, category labels, titles, excerpts, sources, dates, and arrows.
- Re-encoded approved MP4 media in place with the same filenames so page design, video placement, autoplay behavior, and lazy-loading behavior remain unchanged.
- Kept transparent logo and icon assets as PNG to avoid visible brand or edge artifacts.
- Representative compressed video frames were spot-checked for recognizable content and acceptable visual clarity.

### 2026-06-30 Hostinger ZIP Notes

- Footer copyright source now uses `&copy; 2026 Mstar Holding Inc.` on every page to avoid mojibake while preserving the same footer placement and subdued visual treatment.
- Hostinger ZIP packaging was created from built `dist` files only, so the live upload preserves the current optimized design without source or development files.
- The ZIP root matches `public_html` extraction expectations with no extra enclosing folder.

### 2026-06-30 Social Preview And Favicon

- The official Mstar logo is now the global share preview image instead of a hero, Business, News, or AI-generated image.
- Social previews use a 1200 x 630 white-background composition with the Mstar logo centered and uncropped.
- Browser favicon, shortcut icon, and Apple touch icon now use the Mstar logo for brand-consistent tab and saved-icon display.
- Page layouts, CSS, media placement, article cards, and visual design were not changed.
- The live upload ZIP only includes the latest social preview/favicon assets and updated built HTML needed for this change.

### 2026-06-30 Homepage Real Estate Image Position

- Shifted only the homepage Real Estate sector image focal point left inside the existing slanted collage box to reveal more of the luxury house.
- No layout, box dimensions, skew, spacing, responsiveness, HTML structure, copy, or other sector images were changed.
- The latest live-site ZIP was refreshed to include this newest homepage visual adjustment along with the existing social preview/favicon update files.

### 2026-06-30 Organized Brand Assets

- The official Mstar logo remains the global share preview image.
- Brand social preview and favicon assets are now organized under `assets/brand/`.
- Root favicon files remain only as browser fallback copies.
- Browser favicon, shortcut icon, and Apple touch icon use the Mstar logo from the organized brand asset folder.
- Social previews must continue to show the Mstar logo, not AI, hero, Business, or News images.
- The corrected live ZIP structure is public_html-ready and keeps brand assets in `assets/brand/`.

### 2026-06-30 Verified Brand ZIP Structure

- The live ZIP was rebuilt so the main share/fav assets are clearly inside `assets/brand/`.
- Root favicon files are present only as browser fallback copies.
- No loose root `mstar-share.png` or old `og/` share folder is included.
- HTML metadata points to `assets/brand` paths while preserving the official Mstar logo share preview.

### 2026-06-30 Full ZIP Without Root Favicons

- The deployment ZIP no longer exposes favicon files at the ZIP root.
- Favicon, touch icon, and social preview assets remain organized under `assets/brand/`.
- HTML still points to the Mstar logo assets in `assets/brand/`.

### 2026-06-30 Non-Home Header Top-State

- Non-home pages now show the readable semi-transparent header from the very top of the page.
- Business, News, and article detail pages reuse the same visual treatment as the existing scrolled header state: dark glass background, readable light navigation, visible brand text, and the same smooth premium behavior.
- Homepage keeps its original hero/header behavior, including the transparent top state over the hero video.
- Mobile and tablet headers keep the same readable top-state treatment on non-home pages, and the existing mobile menu icon remains visible.
- Footer tagline text now reads `Putting Big Ideas into Action` everywhere, replacing the retired footer tagline without changing footer layout or styling.
- No page layout, business/news content, social preview, favicon, or media design was changed.
