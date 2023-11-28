import mobileNav from "./modules/mobile-nav.js";
import { Forms } from "./modules/Forms.js";
import { collectionsTabs } from "./modules/collectionsTabs.js";
import { faqAccordion } from "./modules/faq.js";
document.addEventListener("DOMContentLoaded", (e) => {
  mobileNav();
  collectionsTabs();
  faqAccordion();
  const forms = new Forms();
});
