// 點擊功能：點第一個搭配shift點最後一個可以全部點取，但無法全部取消。
// 偵測有沒有加上shift一起點，true=有按，false=沒有
// 第一次點擊直接加 shift ：全選範圍→當前點擊的 input ～最後一個input
// 第二次之後的點擊加 shift ：全選範圍→上一個點擊的 input ～當前點擊的 input。

const checkboxes = document.querySelectorAll("input");
let lastInputIndex = null; // 記住上次被點到input的index

checkboxes.forEach((checkbox, index) => {
  // 對每個 input 監聽 點擊事件
  checkbox.addEventListener("click", (e) => {
    const isShiftKey = e.shiftKey; // 判斷是否有多按 shift -> true，沒有按 false

    if (isShiftKey) {
      // 加上 Shift 的判斷，要再判斷是不是第一次加上Shift的點擊。
      if (lastInputIndex === null) {
        const current = index;
        // 如果是第一次lastInputIndex = null，會從當前點擊的直接選中到剩下的全部
        for (let i = current; i < checkboxes.length; i++) {
          checkboxes[i].checked = true;
        }
      } else {
        // 不是第一次 lastInputIndex = 上次點的index
        const current = index;
        for (let i = lastInputIndex; i < current; i++) {
          checkboxes[i].checked = true;
        }
      }
    } else {
      // 沒有加上 Shift 會直接把當前點擊的index賦值給上一次，留給下一次加上Shift的點擊
      lastInputIndex = index;
    }
  });
});
