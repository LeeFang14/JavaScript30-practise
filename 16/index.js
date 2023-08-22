const h1 = document.querySelector("h1");
// const arr = [h1.clientHeight, h1.offsetTop, h1.clientWidth, h1.offsetLeft];
// const elementCenterY = h1.offsetTop + h1.clientHeight / 2;
// const elementCenterX = h1.offsetLeft + h1.clientWidth / 2;
// console.table(arr);

function moveShadow(e) {
  const elementCenterX = e.clientX - (h1.offsetLeft + h1.clientWidth / 2);
  const elementCenterY = e.clientY - (h1.offsetTop + h1.clientHeight / 2);
  h1.style.textShadow = `
  rgba(255, 0, 255, 0.7) ${elementCenterX}px ${elementCenterY}px 0px,
  rgba(0, 255, 255, 0.7) ${elementCenterX * -1}px ${elementCenterY}px 0px,
  rgba(0, 255, 0, 0.7) ${elementCenterY}px ${elementCenterX * -1}px 0px,
  rgba(0, 0, 255, 0.7) ${elementCenterY * -1}px ${elementCenterX}px 0px`;
}

window.addEventListener("mousemove", moveShadow);

// text-shadow: 偏移量最大值 250
// rgba(255, 0, 255, 0.7) 250px 8px 0px,
// rgba(0, 255, 255, 0.7) -250px 8px 0px,
// rgba(0, 255, 0, 0.7) 8px -250px 0px,
// rgba(0, 0, 255, 0.7) -8px 250px 0px;
