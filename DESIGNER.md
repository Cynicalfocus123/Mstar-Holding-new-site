# Designer Notes

## 2026-06-18

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
- Each sector presents a small gold sector label, a large white headline, a short description, company controls, active company copy, and active company media.
- The layout supports multiple companies per sector without hard-coding individual section markup.

### Desktop Tabs Behavior

- Desktop uses horizontal company tabs under the sector headline and description.
- The active company tab uses a refined gold underline and stronger white text.
- Inactive tabs stay white/gray and transition lightly on hover or focus.
- Tabs update the active company name, description, media, CTA, selected tab state, and index count.
- Keyboard behavior supports arrow, Home, and End navigation for company tabs.

### Mobile Company Text Controls

- Phone portrait uses text-style company controls instead of a native browser dropdown.
- The controls match the dark and gold design language, stay within the viewport, and update the active company content.
- Mobile portrait order is sector label, headline, description, company text controls, full-width media, company copy, CTA, and bottom controls.

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
