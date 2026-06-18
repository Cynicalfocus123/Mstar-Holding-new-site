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
        logo: "../media/logos/mstar-property.svg",
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
        logo: "../media/logos/buyhomeforless.svg",
        logoAlt: "Buyhomeforless logo",
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
        logo: "../media/logos/seniorhome.svg",
        logoAlt: "Senior Home logo",
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
        mediaSrc: "../videos/business-foodonlines.mp4",
        poster: "../media/operations-poster.png",
        ctaLabel: "View Company",
        ctaHref: "#",
        logo: "../media/logos/foodonlines.svg",
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
        logo: "../media/logos/one-taste.svg",
        logoAlt: "One Taste logo",
      },
      {
        name: "Seniorhome.net",
        description:
          "Hospitality-adjacent support designed around comfort, accessibility, and quality daily living.",
        mediaType: "image",
        mediaSrc: "../media/growth-poster.png",
        ctaLabel: "View Company",
        ctaHref: "#",
        logo: "../media/logos/seniorhome-net.svg",
        logoAlt: "Seniorhome.net logo",
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
        mediaType: "image",
        mediaSrc: "../media/growth-poster.png",
        ctaLabel: "View Company",
        ctaHref: "#",
        logo: "../media/logos/american-buying-service.svg",
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
        logo: "../media/logos/abs-fulfillment.svg",
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
        mediaType: "image",
        mediaSrc: "../media/hero-poster.png",
        ctaLabel: "View Company",
        ctaHref: "#",
        logo: "../media/logos/mstar-defense.svg",
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
        mediaType: "image",
        mediaSrc: "../media/operations-poster.png",
        ctaLabel: "View Company",
        ctaHref: "#",
        logo: "../media/logos/foodonlines.svg",
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
        logo: "../media/logos/hizoz.svg",
        logoAlt: "Hizoz.com logo",
      },
      {
        name: "Mstar Technology",
        description:
          "Technology operations supporting platform development, digital infrastructure, and future-ready growth.",
        mediaType: "image",
        mediaSrc: "../media/hero-poster.png",
        ctaLabel: "View Company",
        ctaHref: "#",
        logo: "../media/logos/mstar-technology.svg",
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
        mediaType: "image",
        mediaSrc: "../media/growth-poster.png",
        ctaLabel: "View Company",
        ctaHref: "#",
        logo: "../media/logos/boogoo-music-festival.svg",
        logoAlt: "Boogoo Music Festival logo",
      },
      {
        name: "Mstar Airsoft",
        description:
          "Entertainment operations focused on active destination experiences, events, and audience engagement.",
        mediaType: "image",
        mediaSrc: "../media/hero-poster.png",
        ctaLabel: "View Company",
        ctaHref: "#",
        logo: "../media/logos/mstar-airsoft.svg",
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
    .map((sector) => `<a href="#${sector.id}">${escapeHtml(sector.name)}</a>`)
    .join("");

  const sectorSections = businessSectors
    .map((sector, sectorIndex) => {
      const company = sector.companies[0];
      const count = sector.companies.length;
      const tabs = sector.companies
        .map(
          (companyItem, companyIndex) => `
            <button
              class="company-tab${companyIndex === 0 ? " is-active" : ""}"
              type="button"
              role="tab"
              id="${sector.id}-tab-${companyIndex}"
              aria-selected="${companyIndex === 0}"
              aria-controls="${sector.id}-panel"
              tabindex="${companyIndex === 0 ? "0" : "-1"}"
              data-sector-index="${sectorIndex}"
              data-company-index="${companyIndex}"
            >
              ${escapeHtml(companyItem.name)}
            </button>
          `,
        )
        .join("");
      return `
        <section
          class="sector-section business-sector"
          id="${sector.id}"
          aria-labelledby="${sector.id}-title"
          data-sector-index="${sectorIndex}"
          data-active-company="0"
        >
          <div class="sector-bg" aria-hidden="true">
            <img src="${escapeHtml(sector.poster)}" alt="" loading="lazy" />
          </div>
          <div class="sector-copy sector-heading">
            <p class="sector-label">${escapeHtml(sector.name)}</p>
            <h2 id="${sector.id}-title">${escapeHtml(sector.headline)}</h2>
            <p>${escapeHtml(sector.description)}</p>
          </div>
          <div class="company-tabs" role="tablist" aria-label="${escapeHtml(sector.name)} companies">
            ${tabs}
          </div>
          <div
            class="company-showcase"
            id="${sector.id}-panel"
            role="tabpanel"
            aria-labelledby="${sector.id}-tab-0"
            tabindex="0"
          >
            <div class="company-copy" data-company-copy>
              <p class="company-count">${String(1).padStart(2, "0")} / ${String(count).padStart(2, "0")}</p>
              ${renderCompanyLogo(company)}
              <h3>${escapeHtml(company.name)}</h3>
              <p>${escapeHtml(company.description)}</p>
              <a class="outline-cta dark-outline" href="${escapeHtml(company.ctaHref)}">
                <span>${escapeHtml(company.ctaLabel)}</span>
                <span class="cta-arrow" aria-hidden="true"></span>
              </a>
            </div>
            <div class="company-media" data-company-media>
              ${renderCompanyMedia(company)}
            </div>
          </div>
          <div class="company-controls" aria-label="${escapeHtml(sector.name)} company controls">
            <button class="company-nav-button is-prev" type="button" aria-label="Previous company" data-company-prev data-sector-index="${sectorIndex}"></button>
            <span data-company-total>${String(1).padStart(2, "0")} / ${String(count).padStart(2, "0")}</span>
            <button class="company-nav-button is-next" type="button" aria-label="Next company" data-company-next data-sector-index="${sectorIndex}"></button>
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

const setActiveCompany = (sectorIndex, companyIndex) => {
  const sector = businessSectors[sectorIndex];
  const section = businessSectorsRoot?.querySelector(
    `[data-sector-index="${sectorIndex}"]`,
  );

  if (!sector || !(section instanceof HTMLElement)) {
    return;
  }

  const nextIndex =
    (companyIndex + sector.companies.length) % sector.companies.length;
  const company = sector.companies[nextIndex];
  const companyCopy = section.querySelector("[data-company-copy]");
  const companyMedia = section.querySelector("[data-company-media]");
  const panel = section.querySelector('[role="tabpanel"]');
  const total = section.querySelector("[data-company-total]");
  const countText = `${String(nextIndex + 1).padStart(2, "0")} / ${String(sector.companies.length).padStart(2, "0")}`;

  section.dataset.activeCompany = String(nextIndex);
  section.classList.add("is-changing");

  if (companyCopy) {
    companyCopy.innerHTML = `
      <p class="company-count">${countText}</p>
      ${renderCompanyLogo(company)}
      <h3>${escapeHtml(company.name)}</h3>
      <p>${escapeHtml(company.description)}</p>
      <a class="outline-cta dark-outline" href="${escapeHtml(company.ctaHref)}">
        <span>${escapeHtml(company.ctaLabel)}</span>
        <span class="cta-arrow" aria-hidden="true"></span>
      </a>
    `;
  }

  if (companyMedia) {
    companyMedia.innerHTML = renderCompanyMedia(company);
    playCompanyMediaVideos(companyMedia);
  }

  section.querySelectorAll("[data-company-index]").forEach((tab) => {
    const isActive = Number(tab.dataset.companyIndex) === nextIndex;
    tab.classList.toggle("is-active", isActive);
    tab.setAttribute("aria-selected", String(isActive));
    tab.setAttribute("tabindex", isActive ? "0" : "-1");
  });

  if (panel) {
    panel.setAttribute("aria-labelledby", `${sector.id}-tab-${nextIndex}`);
  }

  if (total) {
    total.textContent = countText;
  }

  window.setTimeout(() => section.classList.remove("is-changing"), 180);
};

renderBusinessSectors();
playCompanyMediaVideos(businessSectorsRoot);

businessSectorsRoot?.addEventListener("click", (event) => {
  const target = event.target;

  if (!(target instanceof HTMLElement)) {
    return;
  }

  const tab = target.closest("[data-company-index]");
  const previous = target.closest("[data-company-prev]");
  const next = target.closest("[data-company-next]");

  if (tab instanceof HTMLElement) {
    setActiveCompany(
      Number(tab.dataset.sectorIndex),
      Number(tab.dataset.companyIndex),
    );
    tab.focus();
    return;
  }

  const control = previous || next;

  if (control instanceof HTMLElement) {
    const sectorIndex = Number(control.dataset.sectorIndex);
    const section = businessSectorsRoot.querySelector(
      `[data-sector-index="${sectorIndex}"]`,
    );
    const currentIndex = Number(section?.dataset.activeCompany || 0);
    setActiveCompany(sectorIndex, currentIndex + (next ? 1 : -1));
  }
});

businessSectorsRoot?.addEventListener("keydown", (event) => {
  const target = event.target;

  if (
    !(target instanceof HTMLElement) ||
    !target.matches("[data-company-index]")
  ) {
    return;
  }

  if (!["ArrowLeft", "ArrowRight", "Home", "End"].includes(event.key)) {
    return;
  }

  event.preventDefault();

  const sectorIndex = Number(target.dataset.sectorIndex);
  const currentIndex = Number(target.dataset.companyIndex);
  const lastIndex = businessSectors[sectorIndex].companies.length - 1;
  const nextIndex =
    event.key === "Home"
      ? 0
      : event.key === "End"
        ? lastIndex
        : currentIndex + (event.key === "ArrowRight" ? 1 : -1);

  setActiveCompany(sectorIndex, nextIndex);
  businessSectorsRoot
    .querySelector(
      `[data-sector-index="${sectorIndex}"] [data-company-index="${(nextIndex + lastIndex + 1) % (lastIndex + 1)}"]`,
    )
    ?.focus();
});

if (prefersReducedMotion) {
  document.querySelectorAll("video").forEach((video) => {
    video.removeAttribute("autoplay");
    video.pause();
  });
}
