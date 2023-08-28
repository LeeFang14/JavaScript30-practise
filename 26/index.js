const liList = document.querySelectorAll(".cool > li");
const background = document.querySelector(".dropdownBackground");
const dropdown = document.querySelectorAll(".dropdown");

function showContext(li, index) {
  li.classList.add("trigger-enter");
  setTimeout(
    () =>
      li.classList.contains("trigger-enter") &&
      li.classList.add("trigger-enter-active"),
    150
  );
  background.classList.add("open");
  const rectA = dropdown[index].getBoundingClientRect(); // 在視窗的下拉式選單
  const rectBParent = background.parentElement.getBoundingClientRect(); // 在視窗的白色背景父層
  // dropdownBackground有absolute，所以要多扣除父層的距離。直接賦值li視窗位置會對不上(會多一段父層的top)。
  const topOffset = rectA.top - rectBParent.top;
  const leftOffset = rectA.left - rectBParent.left;
  background.style.width = `${rectA.width}px`;
  background.style.height = `${rectA.height}px`;
  background.style.top = `${topOffset}px`;
  background.style.left = `${leftOffset}px`;
}

function closeContext(li) {
  li.classList.remove("trigger-enter", "trigger-enter-active");
  background.classList.remove("open");
}

liList.forEach((li, index) => {
  li.addEventListener("mouseenter", (e) => {
    showContext(li, index);
  });
  li.addEventListener("mouseleave", (e) => {
    closeContext(li);
  });
});
