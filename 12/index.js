const arrKeydown = [];
const secretCode = "fang";

window.addEventListener("keyup", (e) => {
  console.log(e.key);
  arrKeydown.push(e.key);
  arrKeydown.splice(
    -secretCode.length - 1,
    arrKeydown.length - secretCode.length
  );
  if (arrKeydown.join("").includes(secretCode)) {
    console.log("DING DING!");
    cornify_add();
  }
  console.log(arrKeydown);
});
