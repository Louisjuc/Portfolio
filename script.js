import { initTabs } from "./js/modules/tabs.js";
import { initContactForm } from "./js/modules/contacts.js";
import { initLanguage } from "./js/translation.js";
import { initInfoSlider } from "./js/modules/infoSlider.js";

initTabs();
initContactForm();
initLanguage();
initInfoSlider();

/** @type {HTMLElement} Burger button that opens and closes the mobile navigation. */
const burgerMenu = document.getElementById("burger-menu");

/** @type {HTMLElement} Mobile navigation container. */
const mobileNav = document.getElementById("mobile-nav");

/**
 * Toggles the visibility of the mobile navigation.
 * @returns {void}
 */
function toggleMenu() {
  mobileNav.classList.toggle("mobile-nav_toggle");
}

/**
 * Closes the mobile navigation as soon as one of its links or the language button is clicked.
 * @returns {void}
 */
export function closeAfterClick() {
  mobileNav.querySelectorAll("a, #lang-toggle").forEach((link) => {
    link.addEventListener("click", () =>
      mobileNav.classList.remove("mobile-nav_toggle"),
    );
  });
}

burgerMenu.addEventListener("click", toggleMenu);
closeAfterClick();
