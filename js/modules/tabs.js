export function initTabs() {
  document.querySelectorAll(".tablinks").forEach((btn) => {
    btn.addEventListener("click", (evt) => openCity(evt, btn.dataset.city));
  });
}

function openCity(evt, cityName) {
  // Hide all elements with class="tabcontent" and deactivate all tablinks
  document
    .querySelectorAll(".tabcontent, .tablinks")
    .forEach((el) => el.classList.remove("active"));

  // Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById(cityName).classList.add("active");
  evt.currentTarget.classList.add("active");
}
