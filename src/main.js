import "./styles.css";
import { getArticleBySlug, sortedNewsArticles } from "./news-data.js";

const nav = document.querySelector("[data-nav]");
const navToggle = document.querySelector("[data-nav-toggle]");
const header = document.querySelector("[data-header]");
const navDropdowns = document.querySelectorAll("[data-nav-dropdown]");
const revealItems = document.querySelectorAll("[data-reveal]");
const isInnerPage =
  document.body.classList.contains("about-page") ||
  document.body.classList.contains("business-page") ||
  document.body.classList.contains("news-page") ||
  document.body.classList.contains("governance-page") ||
  document.body.classList.contains("legal-page");

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

const setDropdownOpen = (dropdown, isOpen) => {
  dropdown.classList.toggle("is-open", isOpen);
  dropdown
    .querySelector("[data-nav-dropdown-trigger]")
    ?.setAttribute("aria-expanded", String(isOpen));
};

setNavOpen(false);
navDropdowns.forEach((dropdown) => setDropdownOpen(dropdown, false));

navToggle?.addEventListener("click", () => {
  setNavOpen(!nav?.classList.contains("is-open"));
});

nav?.addEventListener("click", (event) => {
  if (event.target instanceof HTMLAnchorElement) {
    setNavOpen(false);
    navDropdowns.forEach((dropdown) => setDropdownOpen(dropdown, false));
  }
});

navDropdowns.forEach((dropdown) => {
  const trigger = dropdown.querySelector("[data-nav-dropdown-trigger]");

  trigger?.addEventListener("click", () => {
    const isOpen = dropdown.classList.contains("is-open");
    navDropdowns.forEach((item) => setDropdownOpen(item, false));
    setDropdownOpen(dropdown, !isOpen);
  });

  trigger?.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      setDropdownOpen(dropdown, false);
    }
  });
});

document.addEventListener("click", (event) => {
  if (
    nav?.classList.contains("is-open") &&
    event.target instanceof Node &&
    !header?.contains(event.target)
  ) {
    setNavOpen(false);
  }

  if (
    event.target instanceof Node &&
    !Array.from(navDropdowns).some((dropdown) =>
      dropdown.contains(event.target),
    )
  ) {
    navDropdowns.forEach((dropdown) => setDropdownOpen(dropdown, false));
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    setNavOpen(false);
    navDropdowns.forEach((dropdown) => setDropdownOpen(dropdown, false));
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

const setupHorizontalScrollHint = (selector, frameSelector) => {
  const scrollElement = document.querySelector(selector);
  const frame = scrollElement?.closest(frameSelector);

  if (!(scrollElement instanceof HTMLElement) || !frame) {
    return;
  }

  const updateHint = () => {
    const maxScrollLeft = scrollElement.scrollWidth - scrollElement.clientWidth;
    const hasScroll = maxScrollLeft > 2;
    const canScroll = scrollElement.scrollLeft < maxScrollLeft - 2;

    frame.classList.toggle("has-scroll", hasScroll);
    frame.classList.toggle("can-scroll", hasScroll && canScroll);
  };

  updateHint();
  requestAnimationFrame(updateHint);
  scrollElement.addEventListener("scroll", updateHint, { passive: true });
  window.addEventListener("resize", updateHint);
  window.addEventListener("orientationchange", updateHint);
  window.addEventListener("pageshow", updateHint);
};

setupHorizontalScrollHint(
  "[data-home-sector-scroll]",
  ".home-sector-collage-frame",
);
setupHorizontalScrollHint("[data-home-theme-scroll]", ".home-theme-row-frame");

if (revealItems.length) {
  if (prefersReducedMotion || !("IntersectionObserver" in window)) {
    revealItems.forEach((item) => item.classList.add("is-visible"));
  } else {
    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            revealObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.18 },
    );

    revealItems.forEach((item) => revealObserver.observe(item));
  }
}

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
const aboutCompanySection = document.querySelector("[data-about-company]");

if (aboutPresidentSection && aboutMessageCard && aboutPortraitCard) {
  const aboutPresidentObserverTarget =
    aboutPresidentSection.closest(".about-president") || aboutPresidentSection;

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
      { rootMargin: "0px 0px -12% 0px", threshold: 0.05 },
    );

    aboutObserver.observe(aboutPresidentObserverTarget);
  }
}

if (aboutCompanySection) {
  if (prefersReducedMotion || !("IntersectionObserver" in window)) {
    aboutCompanySection.classList.add("is-visible");
  } else {
    const aboutCompanyObserver = new IntersectionObserver(
      (entries, observer) => {
        if (!entries.some((entry) => entry.isIntersecting)) {
          return;
        }

        aboutCompanySection.classList.add("is-visible");
        observer.disconnect();
      },
      { threshold: 0.25 },
    );

    aboutCompanyObserver.observe(aboutCompanySection);
  }
}

const globalPresenceSection = document.querySelector("[data-global-presence]");
const globalPresenceStats = document.querySelector(
  "[data-global-presence-stats]",
);
const presenceCounters = document.querySelectorAll("[data-presence-counter]");
const presenceGlobe = document.querySelector("[data-presence-globe]");
const presenceGlobeCanvas = presenceGlobe?.querySelector("canvas");
const presenceNumberFormatter = new Intl.NumberFormat("en-US");

const formatPresenceValue = (value, counter) => {
  const prefix = counter.dataset.counterPrefix || "";
  const suffix = counter.dataset.counterSuffix || "";

  return `${prefix}${presenceNumberFormatter.format(value)}${suffix}`;
};

const setPresenceCountersToFinal = () => {
  presenceCounters.forEach((counter) => {
    const target = Number(counter.dataset.counterTarget);

    if (Number.isFinite(target)) {
      counter.textContent = formatPresenceValue(target, counter);
    }
  });
};

const resetPresenceCounters = () => {
  presenceCounters.forEach((counter) => {
    counter.textContent = formatPresenceValue(0, counter);
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

      counter.textContent = formatPresenceValue(value, counter);

      if (progress < 1) {
        requestAnimationFrame(updateCounter);
      } else {
        counter.textContent = formatPresenceValue(target, counter);
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

if (globalPresenceSection) {
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

const setupPresenceGlobe = () => {
  if (!(presenceGlobeCanvas instanceof HTMLCanvasElement)) {
    return;
  }

  const context = presenceGlobeCanvas.getContext("2d");

  if (!context) {
    return;
  }

  const operationalMarkers = [
    { lat: 13.75, lon: 100.5 },
    { lat: 1.35, lon: 103.82 },
    { lat: 25.2, lon: 55.27 },
    { lat: 51.5, lon: -0.12 },
    { lat: 40.71, lon: -74.01 },
  ];
  const partnershipMarkers = [
    { lat: 35.68, lon: 139.69 },
    { lat: -33.86, lon: 151.21 },
    { lat: -1.29, lon: 36.82 },
    { lat: 48.85, lon: 2.35 },
    { lat: -23.55, lon: -46.63 },
  ];

  const resizeCanvas = () => {
    const bounds = presenceGlobeCanvas.getBoundingClientRect();
    const size = Math.max(280, Math.round(bounds.width));
    const ratio = Math.min(window.devicePixelRatio || 1, 2);

    presenceGlobeCanvas.width = Math.round(size * ratio);
    presenceGlobeCanvas.height = Math.round(size * ratio);
    context.setTransform(ratio, 0, 0, ratio, 0, 0);

    return size;
  };

  const project = (lat, lon, rotation, radius, center) => {
    const latitude = (lat * Math.PI) / 180;
    const longitude = ((lon + rotation) * Math.PI) / 180;
    const x = center + radius * Math.cos(latitude) * Math.sin(longitude);
    const y = center - radius * Math.sin(latitude);
    const z = Math.cos(latitude) * Math.cos(longitude);

    return { x, y, z };
  };

  const drawGreatCircle = (start, end, rotation, radius, center) => {
    context.beginPath();

    let hasStarted = false;
    for (let index = 0; index <= 48; index += 1) {
      const progress = index / 48;
      const lat =
        start.lat +
        (end.lat - start.lat) * progress +
        Math.sin(progress * Math.PI) * 16;
      const lon = start.lon + (end.lon - start.lon) * progress;
      const point = project(lat, lon, rotation, radius, center);

      if (point.z < -0.15) {
        hasStarted = false;
        continue;
      }

      if (!hasStarted) {
        context.moveTo(point.x, point.y);
        hasStarted = true;
      } else {
        context.lineTo(point.x, point.y);
      }
    }

    context.stroke();
  };

  let size = resizeCanvas();
  let frameId = 0;
  let startedAt = performance.now();

  const draw = (timestamp) => {
    const elapsed = prefersReducedMotion ? 0 : timestamp - startedAt;
    const rotation = elapsed * 0.006;
    const center = size / 2;
    const radius = size * 0.38;

    context.clearRect(0, 0, size, size);

    const glow = context.createRadialGradient(
      center,
      center,
      radius * 0.12,
      center,
      center,
      radius * 1.25,
    );
    glow.addColorStop(0, "rgba(78, 209, 219, 0.28)");
    glow.addColorStop(0.62, "rgba(44, 130, 196, 0.16)");
    glow.addColorStop(1, "rgba(44, 130, 196, 0)");
    context.fillStyle = glow;
    context.beginPath();
    context.arc(center, center, radius * 1.26, 0, Math.PI * 2);
    context.fill();

    const ocean = context.createRadialGradient(
      center - radius * 0.36,
      center - radius * 0.38,
      radius * 0.08,
      center,
      center,
      radius,
    );
    ocean.addColorStop(0, "#173d63");
    ocean.addColorStop(0.48, "#0d2745");
    ocean.addColorStop(1, "#061323");
    context.fillStyle = ocean;
    context.beginPath();
    context.arc(center, center, radius, 0, Math.PI * 2);
    context.fill();

    context.save();
    context.beginPath();
    context.arc(center, center, radius, 0, Math.PI * 2);
    context.clip();

    context.strokeStyle = "rgba(100, 211, 218, 0.25)";
    context.lineWidth = 1;

    for (let lat = -60; lat <= 60; lat += 20) {
      context.beginPath();
      for (let lon = -180; lon <= 180; lon += 4) {
        const point = project(lat, lon, rotation, radius, center);
        if (point.z < 0) {
          continue;
        }

        if (lon === -180) {
          context.moveTo(point.x, point.y);
        } else {
          context.lineTo(point.x, point.y);
        }
      }
      context.stroke();
    }

    for (let lon = -180; lon < 180; lon += 30) {
      context.beginPath();
      let hasStarted = false;
      for (let lat = -84; lat <= 84; lat += 4) {
        const point = project(lat, lon, rotation, radius, center);
        if (point.z < 0) {
          hasStarted = false;
          continue;
        }

        if (!hasStarted) {
          context.moveTo(point.x, point.y);
          hasStarted = true;
        } else {
          context.lineTo(point.x, point.y);
        }
      }
      context.stroke();
    }

    context.strokeStyle = "rgba(216, 164, 73, 0.34)";
    context.lineWidth = 1.35;
    partnershipMarkers.forEach((marker, index) => {
      drawGreatCircle(
        operationalMarkers[index % operationalMarkers.length],
        marker,
        rotation,
        radius,
        center,
      );
    });

    [...operationalMarkers, ...partnershipMarkers].forEach((marker, index) => {
      const point = project(marker.lat, marker.lon, rotation, radius, center);
      if (point.z < 0) {
        return;
      }

      const isOperational = index < operationalMarkers.length;
      const markerRadius = isOperational ? 4.2 : 3.5;

      context.fillStyle = isOperational ? "#48d2ca" : "#d8a449";
      context.shadowColor = isOperational
        ? "rgba(72, 210, 202, 0.85)"
        : "rgba(216, 164, 73, 0.85)";
      context.shadowBlur = 14;
      context.beginPath();
      context.arc(point.x, point.y, markerRadius, 0, Math.PI * 2);
      context.fill();
      context.shadowBlur = 0;
    });

    context.restore();

    context.strokeStyle = "rgba(142, 219, 230, 0.38)";
    context.lineWidth = 1.2;
    context.beginPath();
    context.arc(center, center, radius, 0, Math.PI * 2);
    context.stroke();

    if (!prefersReducedMotion) {
      frameId = requestAnimationFrame(draw);
    }
  };

  window.addEventListener("resize", () => {
    size = resizeCanvas();
  });

  draw(startedAt);

  document.addEventListener("visibilitychange", () => {
    if (document.hidden) {
      cancelAnimationFrame(frameId);
    } else if (!prefersReducedMotion) {
      startedAt = performance.now();
      frameId = requestAnimationFrame(draw);
    }
  });
};

setupPresenceGlobe();

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

const aboutMetricsSection = document.querySelector("[data-about-metrics]");
const aboutMetricsObserverTarget =
  document.querySelector(".about-metrics-grid") || aboutMetricsSection;
const aboutMetricCounters = document.querySelectorAll(
  "[data-about-metric-counter]",
);
const metricNumberFormatter = new Intl.NumberFormat("en-US");

const formatAboutMetricValue = (value, suffix = "") =>
  `${metricNumberFormatter.format(value)}${suffix}`;

const setAboutMetricCountersToFinal = () => {
  aboutMetricCounters.forEach((counter) => {
    const target = Number(counter.dataset.counterTarget);

    if (!Number.isFinite(target)) {
      return;
    }

    counter.textContent = formatAboutMetricValue(
      target,
      counter.dataset.counterSuffix || "",
    );
  });
};

const resetAboutMetricCounters = () => {
  aboutMetricCounters.forEach((counter) => {
    counter.textContent = formatAboutMetricValue(
      0,
      counter.dataset.counterSuffix || "",
    );
  });
};

const animateAboutMetricCounters = () => {
  aboutMetricCounters.forEach((counter) => {
    const target = Number(counter.dataset.counterTarget);
    const duration = Number(counter.dataset.counterDuration);
    const suffix = counter.dataset.counterSuffix || "";

    if (!Number.isFinite(target) || !Number.isFinite(duration)) {
      return;
    }

    const startedAt = performance.now();
    const easeOutCubic = (progress) => 1 - Math.pow(1 - progress, 3);

    const updateCounter = (timestamp) => {
      const progress = Math.min((timestamp - startedAt) / duration, 1);
      const value = Math.round(target * easeOutCubic(progress));

      counter.textContent = formatAboutMetricValue(value, suffix);

      if (progress < 1) {
        requestAnimationFrame(updateCounter);
      } else {
        counter.textContent = formatAboutMetricValue(target, suffix);
      }
    };

    requestAnimationFrame(updateCounter);
  });
};

let aboutMetricCountersStarted = false;

const startAboutMetricCounters = () => {
  if (aboutMetricCountersStarted) {
    return;
  }

  aboutMetricCountersStarted = true;

  if (prefersReducedMotion) {
    setAboutMetricCountersToFinal();
  } else {
    animateAboutMetricCounters();
  }
};

if (aboutMetricCounters.length) {
  if (!prefersReducedMotion && "IntersectionObserver" in window) {
    resetAboutMetricCounters();
  }

  if (!aboutMetricsObserverTarget || !("IntersectionObserver" in window)) {
    setAboutMetricCountersToFinal();
  } else {
    const isMetricTargetNearViewport = () => {
      const rect = aboutMetricsObserverTarget.getBoundingClientRect();
      const viewportHeight =
        window.innerHeight || document.documentElement.clientHeight;

      return rect.top < viewportHeight * 0.9 && rect.bottom > 0;
    };

    const aboutMetricObserver = new IntersectionObserver(
      (entries, observer) => {
        if (!entries.some((entry) => entry.isIntersecting)) {
          return;
        }

        startAboutMetricCounters();
        observer.disconnect();
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0.2 },
    );

    aboutMetricObserver.observe(aboutMetricsObserverTarget);

    requestAnimationFrame(() => {
      if (isMetricTargetNearViewport()) {
        startAboutMetricCounters();
        aboutMetricObserver.disconnect();
      }
    });
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
