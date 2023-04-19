addEventListener("keydown", (e) => {
  if (event.keyCode === 65) {
    document.querySelector(".sound-clap").play();
    document.querySelector(".keya").classList.add("playing");
  }
});
addEventListener("keyup", (e) => {
  document.querySelector(".keya").classList.remove("playing");
});
addEventListener("keydown", (e) => {
  if (event.keyCode === 83) {
    document.querySelector(".sound-hihat").play();
    document.querySelector(".keys").classList.add("playing");
  }
});
addEventListener("keyup", (e) => {
  document.querySelector(".keys").classList.remove("playing");
});
addEventListener("keydown", (e) => {
  if (event.keyCode === 68) {
    document.querySelector(".sound-kick").play();
    document.querySelector(".keyd").classList.add("playing");
  }
});
addEventListener("keyup", (e) => {
  document.querySelector(".keyd").classList.remove("playing");
});
addEventListener("keydown", (e) => {
  if (event.keyCode === 70) {
    document.querySelector(".sound-openhat").play();
    document.querySelector(".keyf").classList.add("playing");
  }
});
addEventListener("keyup", (e) => {
  document.querySelector(".keyf").classList.remove("playing");
});
addEventListener("keydown", (e) => {
  if (event.keyCode === 71) {
    document.querySelector(".sound-boom").play();
    document.querySelector(".keyg").classList.add("playing");
  }
});
addEventListener("keyup", (e) => {
  document.querySelector(".keyg").classList.remove("playing");
});
addEventListener("keydown", (e) => {
  if (event.keyCode === 72) {
    document.querySelector(".sound-ride").play();
    document.querySelector(".keyh").classList.add("playing");
  }
});
addEventListener("keyup", (e) => {
  document.querySelector(".keyh").classList.remove("playing");
});
addEventListener("keydown", (e) => {
  if (event.keyCode === 74) {
    document.querySelector(".sound-snare").play();
    document.querySelector(".keyj").classList.add("playing");
  }
});
addEventListener("keyup", (e) => {
  document.querySelector(".keyj").classList.remove("playing");
});
addEventListener("keydown", (e) => {
  if (event.keyCode === 75) {
    document.querySelector(".sound-tom").play();
    document.querySelector(".keyk").classList.add("playing");
  }
});
addEventListener("keyup", (e) => {
  document.querySelector(".keyk").classList.remove("playing");
});
addEventListener("keydown", (e) => {
  if (event.keyCode === 76) {
    document.querySelector(".sound-tink").play();
    document.querySelector(".keyl").classList.add("playing");
  }
});
addEventListener("keyup", (e) => {
  document.querySelector(".keyl").classList.remove("playing");
});
