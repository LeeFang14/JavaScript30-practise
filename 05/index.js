const panel = document.querySelectorAll(".panel");
panel.forEach((item) => {
  // item = panel
  item.addEventListener(
    "click",
    () => {
      const isOpen = item.style.flex === "5 1 0%";
      // 區塊變寬
      item.style.flex = isOpen ? "1 1 0%" : "5 1 0%";
      // 標題放大
      item.childNodes[3].style.fontSize = isOpen ? "2em" : "160px";

      // 上下副標題出現滑入，順序在點擊後寬度變寬之後。滑出消失在又點擊之後。
      const firstChild = item.querySelector(".panel p:nth-child(1)");
      const threeChild = item.querySelector(".panel p:nth-child(3)");
      firstChild.style.top = isOpen ? "-51px" : "10%";
      firstChild.style.fontSize = isOpen ? "2em" : "80px";
      threeChild.style.bottom = isOpen ? "-51px" : "10%";
      threeChild.style.fontSize = isOpen ? "2em" : "80px";
    },
    false
  );
});
