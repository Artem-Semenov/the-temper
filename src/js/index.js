import mobileNav from "./modules/mobile-nav.js";
import { Forms } from "./modules/Forms.js";
import { collectionsTabs } from "./modules/collectionsTabs.js";
import { faqAccordion } from "./modules/faq.js";
import { SmoothAnchorScroll } from "./modules/smoothSCroll.js";
import { objectScenes } from "./modules/3dScenes.js";
import { heroWords } from "./modules/heroWords.js";

document.addEventListener("DOMContentLoaded", (e) => {
  mobileNav();
  collectionsTabs();
  faqAccordion();
  objectScenes();
  heroWords();

  const smoothAnchorScroll = new SmoothAnchorScroll();
  smoothAnchorScroll.init();
  const forms = new Forms();

  const galleryContainer =
    document.querySelector(".wantHero__gallery") ||
    document.querySelector(".startHero__gallery");
  const ishorizontalOrder = Boolean(
    document.querySelector(".wantHero__gallery")
  );
  if (galleryContainer) {
    import("./gallery.js").then((module) => {
      const gallery = module.default;
      gallery(galleryContainer, ishorizontalOrder);
    });
  }
});
