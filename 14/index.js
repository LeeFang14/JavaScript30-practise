// 基本型別複製其他變數的行為，是直接賦值，a、b指的是不同記憶體位置，所以修改a不會影響到b。
let a = 10;
let b = a;
console.log(a, b); // 10 10
a = 20;
console.log(a, b); // 10 20

// 物件型別的複製行為如果不回傳新的物件，指向是同一個記憶體位置，所以修改會改到原本的。
// 陣列
const players = ["Wes", "Sarah", "Ryan", "Poppy"];
const team3 = [].concat(players);
team3[3] = "hello";
console.log("players", players);
console.log("team3", team3);

// or use the new ES6 Spread
const team4 = [...players]; // 這以的解構行為：複製原陣列回傳一個新的到team4變數。
team4[3] = "heeee hawww";
console.log("team4", team4);

const team5 = Array.from(players);

// 物件
const person = {
  name: "Wes Bos",
  age: 80,
};

const captain = person;
captain.number = 99;
console.log("person", person);
console.log("captain", captain);

// Object.assign，複製新的物件，避免改動時影響到原本的。
const cap2 = Object.assign({}, person, { number: 99, age: 12 });
console.log("cap2", cap2);

// // We will hopefully soon see the object ...spread
const cap3 = { ...person }; // 回傳一個新物件，不會改到原本的。
cap3.friend = "Bob";
console.log("person", person);
console.log("cap3", cap3);

// 淺拷貝與深拷貝
// 如果是物件包物件再一層物件的結構，裡面那一層會改到原本的。
// 所以可以透過assign，去複製。但再加上一層之後的就會只到同一個，原本的一樣還是被改到。
const wes = {
  name: "Wes",
  age: 100,
  social: {
    twitter: "@wesbos",
    facebook: "wesbos.developer",
  },
};

console.clear();
console.log(wes);

const dev = Object.assign({}, wes);

const dev2 = JSON.parse(JSON.stringify(wes));
