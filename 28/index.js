const video = document.querySelector("video");
const speed = document.querySelector(".speed");
const speedBar = document.querySelector(".speed-bar");

function moveRate(event) {
  const percent = event.offsetY / speed.clientHeight; // 抓當前位置在父層總高的Y位置
  speedBar.style.height = `${Math.round(percent * 100)}%`; // 調整條的高度
  const min = 0.4; // 調整速率最小值
  const max = 4; // 調整速率最大值
  const playbackRate = percent * (max - min) + min; // 計算當前速度與總速度的Y位置
  speedBar.textContent = `${playbackRate.toFixed(2)}x`;
  video.playbackRate = playbackRate;
}

speed.addEventListener("mousemove", moveRate);
