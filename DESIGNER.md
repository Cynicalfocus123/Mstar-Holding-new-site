# Designer Notes

## 2026-06-17

### Business Header Video Banner

- Updated Business page header video and reduced header section height to a shorter responsive banner format.
- The new `business-page-video.mp4` asset is used only in the Business Portfolio header section.
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
