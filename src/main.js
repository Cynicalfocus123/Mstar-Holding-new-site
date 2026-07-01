import "./styles.css";
import { getArticleBySlug, sortedNewsArticles } from "./news-data.js";
import { baseWorldPaths, marketCountryPaths } from "./world-map-data.js";

const nav = document.querySelector("[data-nav]");
const navToggle = document.querySelector("[data-nav-toggle]");
const header = document.querySelector("[data-header]");
const isInnerPage =
  document.body.classList.contains("about-page") ||
  document.body.classList.contains("business-page") ||
  document.body.classList.contains("news-page");

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
  header?.classList.toggle("is-scrolled", isInnerPage || window.scrollY > 24);
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

const aboutPresidentSection = document.querySelector("[data-about-president]");
const aboutMessageCard = document.querySelector("[data-about-message-card]");
const aboutPortraitCard = document.querySelector("[data-about-portrait-card]");

if (aboutPresidentSection && aboutMessageCard && aboutPortraitCard) {
  if (prefersReducedMotion || !("IntersectionObserver" in window)) {
    aboutMessageCard.classList.add("is-visible");
    aboutPortraitCard.classList.add("is-visible");
  } else {
    const aboutObserver = new IntersectionObserver(
      (entries, observer) => {
        if (!entries.some((entry) => entry.isIntersecting)) {
          return;
        }

        aboutMessageCard.classList.add("is-visible");
        aboutPortraitCard.classList.add("is-visible");
        observer.disconnect();
      },
      { threshold: 0.25 },
    );

    aboutObserver.observe(aboutPresidentSection);
  }
}

const globalPresenceSection = document.querySelector("[data-global-presence]");
const globalMapBase = document.querySelector("[data-global-map-base]");
const globalMapMarkets = document.querySelector("[data-global-map-markets]");
const globalPresenceStats = document.querySelector(
  "[data-global-presence-stats]",
);
const presenceCounters = document.querySelectorAll("[data-presence-counter]");

const svgNamespace = "http://www.w3.org/2000/svg";

const buildGlobalPresenceMap = () => {
  if (!globalMapBase || !globalMapMarkets) {
    return;
  }

  baseWorldPaths.forEach(({ id, d }) => {
    const path = document.createElementNS(svgNamespace, "path");

    path.setAttribute("class", "map-country-shape");
    path.setAttribute("data-country", id);
    path.setAttribute("d", d);
    path.setAttribute("aria-hidden", "true");
    globalMapBase.append(path);
  });

  marketCountryPaths.forEach((market, index) => {
    const group = document.createElementNS(svgNamespace, "g");

    group.setAttribute("class", `map-market-shape market-${market.id}`);
    group.setAttribute("aria-label", market.label);
    group.style.setProperty("--map-delay", `${index * 80}ms`);

    if (market.marker) {
      const marker = document.createElementNS(svgNamespace, "circle");

      marker.setAttribute("cx", String(market.marker.x));
      marker.setAttribute("cy", String(market.marker.y));
      marker.setAttribute("r", String(market.marker.r));
      group.append(marker);
    } else {
      const path = document.createElementNS(svgNamespace, "path");

      path.setAttribute("d", market.d);
      group.append(path);
    }

    globalMapMarkets.append(group);
  });
};

const setPresenceCountersToFinal = () => {
  presenceCounters.forEach((counter) => {
    counter.textContent = `${counter.dataset.counterTarget}+`;
  });
};

const resetPresenceCounters = () => {
  presenceCounters.forEach((counter) => {
    counter.textContent = "0+";
  });
};

const animatePresenceCounters = () => {
  presenceCounters.forEach((counter) => {
    const target = Number(counter.dataset.counterTarget);
    const duration = Number(counter.dataset.counterDuration);

    if (!Number.isFinite(target) || !Number.isFinite(duration)) {
      return;
    }

    const startedAt = performance.now();
    const easeOutCubic = (progress) => 1 - Math.pow(1 - progress, 3);

    const updateCounter = (timestamp) => {
      const progress = Math.min((timestamp - startedAt) / duration, 1);
      const value = Math.round(target * easeOutCubic(progress));

      counter.textContent = `${value}+`;

      if (progress < 1) {
        requestAnimationFrame(updateCounter);
      } else {
        counter.textContent = `${target}+`;
      }
    };

    requestAnimationFrame(updateCounter);
  });
};

let presenceCountersStarted = false;

const startPresenceCounters = () => {
  if (presenceCountersStarted) {
    return;
  }

  presenceCountersStarted = true;

  if (prefersReducedMotion) {
    setPresenceCountersToFinal();
  } else {
    animatePresenceCounters();
  }
};

if (globalPresenceSection && globalMapBase && globalMapMarkets) {
  buildGlobalPresenceMap();

  const revealGlobalPresence = () => {
    globalPresenceSection.classList.add("is-visible");
  };

  if (!("IntersectionObserver" in window)) {
    revealGlobalPresence();
  } else {
    const globalPresenceObserver = new IntersectionObserver(
      (entries, observer) => {
        if (!entries.some((entry) => entry.isIntersecting)) {
          return;
        }

        revealGlobalPresence();
        observer.disconnect();
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0.25 },
    );

    globalPresenceObserver.observe(globalPresenceSection);
  }
}

if (presenceCounters.length) {
  if (!prefersReducedMotion && "IntersectionObserver" in window) {
    resetPresenceCounters();
  }

  if (!globalPresenceStats || !("IntersectionObserver" in window)) {
    setPresenceCountersToFinal();
  } else {
    const globalPresenceStatsObserver = new IntersectionObserver(
      (entries, observer) => {
        if (!entries.some((entry) => entry.isIntersecting)) {
          return;
        }

        startPresenceCounters();
        observer.disconnect();
      },
      { rootMargin: "-10% 0px -20% 0px", threshold: 0.6 },
    );

    globalPresenceStatsObserver.observe(globalPresenceStats);
  }
}

const businessSectorsRoot = document.querySelector("[data-business-sectors]");
const homeNewsRoot = document.querySelector("[data-home-news-list]");
const newsGridRoot = document.querySelector("[data-news-grid]");
const newsDetailRoot = document.querySelector("[data-news-detail]");

// Company entries can optionally include `logo` and `logoAlt` when final logo
// assets are added under public/media/logos.
const businessSectors = [
  {
    name: "Real Estate",
    id: "real-estate",
    headline: "Building Enduring Value",
    description:
      "Strategic real estate development focused on long-term value, premium locations, and scalable regional growth.",
    poster: "../media/hero-poster.webp",
    companies: [
      {
        name: "Mstar Property",
        description:
          "We develop affordable family homes to large-scale luxury mansion communities, creating quality residential projects designed for modern living, long-term value, and premium locations.",
        mediaType: "video",
        mediaSrc: "../videos/business-mstar-property.mp4",
        poster: "../media/hero-poster.webp",
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
        poster: "../media/operations-poster.webp",
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
        poster: "../media/growth-poster.webp",
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
    poster: "../media/operations-poster.webp",
    companies: [
      {
        name: "Foodonlines.com",
        description: "We bring groceries to your door for less.",
        mediaType: "video",
        mediaSrc: "../videos/business-foodonlines-2.mp4",
        poster: "../media/operations-poster.webp",
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
        poster: "../media/hero-poster.webp",
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
        poster: "../media/growth-poster.webp",
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
    poster: "../media/growth-poster.webp",
    companies: [
      {
        name: "American Buying Service",
        description:
          "Buying and sourcing support for cross-border commerce, distribution needs, and international partnerships.",
        mediaType: "video",
        mediaSrc: "../videos/business-american-buying-service.mp4",
        poster: "../media/growth-poster.webp",
        ctaLabel: "View Company",
        ctaHref: "#",
        logo: "../media/logos/american-buying-service-logo.png",
        logoAlt: "American Buying Service logo",
      },
      {
        name: "ABS Fulfillment",
        description:
          "Fulfillment operations supporting trade flows, practical logistics, and scalable distribution activity.",
        mediaType: "video",
        mediaSrc: "../videos/business-abs-fulfillment.mp4",
        poster: "../media/operations-poster.webp",
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
    poster: "../media/hero-poster.webp",
    companies: [
      {
        name: "Mstar Defense",
        description:
          "Defense-focused operations supporting strategic industry partnerships, manufacturing, and technology development.",
        mediaType: "video",
        mediaSrc: "../videos/business-mstar-defense.mp4",
        poster: "../media/hero-poster.webp",
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
    poster: "../media/operations-poster.webp",
    companies: [
      {
        name: "Foodonlines.com",
        description:
          "Digital food commerce designed to support modern customer access, practical ordering, and market reach.",
        mediaType: "video",
        mediaSrc: "../videos/business-ecommerce-foodonlines.mp4",
        poster: "../media/operations-poster.webp",
        ctaLabel: "View Company",
        ctaHref: "#",
        logo: "../media/logos/foodonlines-logo.png",
        logoAlt: "Foodonlines.com logo",
      },
      {
        name: "Hizoz.com",
        description:
          "A digital platform initiative built around scalable technology, modern operations, and growth potential.",
        mediaType: "video",
        mediaSrc: "../videos/business-hizoz.mp4",
        poster: "../media/growth-poster.webp",
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
        poster: "../media/hero-poster.webp",
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
    poster: "../media/growth-poster.webp",
    companies: [
      {
        name: "Boogoo Music Festival",
        description:
          "Event-focused entertainment shaped around destination experiences, audiences, and lifestyle-driven growth.",
        mediaType: "video",
        mediaSrc: "../videos/business-boogoo.mp4",
        poster: "../media/growth-poster.webp",
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
        poster: "../media/hero-poster.webp",
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

const withPathPrefix = (path, prefix = "") => {
  if (/^(?:[a-z]+:)?\/\//i.test(path) || path.startsWith("#")) {
    return path;
  }

  return `${prefix}${path}`;
};

const renderNewsArticleCard = (article, variant, options = {}) => {
  const assetPrefix = options.assetPrefix || "";
  const cardClass = variant === "home" ? "home-news-card" : "news-article-card";
  const mediaClass =
    variant === "home" ? "home-news-card-media" : "news-article-media";
  const bodyClass =
    variant === "home" ? "home-news-card-body" : "news-article-body";
  const categoryClass =
    variant === "home" ? "home-news-pill" : "news-article-category";
  const titleClass =
    variant === "home" ? "home-news-card-title" : "news-article-title";
  const excerptClass =
    variant === "home" ? "home-news-card-excerpt" : "news-article-excerpt";
  const dateClass =
    variant === "home" ? "home-news-card-date" : "news-article-date";
  const sourceClass =
    variant === "home" ? "home-news-card-source" : "news-article-source";
  const metaClass =
    variant === "home" ? "home-news-card-meta" : "news-article-meta";
  const arrowClass =
    variant === "home" ? "home-news-card-arrow" : "news-article-arrow";
  const placeholderLabel =
    variant === "news" && article.isPlaceholder
      ? '<span class="news-placeholder-label">Placeholder article</span>'
      : "";
  const sourceLabel = article.source
    ? `<span class="${sourceClass}">${escapeHtml(article.source)}</span>`
    : "";
  const cardContent = `
      <span class="${mediaClass}">
        <img
          src="${escapeHtml(withPathPrefix(article.image, assetPrefix))}"
          alt=""
          loading="lazy"
          decoding="async"
        />
      </span>
      <span class="${bodyClass}">
        <span class="${categoryClass}">${escapeHtml(article.category)}</span>
        <span class="${titleClass}">${escapeHtml(article.title)}</span>
        <span class="${excerptClass}">${escapeHtml(article.excerpt)}</span>
        <span class="${metaClass}">
          ${sourceLabel}
          <span class="${dateClass}">${escapeHtml(article.date)}</span>
          ${placeholderLabel}
          <span class="${arrowClass}" aria-hidden="true"></span>
        </span>
      </span>
  `;

  if (!article.url) {
    return `<article class="${cardClass}">${cardContent}</article>`;
  }

  return `
    <a
      class="${cardClass}"
      href="${escapeHtml(article.url)}"
      target="_blank"
      rel="noopener noreferrer"
    >
      ${cardContent}
    </a>
  `;
};

const renderNewsArticles = () => {
  if (homeNewsRoot) {
    homeNewsRoot.innerHTML = sortedNewsArticles
      .slice(0, 4)
      .map((article) =>
        renderNewsArticleCard(article, "home", {
          assetPrefix: homeNewsRoot.dataset.newsAssetPrefix || "",
        }),
      )
      .join("");
  }

  if (newsGridRoot) {
    newsGridRoot.innerHTML = sortedNewsArticles
      .map((article) =>
        renderNewsArticleCard(article, "news", {
          assetPrefix: newsGridRoot.dataset.newsAssetPrefix || "",
        }),
      )
      .join("");
  }
};

const renderNewsDetail = () => {
  if (!newsDetailRoot) {
    return;
  }

  const article = getArticleBySlug(newsDetailRoot.dataset.newsDetail || "");
  const assetPrefix = newsDetailRoot.dataset.newsAssetPrefix || "";
  const newsHref = newsDetailRoot.dataset.newsIndexHref || "../";

  if (!article) {
    newsDetailRoot.innerHTML = `
      <section class="news-detail-page">
        <a class="news-detail-back" href="${escapeHtml(newsHref)}">Back to News and Media</a>
        <h1 class="news-detail-title">Article not found</h1>
      </section>
    `;
    return;
  }

  const originalLink = article.url
    ? `
      <a
        class="news-detail-original"
        href="${escapeHtml(article.url)}"
        target="_blank"
        rel="noopener noreferrer"
      >
        <span>Read original article</span>
        <span class="cta-arrow" aria-hidden="true"></span>
      </a>
    `
    : "";

  const bodySections = article.body
    .map(
      (section) => `
        <section class="news-detail-body-section">
          <h2>${escapeHtml(section.heading)}</h2>
          <p>${escapeHtml(section.text)}</p>
        </section>
      `,
    )
    .join("");

  newsDetailRoot.innerHTML = `
    <article class="news-detail-page">
      <a class="news-detail-back" href="${escapeHtml(newsHref)}">Back to News and Media</a>
      <header class="news-detail-hero">
        <div class="news-detail-copy">
          <span class="news-detail-category">${escapeHtml(article.category)}</span>
          <h1 class="news-detail-title">${escapeHtml(article.title)}</h1>
          <p class="news-detail-excerpt">${escapeHtml(article.excerpt)}</p>
          <div class="news-detail-meta">
            <span>${escapeHtml(article.source)}</span>
            <span>${escapeHtml(article.date)}</span>
          </div>
          ${originalLink}
        </div>
        <figure class="news-detail-media">
          <img
            src="${escapeHtml(withPathPrefix(article.image, assetPrefix))}"
            alt="${escapeHtml(article.title)}"
            loading="eager"
          />
        </figure>
      </header>
      <div class="news-detail-body">
        ${bodySections}
      </div>
    </article>
  `;
};

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
        preload="none"
        poster="${escapeHtml(poster)}"
        data-src="${escapeHtml(company.mediaSrc)}"
        aria-label="${escapeHtml(label)}"
      >
      </video>
    `;
  }

  return `<img src="${escapeHtml(company.mediaSrc)}" alt="${escapeHtml(label)}" loading="lazy" decoding="async" />`;
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
      decoding="async"
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

const loadCompanyMediaVideo = (video) => {
  if (!(video instanceof HTMLVideoElement) || video.dataset.loaded === "true") {
    return;
  }

  const src = video.dataset.src;

  if (!src) {
    return;
  }

  const source = document.createElement("source");
  source.src = src;
  source.type = "video/mp4";
  video.append(source);
  video.dataset.loaded = "true";
  video.load();
};

const playCompanyMediaVideo = (video) => {
  if (!(video instanceof HTMLVideoElement) || prefersReducedMotion) {
    return;
  }

  loadCompanyMediaVideo(video);

  const playVideo = () => {
    void video.play().catch(() => {});
  };

  playVideo();
  requestAnimationFrame(playVideo);
  window.setTimeout(playVideo, 250);
};

const lazyLoadCompanyMediaVideos = (root = document) => {
  if (!root) {
    return;
  }

  const videos = Array.from(root.querySelectorAll(".company-media-video"));

  if (!videos.length) {
    return;
  }

  if (!("IntersectionObserver" in window)) {
    videos.forEach(playCompanyMediaVideo);
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          playCompanyMediaVideo(entry.target);
          observer.unobserve(entry.target);
        }
      });
    },
    { rootMargin: "450px 0px", threshold: 0.01 },
  );

  videos.forEach((video) => observer.observe(video));
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
            <img
              src="${escapeHtml(sector.poster)}"
              alt=""
              loading="lazy"
              decoding="async"
            />
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

renderNewsArticles();
renderNewsDetail();
renderBusinessSectors();
lazyLoadCompanyMediaVideos(businessSectorsRoot);

if (prefersReducedMotion) {
  document.querySelectorAll("video").forEach((video) => {
    video.removeAttribute("autoplay");
    video.pause();
  });
}
