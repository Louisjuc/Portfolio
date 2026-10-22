/**
 * Registers click handlers on all `.tablinks` buttons so that each one
 * opens the tab referenced by its `data-project` attribute.
 * @returns {void}
 */
export function initTabs() {
  document.querySelectorAll(".tablinks").forEach((btn) => {
    btn.addEventListener("click", (evt) => openCity(evt, btn.dataset.project));
  });
}

/**
 * Shows the tab with the given id and marks the clicked button as active.
 * All other tabs and buttons are deactivated.
 * @param {MouseEvent} evt - Click event of the tab button.
 * @param {string} cityName - Id of the `.tabcontent` element to show.
 * @returns {void}
 */
function openCity(evt, cityName) {
  // Hide all elements with class="tabcontent" and deactivate all tablinks
  document
    .querySelectorAll(".tabcontent, .tablinks")
    .forEach((el) => el.classList.remove("active"));

  // Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById(cityName).classList.add("active");
  evt.currentTarget.classList.add("active");
}
