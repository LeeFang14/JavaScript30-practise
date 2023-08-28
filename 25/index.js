const divs = document.querySelectorAll("div");
// const button = document.querySelector("button");

function logText(e) {
  e.stopPropagation(); // 停止冒泡
  console.log(this.classList.value);
  // console.log(this);
}

divs.forEach((div) =>
  div.addEventListener("click", logText, {
    capture: false,
    // once: true,
  })
);

// button.addEventListener(
//   "click",
//   () => {
//     console.log("Click!!!");
//   },
//   {
//     once: true,
//   }
// );
