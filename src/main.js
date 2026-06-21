import "./styles.css";

const nav = document.querySelector("[data-nav]");
const navToggle = document.querySelector("[data-nav-toggle]");
const header = document.querySelector("[data-header]");

const setNavOpen = (isOpen) => {
  nav?.classList.toggle("is-open", isOpen);
  navToggle?.classList.toggle("is-open", isOpen);
  navToggle?.setAttribute("aria-expanded", String(isOpen));
  navToggle?.setAttribute(
    "aria-label",
    isOpen ? "Close navigation" : "Open navigation",
  );
  document.body.classList.toggle("nav-open", isOpen);
};

navToggle?.addEventListener("click", () => {
  setNavOpen(!nav?.classList.contains("is-open"));
});

nav?.addEventListener("click", (event) => {
  if (event.target instanceof HTMLAnchorElement) {
    setNavOpen(false);
  }
});

const updateHeader = () => {
  header?.classList.toggle("is-scrolled", window.scrollY > 24);
};

updateHeader();
window.addEventListener("scroll", updateHeader, { passive: true });

const prefersReducedMotion = window.matchMedia(
  "(prefers-reduced-motion: reduce)",
).matches;

const isPhonePortraitViewport = () => {
  const viewportShortSide = Math.min(window.innerWidth, window.innerHeight);
  const viewportLongSide = Math.max(window.innerWidth, window.innerHeight);

  const screenShortSide = Math.min(window.screen.width, window.screen.height);
  const screenLongSide = Math.max(window.screen.width, window.screen.height);

  const viewportLooksPhone =
    viewportShortSide <= 480 && viewportLongSide <= 932;
  const screenLooksPhone = screenShortSide <= 480 && screenLongSide <= 932;
  const isPortrait = window.innerHeight >= window.innerWidth;

  return (viewportLooksPhone || screenLooksPhone) && isPortrait;
};

const businessHeroVideo = document.querySelector("[data-business-hero-video]");

const updateBusinessHeroVideo = () => {
  if (!(businessHeroVideo instanceof HTMLVideoElement)) {
    return;
  }

  const desktopSrc = businessHeroVideo.dataset.desktopSrc;
  const mobileSrc = businessHeroVideo.dataset.mobileSrc;
  const selectedSrc = isPhonePortraitViewport() ? mobileSrc : desktopSrc;
  const source = businessHeroVideo.querySelector("source");

  if (!selectedSrc || !(source instanceof HTMLSourceElement)) {
    return;
  }

  const selectedUrl = new URL(selectedSrc, window.location.href).href;

  if (source.src === selectedUrl) {
    return;
  }

  source.src = selectedSrc;
  businessHeroVideo.load();

  if (!prefersReducedMotion) {
    void businessHeroVideo.play().catch(() => {});
  }
};

const scheduleBusinessHeroVideoUpdate = () => {
  updateBusinessHeroVideo();
  requestAnimationFrame(updateBusinessHeroVideo);
  window.setTimeout(updateBusinessHeroVideo, 160);
};

scheduleBusinessHeroVideoUpdate();
window.addEventListener("resize", updateBusinessHeroVideo);
window.addEventListener("orientationchange", updateBusinessHeroVideo);
window.addEventListener("pageshow", scheduleBusinessHeroVideoUpdate);

const businessSectorsRoot = document.querySelector("[data-business-sectors]");

// Company entries can optionally include `logo` and `logoAlt` when final logo
// assets are added under public/media/logos.
const businessSectors = [
  {
    name: "Real Estate",
    id: "real-estate",
    headline: "Building Enduring Value",
    description:
      "Strategic real estate development focused on long-term value, premium locations, and scalable regional growth.",
    poster: "../media/hero-poster.png",
    companies: [
      {
        name: "Mstar Property",
        description:
          "We develop affordable family homes to large-scale luxury mansion communities, creating quality residential projects designed for modern living, long-term value, and premium locations.",
        mediaType: "video",
        mediaSrc: "../videos/business-mstar-property.mp4",
        poster: "../media/hero-poster.png",
        ctaLabel: "View Company",
        ctaHref: "#",
        logo: "../media/logos/mstar-property-logo.png",
        logoAlt: "Mstar Property logo",
      },
      {
        name: "BuyHomeForLess",
        description:
          "We offer a wide range of land, homes, and condos, from affordable properties to high-end real estate for sale, rent, and development opportunities.",
        mediaType: "video",
        mediaSrc: "../videos/business-buyhomeforless.mp4",
        poster: "../media/operations-poster.png",
        ctaLabel: "View Company",
        ctaHref: "#",
        logo: "../media/logos/buyhomeforless-logo.png",
        logoAlt: "BuyHomeForLess logo",
      },
      {
        name: "Senior Home",
        description:
          "Asia and Thailand's leading senior care home developer, creating comfortable, affordable communities with spacious open-floor-plan designs tailored to the unique needs of seniors.",
        mediaType: "video",
        mediaSrc: "../videos/business-senior-home.mp4",
        poster: "../media/growth-poster.png",
        ctaLabel: "View Company",
        ctaHref: "#",
        logo: "../media/logos/seniorcaring-logo.png",
        logoAlt: "SeniorCaring.net logo",
      },
    ],
  },
  {
    name: "Food & Hospitality",
    id: "food-hospitality",
    headline: "Elevating Experiences Every Day",
    description:
      "Food and hospitality ventures designed around consumer demand, operational quality, and market expansion.",
    poster: "../media/operations-poster.png",
    companies: [
      {
        name: "Foodonlines.com",
        description: "We bring groceries to your door for less.",
        mediaType: "video",
        mediaSrc: "../videos/business-foodonlines-2.mp4",
        poster: "../media/operations-poster.png",
        ctaLabel: "View Company",
        ctaHref: "#",
        logo: "../media/logos/foodonlines-logo.png",
        logoAlt: "Foodonlines.com logo",
      },
      {
        name: "One Taste",
        description:
          "One Taste provides ready-to-eat MRE meal solutions designed for military troops, emergency response, disaster relief, and remote operations where fast, reliable nutrition is essential.",
        mediaType: "video",
        mediaSrc: "../videos/business-one-taste.mp4",
        poster: "../media/hero-poster.png",
        ctaLabel: "View Company",
        ctaHref: "#",
        logo: "../media/logos/one-taste-logo.png",
        logoAlt: "One Taste logo",
      },
      {
        name: "Seniorhome.net",
        description:
          "Hospitality-adjacent support designed around comfort, accessibility, and quality daily living.",
        mediaType: "video",
        mediaSrc: "../videos/business-hospitality-senior-home-care.mp4",
        poster: "../media/growth-poster.png",
        ctaLabel: "View Company",
        ctaHref: "#",
        logo: "../media/logos/seniorcaring-logo.png",
        logoAlt: "SeniorCaring.net logo",
      },
    ],
  },
  {
    name: "Import / Export",
    id: "import-export",
    headline: "Connecting Markets, Creating Opportunities",
    description:
      "Cross-border trade and supply operations supporting regional commerce, distribution, and international partnerships.",
    poster: "../media/growth-poster.png",
    companies: [
      {
        name: "American Buying Service",
        description:
          "Buying and sourcing support for cross-border commerce, distribution needs, and international partnerships.",
        mediaType: "video",
        mediaSrc: "../videos/business-american-buying-service.mp4",
        poster: "../media/growth-poster.png",
        ctaLabel: "View Company",
        ctaHref: "#",
        logo: "../media/logos/american-buying-service-logo.png",
        logoAlt: "American Buying Service logo",
      },
      {
        name: "ABS Fulfillment",
        description:
          "Fulfillment operations supporting trade flows, practical logistics, and scalable distribution activity.",
        mediaType: "image",
        mediaSrc: "../media/operations-poster.png",
        ctaLabel: "View Company",
        ctaHref: "#",
        logo: "../media/logos/abs-fulfillment-logo.png",
        logoAlt: "ABS Fulfillment logo",
      },
    ],
  },
  {
    name: "Defense",
    id: "defense",
    headline: "Supporting Strategic Industry Growth",
    description:
      "Defense-focused operations supporting manufacturing, technology development, and strategic industry partnerships.",
    poster: "../media/hero-poster.png",
    companies: [
      {
        name: "Mstar Defense",
        description:
          "Defense-focused operations supporting strategic industry partnerships, manufacturing, and technology development.",
        mediaType: "video",
        mediaSrc: "../videos/business-mstar-defense.mp4",
        poster: "../media/hero-poster.png",
        ctaLabel: "View Company",
        ctaHref: "#",
        logo: "../media/logos/mstar-defense-logo.png",
        logoAlt: "Mstar Defense logo",
      },
    ],
  },
  {
    name: "E-commerce & Technology",
    id: "ecommerce-technology",
    headline: "Building Digital Platforms for Growth",
    description:
      "Digital commerce and technology initiatives built to support scalable platforms, modern operations, and future-ready growth.",
    poster: "../media/operations-poster.png",
    companies: [
      {
        name: "Foodonlines.com",
        description:
          "Digital food commerce designed to support modern customer access, practical ordering, and market reach.",
        mediaType: "video",
        mediaSrc: "../videos/business-ecommerce-foodonlines.mp4",
        poster: "../media/operations-poster.png",
        ctaLabel: "View Company",
        ctaHref: "#",
        logo: "../media/logos/foodonlines-logo.png",
        logoAlt: "Foodonlines.com logo",
      },
      {
        name: "Hizoz.com",
        description:
          "A digital platform initiative built around scalable technology, modern operations, and growth potential.",
        mediaType: "image",
        mediaSrc: "../media/growth-poster.png",
        ctaLabel: "View Company",
        ctaHref: "#",
        logo: "../media/logos/hizoz-logo.png",
        logoAlt: "Hizoz.com logo",
      },
      {
        name: "Mstar Technology",
        description:
          "Technology operations supporting platform development, digital infrastructure, and future-ready growth.",
        mediaType: "video",
        mediaSrc: "../videos/business-mstar-technology.mp4",
        poster: "../media/hero-poster.png",
        ctaLabel: "View Company",
        ctaHref: "#",
        logo: "../media/logos/mstar-technology-logo.png",
        logoAlt: "Mstar Technology logo",
      },
    ],
  },
  {
    name: "Entertainment",
    id: "entertainment",
    headline: "Creating Destination Experiences",
    description:
      "Entertainment ventures focused on destination experiences, media opportunities, events, and lifestyle-driven growth.",
    poster: "../media/growth-poster.png",
    companies: [
      {
        name: "Boogoo Music Festival",
        description:
          "Event-focused entertainment shaped around destination experiences, audiences, and lifestyle-driven growth.",
        mediaType: "video",
        mediaSrc: "../videos/business-boogoo.mp4",
        poster: "../media/growth-poster.png",
        ctaLabel: "View Company",
        ctaHref: "#",
        logo: "../media/logos/boogoo-logo.png",
        logoAlt: "Boogoo Music Festival logo",
      },
      {
        name: "Mstar Airsoft",
        description:
          "Entertainment operations focused on active destination experiences, events, and audience engagement.",
        mediaType: "video",
        mediaSrc: "../videos/business-mstar-airsoft.mp4",
        poster: "../media/hero-poster.png",
        ctaLabel: "View Company",
        ctaHref: "#",
        logo: "../media/logos/mstar-airsoft-logo.png",
        logoAlt: "Mstar Airsoft logo",
      },
    ],
  },
];

const escapeHtml = (value) =>
  String(value).replace(
    /[&<>"']/g,
    (character) =>
      ({
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#39;",
      })[character],
  );

const formatSectorTitle = (value) =>
  escapeHtml(value).replaceAll("E-commerce", "E&#8209;commerce");

const renderCompanyMedia = (company) => {
  const label = `${company.name} media`;
  const poster = company.poster || company.mediaSrc;

  if (company.mediaType === "video") {
    return `
      <video
        class="company-media-video"
        autoplay
        muted
        loop
        playsinline
        preload="metadata"
        poster="${escapeHtml(poster)}"
        aria-label="${escapeHtml(label)}"
      >
        <source src="${escapeHtml(company.mediaSrc)}" type="video/mp4" />
      </video>
    `;
  }

  return `<img src="${escapeHtml(company.mediaSrc)}" alt="${escapeHtml(label)}" loading="lazy" />`;
};

const renderCompanyLogo = (company) => {
  if (!company.logo) {
    return "";
  }

  return `
    <img
      class="business-company-logo"
      src="${escapeHtml(company.logo)}"
      alt="${escapeHtml(company.logoAlt || `${company.name} logo`)}"
      loading="lazy"
    />
  `;
};

const renderCompanyBlock = (company) => `
  <article class="company-block">
    <div class="company-copy">
      ${renderCompanyLogo(company)}
      <h3 class="business-company-title">${escapeHtml(company.name)}</h3>
      <p>${escapeHtml(company.description)}</p>
    </div>
    <div class="company-media">
      ${renderCompanyMedia(company)}
    </div>
    <div class="company-action">
      <a class="outline-cta dark-outline" href="${escapeHtml(company.ctaHref)}">
        <span>${escapeHtml(company.ctaLabel)}</span>
        <span class="cta-arrow" aria-hidden="true"></span>
      </a>
    </div>
  </article>
`;

const playCompanyMediaVideos = (root = document) => {
  if (prefersReducedMotion) {
    return;
  }

  root.querySelectorAll(".company-media-video").forEach((video) => {
    if (video instanceof HTMLVideoElement) {
      const playVideo = () => {
        if (!video.currentSrc) {
          video.load();
        }

        void video.play().catch(() => {});
      };

      playVideo();
      requestAnimationFrame(playVideo);
      window.setTimeout(playVideo, 250);
    }
  });
};

const renderBusinessSectors = () => {
  if (!businessSectorsRoot) {
    return;
  }

  const sectorLinks = businessSectors
    .map(
      (sector) =>
        `<a href="#${sector.id}">${formatSectorTitle(sector.name)}</a>`,
    )
    .join("");

  const sectorSections = businessSectors
    .map((sector) => {
      const companyBlocks = sector.companies.map(renderCompanyBlock).join("");
      return `
        <section
          class="sector-section business-sector business-sector-section"
          id="${sector.id}"
          aria-label="${escapeHtml(sector.name)}"
        >
          <div class="sector-bg" aria-hidden="true">
            <img src="${escapeHtml(sector.poster)}" alt="" loading="lazy" />
          </div>
          <div class="business-sector-layout business-sector-grid">
            <div class="sector-copy sector-heading business-sector-sticky">
              <h2 class="sector-label business-sector-title">${formatSectorTitle(sector.name)}</h2>
            </div>
            <div class="company-list business-sector-companies">
              ${companyBlocks}
            </div>
          </div>
        </section>
      `;
    })
    .join("");

  businessSectorsRoot.innerHTML = `
    <nav class="sector-nav" aria-label="Business sectors">${sectorLinks}</nav>
    ${sectorSections}
  `;
};

renderBusinessSectors();
playCompanyMediaVideos(businessSectorsRoot);

if (prefersReducedMotion) {
  document.querySelectorAll("video").forEach((video) => {
    video.removeAttribute("autoplay");
    video.pause();
  });
}
