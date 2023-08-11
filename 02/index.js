// 360度/12 = 每小時轉30度
// 360度/60 = 每分鐘轉6度
// 360度/60 = 每秒轉6度
// 0度是在3點位置，最大度數限制在360

const hourHand = document.querySelector(".hour-hand");
const minuteHand = document.querySelector(".minute-hand");
const secondHand = document.querySelector(".second-hand");
const zeroAngle = 90; // 0度位置，在指針3的地方。

function increaseRotation() {
  const time = new Date();
  let hour = time.getHours();
  if (hour > 12) {
    hour = hour - 12;
  } else {
    hour = hour;
  }
  const minute = time.getMinutes();
  const second = time.getSeconds();
  let hourRotationValue = 0;
  let minuteRotationValue = 0;
  let secondRotationValue = 0;
  const hoursAngle = 360 / 12;
  const minuteAngle = 360 / 60;
  const secondAngle = 360 / 60;
  hourRotationValue += hour * hoursAngle - zeroAngle;
  minuteRotationValue += minute * minuteAngle - zeroAngle;
  secondRotationValue += second * secondAngle - zeroAngle;
  hourHand.style.transform = `rotate(${hourRotationValue}deg)`;
  minuteHand.style.transform = `rotate(${minuteRotationValue}deg)`;
  secondHand.style.transform = `rotate(${secondRotationValue}deg)`;
}

setInterval(increaseRotation, 1000);
increaseRotation();
