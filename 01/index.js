function getAddEventListener() {
  const keysContainer = document.querySelectorAll(".key-container");
  const keysName = document.querySelectorAll(".keyname");
  const soundsAudio = document.querySelectorAll(".sound-audio");
  const keyMap = ["a", "s", "d", "f", "g", "h", "j", "k", "l"];

  addEventListener("keydown", (event) => {
    for (const keyName of keysName) {
      const keyChar = keyName.textContent.toLowerCase();
      if (event.key === keyChar) {
        keyMap.forEach((item, index) => {
          if (keyChar === item) {
            keysContainer.item(index).classList.add("playing");
            soundsAudio.item(index).currentTime = 0;
            soundsAudio.item(index).play();
          }
        });
      }
    }
  });

  addEventListener("keyup", () => {
    for (const keyContainer of keysContainer) {
      keyContainer.classList.remove("playing");
    }
  });
}

getAddEventListener();
