// ## Array Cardio Day 2

const people = [
  { name: "Wes", year: 1988 },
  { name: "Kait", year: 1986 },
  { name: "Irv", year: 1970 },
  { name: "Lux", year: 2015 },
];

const comments = [
  { text: "Love this!", id: 523423 },
  { text: "Super good", id: 823423 },
  { text: "You are the best", id: 2039842 },
  { text: "Ramen is my fav food ever", id: 123523 },
  { text: "Nice Nice Nice!", id: 542328 },
];

// people
// Q1：至少有一個人年滿 19 歲？ Array.prototype.some()
// Q2：每個人都年滿 19 歲嗎？ Array.prototype.every()
// comments
// Q3：查找ID為823423的評論 Array.prototype.find()
//     Find 就像過濾器，但只返回您要查找的內容。
// Q4：查找 823423 該ID的評論，並刪除該ID的評論 Array.prototype.findIndex()
//     要整個物件都刪除，並且不能變成稀疏陣列即後面的要往前補。

console.log("comments1", comments);
console.log("...comments", ...comments);

function main() {
  const Q1 = isOneAgeOver19(people);
  console.log("至少有一個人年滿 19 歲？ ", Q1);
  const Q2 = isAllAgeOver19(people);
  console.log("每個人都年滿 19 歲嗎？", Q2);
  const Q3 = findOneComments(comments);
  console.log("查找ID為823423的評論", Q3);
  console.log("original comments", comments);
  const Q4 = findIndexComments(comments);
  console.log("Q4 comments", Q4);
}

main();

function isOneAgeOver19(people) {
  return people.some((item) => new Date().getFullYear() - item.year > 19);
}

function isAllAgeOver19(people) {
  return people.every((item) => new Date().getFullYear() - item.year >= 19);
}

function findOneComments(comments) {
  return comments.find((item) => item.id === 823423);
}

function findIndexComments(comments) {
  const index = comments.findIndex((item) => item.id === 823423);
  console.log("查找ID為823423的index", index);
  return [...comments.slice(0, index), ...comments.slice(index + 1)];
}

function findIndexComments2(comments) {
  const index = comments.findIndex((item) => item.id === 823423);
  console.log("查找ID為823423的index", index);
  comments.splice(index, 1);
  return comments;
}
