import mobileNav from "./modules/mobile-nav.js";
import { Forms } from "./modules/Forms.js";
import { collectionsTabs } from "./modules/collectionsTabs.js";
document.addEventListener("DOMContentLoaded", (e) => {
  mobileNav();
  collectionsTabs();
  const forms = new Forms();
});
