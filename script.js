/* ====================
      SWATCHES
==================== */

let swatches = document.querySelectorAll('.swatch');

/* COLORING SWATCHES BASED ON INNERTEXT */
swatches.forEach((swatch) => {
  backgroundColor(swatch)
})

function backgroundColor(element) {
  let colorText = element.innerText;
  return element.style.backgroundColor = colorText;
}

/* ENABLING PALETTE INTERACTION WITH PAINTBRUSH */
swatches.forEach( (swatch) => {
  swatch.addEventListener('click', pickUpColor);
})

/* paintBrush will hold the current color */
var paintBrush;

/* pickUpColor changes the color of paintBrush */
function pickUpColor (event) {
  paintBrush = event.target.innerText;
}

/* ====================
        PIXELS
==================== */

let pixels = document.querySelectorAll('.pixel');

/* LISTENING FOR THE PAINTBRUSH */
pixels.forEach((pixel) => {
  pixel.addEventListener('click', changeColor);
})

/* changeColor colors the pixel based on the current color of paintBrush */
function changeColor(event) {
  event.target.style.backgroundColor = paintBrush;

}
