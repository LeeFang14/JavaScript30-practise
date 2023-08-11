const lightHeight = document.querySelector(".light-height");
const imageBox = document.querySelector(".image-box");

const borderWidth = document.querySelector(".spacing-box");
borderWidth.addEventListener("input", controlBorderWidth);
function controlBorderWidth(event) {
  const inputWidth = event.target.value;
  imageBox.style.borderWidth = `${inputWidth}px`;
}

const blur = document.querySelector(".blur-box");
blur.addEventListener("input", controlBlur);
function controlBlur(event) {
  const blurValue = event.target.value;
  console.log(event);
  imageBox.style.filter = `blur(${blurValue}px)`;
}

const colorPicker = document.querySelector(".color-box");
colorPicker.addEventListener("input", pickColor);
function pickColor(event) {
  const inputColor = event.target.value;
  lightHeight.style.color = inputColor;
  imageBox.style.borderColor = inputColor;
}
