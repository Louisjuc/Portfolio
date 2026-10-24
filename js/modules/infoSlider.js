/**
 * Measures the text width of each info and sets it as the CSS variable `--w`,
 * so the typing effect stops exactly at the end of the text. The slider
 * itself gets the width of the longest info via `--slider-w`. If the longest
 * info is wider than the available space, the font size is scaled down so
 * the text fits without being cut off.
 * @returns {void}
 */
export function fitInfoSlider() {
  const slider = document.querySelector(".info-slider");
  if (!slider) return;
  slider.style.fontSize = "";
  let max = measureInfos(slider);
  const available = getContentWidth(slider.parentElement);
  if (max > available) {
    const fontSize = parseFloat(getComputedStyle(slider).fontSize);
    slider.style.fontSize = `${(fontSize * available) / max}px`;
    max = measureInfos(slider);
  }
  slider.style.setProperty("--slider-w", `${max}px`);
}

/**
 * Sets `--w` on every info to its text width.
 * @param {HTMLElement} slider - The `.info-slider` element.
 * @returns {number} The width of the longest info in px.
 */
function measureInfos(slider) {
  let max = 0;
  slider.querySelectorAll(".info").forEach((info) => {
    const width = info.scrollWidth;
    info.style.setProperty("--w", `${width}px`);
    max = Math.max(max, width);
  });
  return max;
}

/**
 * Returns the inner width of an element without its horizontal padding.
 * @param {HTMLElement} element - The element to measure.
 * @returns {number} The content width in px.
 */
function getContentWidth(element) {
  const style = getComputedStyle(element);
  return (
    element.clientWidth -
    parseFloat(style.paddingLeft) -
    parseFloat(style.paddingRight)
  );
}

/**
 * Fits the slider once the web fonts have loaded and again whenever
 * the window is resized.
 * @returns {void}
 */
export function initInfoSlider() {
  document.fonts.ready.then(fitInfoSlider);
  window.addEventListener("resize", fitInfoSlider);
}
