const dogs = [
  { name: "Snickers", age: 2 },
  { name: "hugo", age: 8 },
];

// 這一塊的執行寫在 HTML第8行：onClick="makeGreen()"
// onClick="makeGreen" -> 沒有小括號，點了就會沒反應。
function makeGreen() {
  const p = document.querySelector("p");
  p.style.color = "#BADA55";
  p.style.fontSize = "50px";
}

// Regular 一般常見用法
console.log("hello");

// Interpolated
console.log("Hello I am a %s string!", "💩"); // %s 會變成變量用法，後面參數會取代這個位置。

// Styled
console.log(
  "%c I am some great text",
  "font-size:50px; background:red; text-shadow: 10px 10px 0 blue"
); // %c 套用後面style的設定，在有 %c 的區域內。

// 控制台會依語法顯示不同樣式的提示訊息
// warning!
console.warn("OH NOOO");
// Error :|
console.error("Shit!");
// Info
console.info("Crocodiles eat 3-4 people per year");
// Testing
const p = document.querySelector("p");
console.assert(p.classList.contains("ouch"), "That is wrong!");

// clearing 清除控制台所有訊息，在這一行以上要console的code都會被清掉
console.clear();

// Viewing DOM Elements
console.log(p); // 印出32行的 p -> <p onClick="makeGreen()">×BREAK×DOWN×</p>
console.dir(p); // 印出32行的 p 是物件格式，可以點開看裡面有哪些屬性

// Grouping together
dogs
  .foeEach((obj) => {
    console.groupCollapsed(`${dog.name}`); // 會在控制台顯示折疊的狀態
    console.log(`This is ${obj.name}`);
    console.log(`${obj.name} is ${obj.age} year old`);
    console.groupEnd(`${dog.name}`); // 會把一樣的屬性群組起來
  })
  .join("\n");
console.log(result);

// counting 控制台會幫你計數印出
console.count("Wes"); // Wes: 1;
console.count("Wes"); // Wes: 2;
console.count("Steve"); // Steve: 1;
console.count("Steve"); // Steve: 2;
console.count("Wes"); // Wes: 3;
console.count("Steve"); // Steve: 3;
console.count("Wes"); // Wes: 4;
console.count("Steve"); // Steve: 4;
console.count("Steve"); // Steve: 5;
console.count("Steve"); // Steve: 6;
console.count("Steve"); // Steve: 7;
console.count("Steve"); // Steve: 8;

// timing 計時某一區間
console.time("fetching data"); // 開始計時
fetch("https://api.github.com/users/wesbos")
  .then((data) => data.json())
  .then((data) => {
    console.timeEnd("fetching data"); // 結束計時
    // fetching data: 13.7060546875 ms
    console.log(data);
  });

// table 印出表格形式，更好檢視
console.table(dogs);
