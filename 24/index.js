const nav = document.querySelector("#main");
const logo = document.querySelector(".logo");
const threshold = 0; // 閥值，只要nav小於這個值，就會一直在top=0位置

function fixNav() {
  let rect = nav.getBoundingClientRect();
  if (rect.top <= threshold) {
    nav.style.position = "sticky";
    nav.style.top = "0";
    logo.style.maxWidth = "initial";
  } else {
    nav.style.position = "static"; // 恢復原始位置
    logo.style.maxWidth = "0";
  }
}

document.addEventListener("scroll", fixNav);
