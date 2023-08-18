// 要觀察的目標元素
const images = document.querySelectorAll(".slide-in");

//
images.forEach((image) => {
  // 創建一個 Intersection Observer，observer 是用來觀察目標元素的觀察者
  const observer = new IntersectionObserver((entries) => {
    // 而 entry 是在進入狀態發生變化時提供的進入狀態資訊。
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        // 元素進入視窗中可見範圍
        // console.log("進入比率：" + entry.intersectionRatio);
        // console.log("元素位置：", entry.boundingClientRect);
        // console.log("交互區域：", entry.intersectionRect);
        // console.log("根元素位置：", entry.rootBounds);
        // 做你想要的處理
        // console.log("元素進入視窗中可見範圍，滑動到元素附近！");
        image.classList.add("active");
      } else {
        image.classList.remove("active");
      }
    });
  });
  // 開始觀察目標元素
  observer.observe(image); // 告訴觀測者，要觀測的目標。
});
