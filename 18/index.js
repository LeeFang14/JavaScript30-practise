const liList = document.querySelectorAll("li");
const liArray = [...liList];

const allTime = liArray
  .map((item) => {
    const time = item.dataset.time.split(":");
    return Number(time[0]) * 60 + Number(time[1]); // 把分鐘數*60秒轉成秒數+自己的秒數
  })
  .reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
  }, 0); // 加總所有秒數

const hours = Math.floor(allTime / 3600);
const minutes = Math.floor((allTime % 3600) / 60);
const seconds = Math.floor(allTime % 60);
console.log(hours, minutes, seconds);
