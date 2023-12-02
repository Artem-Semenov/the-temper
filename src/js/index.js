import mobileNav from "./modules/mobile-nav.js";
import { Forms } from "./modules/Forms.js";
import { collectionsTabs } from "./modules/collectionsTabs.js";
import { faqAccordion } from "./modules/faq.js";
import { SmoothAnchorScroll } from "./modules/smoothSCroll.js";
import Masonry from "masonry-layout";

import imagesLoaded from "imagesloaded";

document.addEventListener("DOMContentLoaded", (e) => {
  mobileNav();
  collectionsTabs();
  faqAccordion();

  const smoothAnchorScroll = new SmoothAnchorScroll();
  smoothAnchorScroll.init();
  const forms = new Forms();

  const wantGalelry = document.querySelector(".wantHero__gallery");
  if (wantGalelry) {
    imagesLoaded(wantGalelry, () => {
      window.msnry = new Masonry(wantGalelry, {
        itemSelector: ".wantHero__gallery-item",
        percentPosition: true,
        columnWidth: 1,
        horizontalOrder: true,
      });
    });
  }
});
