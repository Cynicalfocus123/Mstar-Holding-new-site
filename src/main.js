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

if (prefersReducedMotion) {
  document.querySelectorAll("video").forEach((video) => {
    video.removeAttribute("autoplay");
    video.pause();
  });
}
