# Designer Notes

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
