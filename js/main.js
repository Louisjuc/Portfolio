import { initTabs } from "./modules/tabs.js";

initTabs();

const burgerMenu = document.getElementById("burger-menu");
const mobileNav = document.getElementById("mobile-nav");

function toggleMenu() {
  mobileNav.classList.toggle("mobile-nav_toggle");
  closeAfterClick();
}

function closeAfterClick() {
  mobileNav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () =>
      mobileNav.classList.remove("mobile-nav_toggle"),
    );
  });
}

burgerMenu.addEventListener("click", toggleMenu);
