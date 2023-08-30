const items = document.querySelector(".items");
let lastX; // 儲存滑鼠最後按下的X座標
let scrollLeft; // 儲存容器的水平滾動位置

// 當滑鼠按下時觸發的事件處理器，開始拖曳
function dragItem(e) {
  items.classList.add("active"); // 添加 active 類別，標記拖曳狀態
  lastX = e.pageX - items.offsetLeft; // 記錄滑鼠按下時的 X 座標
  scrollLeft = items.scrollLeft; // 記錄容器的水平滾動位置
}

// 結束拖曳，移除相關監聽器和標記
function removeDragItem() {
  items.classList.remove("active"); // 移除 active 類別，標記結束拖曳
  items.removeEventListener("mousemove", moveItem); // 移除滑鼠移動事件監聽器
  items.removeEventListener("mouseup", removeDragItem); // 移除滑鼠鬆開事件監聽器
}

// 在拖曳過程中滑鼠移動時觸發的事件處理器
function moveItem(e) {
  e.preventDefault(); // 阻止滑鼠移動時的默認行為，通常是防止滾動
  const x = e.pageX - items.offsetLeft; // 計算滑鼠在容器內的相對位置
  const walk = (x - lastX) * 3; // 計算滑鼠移動的距離，並乘以倍率調整速度
  items.scrollLeft = scrollLeft - walk; // 根據滑鼠移動的距離調整容器的水平滾動位置
}

// 監聽滑鼠按下事件
items.addEventListener("mousedown", (e) => {
  dragItem(e); // 執行開始拖曳相關操作
  items.addEventListener("mousemove", moveItem); // 監聽滑鼠移動事件，以實現拖曳
  items.addEventListener("mouseup", removeDragItem); // 監聽滑鼠鬆開事件，以結束拖曳
});

// 監聽滑鼠離開容器事件，以結束拖曳
items.addEventListener("mouseleave", removeDragItem);
