const body = document.querySelector("body");
const highlight = document.querySelectorAll("a");
const span = document.createElement("span");
span.classList.add("highlight");
body.appendChild(span);
// 可以直接這樣寫document.body.appendChild(highlight); 就不用 querySelector body

function getHighlight(link) {
  span.style.width = `${link.offsetWidth}px`;
  span.style.height = `${link.offsetHeight}px`;

  if (link.offsetParent !== span.offsetParent) {
    const linkParentOffsetTop = link.offsetParent.offsetTop;
    const linkParentOffsetLeft = link.offsetParent.offsetLeft;
    span.style.top = `${linkParentOffsetTop + link.offsetTop}px`;
    span.style.left = `${linkParentOffsetLeft + link.offsetLeft}px`;
  } else {
    span.style.top = `${link.offsetTop}px`;
    span.style.left = `${link.offsetLeft}px`;
  }
}

highlight.forEach((link) => {
  link.addEventListener("mouseenter", () => {
    getHighlight(link);
  });
});
