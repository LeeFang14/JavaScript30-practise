const video = document.querySelector(".player__video"); //整個影片視窗
const playButton = document.querySelector(".player__button"); //播放、暫停按鈕
const volume = document.querySelector('input[name="volume"]'); //音量鍵
const playbackRate = document.querySelector('input[name="playbackRate"]'); //播放速度鍵
// 作者這樣寫就選的到，一樣的buttons
// const skipButtons = player.querySelectorAll("[data-skip]");
const skipButtons = document.querySelectorAll(
  "button[data-skip]:not([data-skip=''])"
); // 前進、後退鍵，選取有data-skip且值不為空

const progressBar = document.querySelector(".progress");
const currentTimeBar = document.querySelector(".progress__filled");

// 切換播放狀態，點擊影片本身或是播放按鈕都會觸發點擊事件
video.addEventListener("click", togglePlay);
playButton.addEventListener("click", togglePlay);

function togglePlay() {
  if (video.paused) {
    video.play();
    playButton.textContent = "►"; // 播放圖示
  } else {
    video.pause();
    playButton.textContent = "❚ ❚"; // 暫停圖示
  }
}

// 設置影片音量
volume.addEventListener("input", setVolume);
function setVolume(e) {
  video.volume = e.target.value;
}

// 設置影片音量
playbackRate.addEventListener("input", setPlaybackRate);
function setPlaybackRate(e) {
  video.playbackRate = e.target.value;
}

skipButtons.forEach((skipButton, index) => {
  skipButton.addEventListener("click", (e) => {
    video.pause();
    video.addEventListener("play", function onPlay() {
      video.currentTime += parseFloat(skipButton.dataset.skip);
      video.removeEventListener("play", onPlay);
    });
    video.play();
  });
});

// 播放時會抓到當前的時間
video.addEventListener("timeupdate", updateTime);
function updateTime(e) {
  const currentTime = video.currentTime; // 抓到當前時間
  const duration = video.duration; // 抓取總時間
  const percentage = (currentTime / duration) * 100; // 以當前除以總時間，賺換成百分比
  currentTimeBar.style.flexBasis = percentage + "%"; // 將百分比賦值給時間條
}

// 點擊到的地方要對應到總時間的位置並調整當前時間進度條
// progressBar.addEventListener("click", moveCurrentTime);
// function moveCurrentTime(e) {
//   video.fastSeek(e); // 如何對應到總時間的秒數
// }

progressBar.addEventListener("click", moveCurrentTime);
progressBar.addEventListener("mousemove", moveCurrentTime);
function moveCurrentTime(e) {
  const progressBarRect = progressBar.getBoundingClientRect();
  console.log("1. progressBarRect", progressBarRect);

  const clickX = e.clientX - progressBarRect.left;
  // e.clientX：座標(0,0)是元素本身的左上角。
  // e.clientX：點擊位置相對於瀏覽器視窗的水平坐標
  // progressBarRect.left：進度條元素相對於瀏覽器視窗左側的距離
  // 從進度條的左側到點擊位置的距離
  // e.clientX：元素當前的位置-progressBarRect.left 元素左側到父層的距離＝可以算出點擊的位置寬度多少

  const progressBarWidth = progressBarRect.width;
  console.log("5. progressBarRect.width", progressBarRect.width);

  // 計算點擊位置在進度條上的比例
  const clickRatio = clickX / progressBarWidth;
  // 點擊寬度(clickX) 除以 元素總寬度的比例(progressBarWidth) = 比例。

  // 根據比例計算對應的總時間秒數
  const totalTime = video.duration;
  const targetTime = totalTime * clickRatio;
  // 依據上面算出的比例clickRatio乘上總時長可以得到當前點擊的位置。

  // 使用 video.currentTime 將影片跳轉到指定時間
  video.currentTime = targetTime; // 再把這個位置指到當前時間，影片就會改變。
}
