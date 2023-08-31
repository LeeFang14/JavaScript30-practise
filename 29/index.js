// 監聽上面所有按鈕click，點擊到哪一個，會拿到該 data-time 的值，渲染到畫面上
const timerButtons = document.querySelectorAll(".timer__button");

// 監聽表單提交 拿到value，渲染到畫面上
const custom = document.querySelector("#custom");
const input = document.querySelector("input");

// 要渲染的區塊，渲染到畫面上需要倒數
const timeLeft = document.querySelector(".display__time-left"); // 時間倒數
const endTime = document.querySelector(".display__end-time"); // 倒數完的時間
const pageTitle = document.querySelector("title");
let countdownInterval;

function chooseTime(timeInput) {
  clearInterval(countdownInterval);
  const currentTimeSec = getCurrentTimeSeconds(); // 先把當前的時間轉成秒數
  const endTimeSeconds = currentTimeSec + timeInput; // 結束時間：當前時間加上輸入的秒數
  render(timeInput, endTimeSeconds); // 要計算的總秒數,結束時間的字串，渲染到畫面上
}

function getCurrentTimeSeconds() {
  const today = new Date();
  const hours = today.getHours();
  const minutes = today.getMinutes();
  const seconds = today.getSeconds();
  return hours * 3600 + minutes * 60 + seconds;
}

function calcTime(endTimeSeconds) {
  const endHours = Math.floor(endTimeSeconds / 3600);
  const endMinutes = Math.floor((endTimeSeconds % 3600) / 60);
  const endSeconds = Math.floor(endTimeSeconds % 60);
  return {
    hours: endHours,
    minutes: endMinutes,
    seconds: String(endSeconds).padStart(2, "0"), // 填充成兩位數
  };
}

// 拿到倒數時間obj、結束時間obj，並渲染。
function render(timeInput, endTimeSeconds) {
  const endTimeObj = calcTime(endTimeSeconds);
  const adjustedHour =
    endTimeObj.hours > 12 ? endTimeObj.hours - 12 : endTimeObj.hours; // 把24小時制的小時換算成12小時
  endTime.textContent = `Be Back At ${adjustedHour}:${endTimeObj.minutes}`; // 渲染結束時間
  // 處理countdownTime倒數的時間
  countdownInterval = setInterval(() => {
    const timeInputObj = calcTime(timeInput);
    timeLeft.textContent = `${timeInputObj.hours * 60 + timeInputObj.minutes}:${
      timeInputObj.seconds
    }`;
    pageTitle.textContent = `${timeInputObj.minutes}:${timeInputObj.seconds}`;
    timeInput--;
    if (timeInput < 0) {
      clearInterval(countdownInterval);
    }
  }, 1000);
}

timerButtons.forEach((button) => {
  button.addEventListener("click", (e) => {
    const timeSeconds = Number(e.target.dataset.time);
    chooseTime(timeSeconds);
  });
});

custom.addEventListener("submit", function (e) {
  e.preventDefault();
  // 輸入非數字時，不會進入倒數
  if (/^(0|[1-9]\d*)$/.test(input.value)) {
    const mins = input.value;
    chooseTime(mins * 60);
  }
  custom.reset();
});
