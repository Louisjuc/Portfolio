/**
 * Misst die Textbreite jeder Info und setzt sie als CSS-Variable `--w`,
 * damit der Tipp-Effekt exakt am Textende stoppt. Der Slider selbst
 * bekommt über `--slider-w` die Breite der längsten Info.
 * @returns {void}
 */
export function fitInfoSlider() {
  const slider = document.querySelector(".info-slider");
  if (!slider) return;
  let max = 0;
  slider.querySelectorAll(".info").forEach((info) => {
    const width = info.scrollWidth;
    info.style.setProperty("--w", `${width}px`);
    max = Math.max(max, width);
  });
  slider.style.setProperty("--slider-w", `${max}px`);
}

/**
 * Passt den Slider an, sobald die Webfonts geladen sind und bei jeder
 * Größenänderung des Fensters.
 * @returns {void}
 */
export function initInfoSlider() {
  document.fonts.ready.then(fitInfoSlider);
  window.addEventListener("resize", fitInfoSlider);
}
