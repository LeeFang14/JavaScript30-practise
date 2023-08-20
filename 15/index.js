const addItems = document.querySelector(".add-items"); //form
const itemsList = document.querySelector(".plates"); // ul
const fragment = document.createDocumentFragment(); // 片段

const items = JSON.parse(localStorage.getItem("items")) || [];
// 從 localStorage 中讀取已存儲的項目，如果為空則設置為空陣列
// localStorage 裡面的格式都是字串，所以要用JSON.parse轉成可以操作的格式。

function saveSubmit(event) {
  event.preventDefault(); // 這個函式的作用是阻止事件的預設行為，這裡是阻止表單submit的動作
  const userInput = event.target[0].value; // userInput，監聽提交後的值會被event包成陣列[0]:input和[1]:button
  items.push({ text: userInput, done: false });
  localStorage.setItem("items", JSON.stringify(items)); // 把陣列轉成字串存入localStorage
  this.reset(); //清除畫面上的input
  renderItems(); // 執行渲染
}

function renderItems() {
  fragment.innerHTML = ""; // 清空片段現有的內容

  items.forEach((item, index) => {
    const li = document.createElement("li");
    const input = document.createElement("input");
    const label = document.createElement("label");

    input.type = "checkbox";
    input.dataset.index = index;
    input.id = `item${index}`;
    input.defaultChecked = item.done; // 設置是否勾選 會影響畫面上的HTML是否出現checked屬性
    input.checked = item.done; // 設置是否勾選
    label.htmlFor = `item${index}`;
    label.textContent = item.text;

    li.appendChild(input);
    li.appendChild(label);

    fragment.appendChild(li); // 將創建的元素加入文檔片段
  });

  itemsList.innerHTML = ""; // 清畫面上的ul內容
  itemsList.appendChild(fragment); // 將片段給ul
}

function toggleDone(index) {
  items[index].done = !items[index].done; // 用取反(!)判斷切換 true 和 false 的狀態
  /* 上一行同
    if (items[index].done) {
    items[index].done = false;
  } else {
    items[index].done = true;
  }
  */
  localStorage.setItem("items", JSON.stringify(items));
  renderItems();
}

addItems.addEventListener("submit", saveSubmit);
itemsList.addEventListener("click", (event) => {
  if (event.target.matches("label")) {
    const index = parseInt(event.target.getAttribute("for").slice(4)); // 獲取索引 對該元素寫屬性
    toggleDone(index); // 呼叫 toggleDone 函式來切換 done 值
  }
});

renderItems(); // 初始渲染
