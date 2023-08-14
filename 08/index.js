// 先偵測使用者視窗，並調整到符合的全寬高
// 繪製路徑值：監聽按住滑鼠移動點 mousemove

// ref:https://developer.mozilla.org/en-US/docs/Web/API/Element/mousemove_event#examples
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
// 設定canvas寬高同視窗
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
// 設定繪製線條樣式
ctx.strokeStyle = "#BADA55";
ctx.lineJoin = "round";
ctx.lineCap = "round";
ctx.lineWidth = 100;

// 設定繪製行為、樣式初始值
let isDrawing = false;
let x = 0;
let y = 0;
let hue = 0;
let direction = true;

canvas.addEventListener("mousedown", (e) => {
  x = e.offsetX;
  y = e.offsetY;
  isDrawing = true;
});

canvas.addEventListener("mousemove", (e) => {
  if (isDrawing) {
    drawLine(ctx, x, y, e.offsetX, e.offsetY);
    x = e.offsetX;
    y = e.offsetY;
  }
});

window.addEventListener("mouseup", (e) => {
  if (isDrawing) {
    drawLine(ctx, x, y, e.offsetX, e.offsetY);
    x = 0;
    y = 0;
    isDrawing = false;
  }
});

function drawLine(context, x1, y1, x2, y2) {
  context.beginPath();
  context.moveTo(x1, y1);
  context.lineTo(x2, y2);
  context.stroke();
  context.closePath();
  // 顏色設定
  ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
  hue++;
  if (hue >= 360) {
    hue = 0;
  }
  // 設定線的寬度，並在最大與最小時迴轉
  if (ctx.lineWidth >= 100 || ctx.lineWidth <= 1) {
    direction = !direction;
  }

  if (direction) {
    ctx.lineWidth++;
  } else {
    ctx.lineWidth--;
  }
}
