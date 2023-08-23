const bands = [
  "The Plot in You",
  "The Devil Wears Prada",
  "Pierce the Veil",
  "Norma Jean",
  "The Bled",
  "Say Anything",
  "The Midway State",
  "We Came as Romans",
  "Counterparts",
  "Oh, Sleeper",
  "A Skylit Drive",
  "Anywhere But Here",
  "An Old Dog",
];

const sortedBands = bands.sort((bandsA, bandsB) => bandsA - bandsB);
console.log("sortedBands", sortedBands);
const bandsList = document.querySelector("#bands");

function addElement() {
  bands.forEach((item) => {
    const li = document.createElement("li");
    const liContent = document.createTextNode(item);
    li.appendChild(liContent);
    bandsList.appendChild(li); // 將 <li> 元素插入到 <ul> 元素內
  });
}

window.onload = addElement;
