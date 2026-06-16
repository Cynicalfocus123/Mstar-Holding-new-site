# Designer Notes

## 2026-06-17

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
