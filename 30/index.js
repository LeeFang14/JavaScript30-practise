const holes = document.querySelectorAll(".hole");
const scoreBoard = document.querySelector(".score");
const moles = document.querySelectorAll(".mole");

// 執行遊戲的按鈕，onClick寫在HTML
function startGame() {
  scoreBoard.textContent = 0; // 重新開始計分歸零

  moleSetInterval = setInterval(() => {
    const index = Math.floor(Math.random() * holes.length); // 隨機選取hole index
    holes[index].classList.add("up"); // 對該index掛上class

    setTimeout(() => {
      holes[index].classList.remove("up"); // 對該index移除class
    }, 1000);
  }, 1000);
  // setInterval：每間隔1秒對隨機index掛上.up，setTimeout：停留1秒後移除.up

  // 10秒後停止，clearInterval整個遊戲。
  setTimeout(() => {
    clearInterval(moleSetInterval);
    resetHoles();
  }, 10000);
}

// 重置所有洞口的狀態，預防遊戲時間停止時剛好有掛著up下次開始遊戲就會出現，所以要作清除。
function resetHoles() {
  holes.forEach((hole) => {
    hole.classList.remove("up");
  });
}

moles.forEach((mole) => {
  mole.addEventListener("click", (e) => {
    if (!e.isTrusted) return; // 判斷是否為真實用戶點擊
    const score = Number(scoreBoard.textContent) + 1;
    mole.parentNode.classList.remove("up"); // 被點擊後會地鼠會消失
    scoreBoard.textContent = score;
  });
});
