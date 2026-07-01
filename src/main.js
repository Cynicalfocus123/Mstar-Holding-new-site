import "./styles.css";
import { getArticleBySlug, sortedNewsArticles } from "./news-data.js";

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

const svgNamespace = "http://www.w3.org/2000/svg";

const mapProject = (latitude, longitude) => ({
  x: ((longitude + 180) / 360) * 1000,
  y: ((90 - latitude) / 180) * 520,
});

const polygonContainsCoordinate = ([longitude, latitude], polygon) => {
  let isInside = false;

  for (let i = 0, j = polygon.length - 1; i < polygon.length; j = i++) {
    const [xi, yi] = polygon[i];
    const [xj, yj] = polygon[j];
    const crossesLatitude = yi > latitude !== yj > latitude;
    const projectedLongitude =
      ((xj - xi) * (latitude - yi)) / (yj - yi || 1) + xi;

    if (crossesLatitude && longitude < projectedLongitude) {
      isInside = !isInside;
    }
  }

  return isInside;
};

const regionContainsCoordinate = ([longitude, latitude], region) => {
  if (region.center) {
    const [centerLongitude, centerLatitude] = region.center;
    const [radiusLongitude, radiusLatitude] = region.radius;
    const normalizedLongitude = (longitude - centerLongitude) / radiusLongitude;
    const normalizedLatitude = (latitude - centerLatitude) / radiusLatitude;

    return normalizedLongitude ** 2 + normalizedLatitude ** 2 <= 1;
  }

  return polygonContainsCoordinate([longitude, latitude], region.polygon);
};

const addMapDot = (group, { x, y, r = 2.35, delay }) => {
  const dot = document.createElementNS(svgNamespace, "circle");

  dot.setAttribute("cx", x.toFixed(1));
  dot.setAttribute("cy", y.toFixed(1));
  dot.setAttribute("r", String(r));
  dot.setAttribute("aria-hidden", "true");

  if (delay !== undefined) {
    dot.style.setProperty("--map-delay", `${delay}ms`);
  }

  group.append(dot);
};

const buildGlobalPresenceMap = () => {
  if (!globalMapBase || !globalMapMarkets) {
    return;
  }

  const landMasses = [
    [
      [-168, 71],
      [-150, 72],
      [-136, 69],
      [-124, 66],
      [-114, 69],
      [-104, 63],
      [-92, 61],
      [-82, 55],
      [-64, 54],
      [-52, 48],
      [-58, 42],
      [-72, 45],
      [-80, 38],
      [-76, 30],
      [-88, 24],
      [-99, 18],
      [-110, 22],
      [-122, 32],
      [-124, 42],
      [-132, 50],
      [-146, 57],
      [-160, 61],
      [-170, 66],
    ],
    [
      [-126, 54],
      [-112, 58],
      [-100, 56],
      [-94, 50],
      [-104, 45],
      [-118, 47],
    ],
    [
      [-118, 32],
      [-104, 31],
      [-92, 26],
      [-84, 20],
      [-76, 10],
      [-82, 8],
      [-92, 16],
      [-104, 19],
      [-114, 24],
    ],
    [
      [-81, 11],
      [-70, 12],
      [-58, 7],
      [-48, -6],
      [-38, -18],
      [-45, -32],
      [-54, -45],
      [-66, -55],
      [-74, -44],
      [-70, -28],
      [-78, -14],
      [-82, 0],
    ],
    [
      [-54, 82],
      [-36, 82],
      [-20, 76],
      [-28, 66],
      [-44, 60],
      [-58, 64],
      [-64, 74],
    ],
    [
      [-11, 60],
      [0, 65],
      [15, 66],
      [30, 62],
      [42, 54],
      [34, 46],
      [18, 41],
      [4, 43],
      [-8, 49],
      [-16, 56],
    ],
    [
      [-17, 36],
      [-4, 36],
      [12, 33],
      [28, 31],
      [40, 20],
      [50, 8],
      [46, -8],
      [38, -22],
      [30, -34],
      [18, -36],
      [8, -29],
      [-2, -12],
      [-10, 5],
      [-16, 20],
    ],
    [
      [34, 34],
      [48, 34],
      [58, 30],
      [58, 18],
      [50, 14],
      [42, 20],
      [36, 28],
    ],
    [
      [42, 56],
      [60, 62],
      [86, 70],
      [116, 70],
      [142, 60],
      [166, 52],
      [174, 44],
      [154, 32],
      [136, 24],
      [122, 14],
      [112, 4],
      [98, 6],
      [90, 18],
      [76, 18],
      [66, 26],
      [54, 36],
      [44, 44],
    ],
    [
      [68, 28],
      [82, 28],
      [91, 22],
      [88, 8],
      [78, 6],
      [72, 15],
    ],
    [
      [96, 22],
      [110, 20],
      [122, 14],
      [116, 2],
      [108, -8],
      [98, 0],
    ],
    [
      [118, 8],
      [132, 6],
      [148, 1],
      [150, -8],
      [134, -12],
      [116, -8],
      [104, -3],
    ],
    [
      [138, 46],
      [146, 44],
      [146, 34],
      [136, 32],
      [132, 38],
    ],
    [
      [112, -12],
      [132, -10],
      [154, -18],
      [154, -38],
      [138, -44],
      [118, -38],
      [106, -28],
    ],
  ];

  const marketRegions = [
    { name: "Sudan", center: [30.2, 15.6], radius: [6.5, 5] },
    { name: "Nigeria", center: [8.7, 9.1], radius: [5.2, 4.4] },
    { name: "Saudi Arabia", center: [45.1, 23.9], radius: [9.4, 6.8] },
    { name: "Ukraine", center: [31, 49], radius: [7.8, 3.6] },
    { name: "United Kingdom", center: [-3.4, 55], radius: [4.8, 4.8] },
    { name: "China", center: [104.2, 35.9], radius: [17, 9.6] },
    { name: "Malaysia", center: [102, 4.2], radius: [5.8, 3.2] },
    { name: "Taiwan", center: [121, 23.7], radius: [3.2, 3.2] },
    { name: "Indonesia", center: [118, -2.4], radius: [17, 5.8] },
    { name: "Latvia", center: [24.6, 56.9], radius: [3.2, 2.4] },
    { name: "Estonia", center: [25, 58.6], radius: [3.2, 2.4] },
    { name: "Germany", center: [10.4, 51.2], radius: [4.8, 3.6] },
    { name: "France", center: [2.2, 46.2], radius: [6, 4.8] },
    { name: "Thailand", center: [101, 15.9], radius: [4.2, 5.8] },
    { name: "United States", center: [-98.6, 39.8], radius: [21, 9.8] },
    { name: "UAE", center: [54.4, 24.3], radius: [3.6, 2.8] },
    { name: "Croatia", center: [15.2, 45.1], radius: [3.4, 2.6] },
    { name: "Belgium", center: [4.5, 50.5], radius: [3, 2.4] },
    { name: "Iraq", center: [43.7, 33.2], radius: [5.2, 4] },
    { name: "Vietnam", center: [108.3, 14.1], radius: [3.8, 6] },
    { name: "India", center: [78.9, 20.6], radius: [9.8, 8.6] },
    { name: "Hong Kong", center: [114.2, 22.3], radius: [2.8, 2.4] },
    { name: "Mexico", center: [-102.5, 23.6], radius: [10, 5.8] },
    { name: "Mali", center: [-3.9, 17.6], radius: [7, 5.6] },
  ];
  const marketDotCounts = new Array(marketRegions.length).fill(0);

  for (let latitude = 74; latitude >= -46; latitude -= 2.6) {
    for (let longitude = -170; longitude <= 174; longitude += 2.6) {
      const coordinate = [longitude, latitude];
      const isLand = landMasses.some((polygon) =>
        polygonContainsCoordinate(coordinate, polygon),
      );

      if (!isLand) {
        continue;
      }

      const projectedPoint = mapProject(latitude, longitude);
      const point = {
        x: projectedPoint.x,
        y: projectedPoint.y,
      };

      addMapDot(globalMapBase, point);

      const marketRegionIndex = marketRegions.findIndex((region) =>
        regionContainsCoordinate(coordinate, region),
      );

      if (marketRegionIndex !== -1) {
        const regionDotIndex = marketDotCounts[marketRegionIndex];

        addMapDot(globalMapMarkets, {
          ...point,
          r: 2.65,
          delay: 220 + marketRegionIndex * 34 + regionDotIndex * 8,
        });
        marketDotCounts[marketRegionIndex] += 1;
      }
    }
  }
};

if (globalPresenceSection && globalMapBase && globalMapMarkets) {
  buildGlobalPresenceMap();

  if (prefersReducedMotion || !("IntersectionObserver" in window)) {
    globalPresenceSection.classList.add("is-visible");
  } else {
    const globalPresenceObserver = new IntersectionObserver(
      (entries, observer) => {
        if (!entries.some((entry) => entry.isIntersecting)) {
          return;
        }

        globalPresenceSection.classList.add("is-visible");
        observer.disconnect();
      },
      { threshold: 0.28 },
    );

    globalPresenceObserver.observe(globalPresenceSection);
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
