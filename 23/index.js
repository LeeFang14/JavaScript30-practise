const synth = window.speechSynthesis;
let voices = [];

const voicesDropdown = document.querySelector('[name="voice"]'); // 下拉式選單
console.log(voicesDropdown);
const options = document.querySelectorAll('[type="range"], [name="text"]');
const speakButton = document.querySelector("#speak");
const stopButton = document.querySelector("#stop");

// 監聽voiceschanged，拿到瀏覽器給的語音列表，並將列表寫到下拉式選單。
synth.onvoiceschanged = getVoicesList;

function getVoicesList() {
  voices = synth.getVoices(); // 拿到一組陣列包物件的列表
  // 用forEach把列表寫進去下拉式選單
  voices
    .filter((voice) => voice.lang.includes("en")) // 篩選特定語系
    .forEach((voice, index) => {
      const option = document.createElement("option");
      option.textContent = `${voice.name} ${voice.lang}`;
      voicesDropdown.appendChild(option);
    });
}

let msg = new SpeechSynthesisUtterance(); // 擷取輸入的文字
// 初始設定，一開始不調整options直接按speakButton會沒有聲音，所以要先對初始做設定。
msg.rate = options[0].value;
msg.pitch = options[1].value;
msg.text = options[2].value;
// 這邊的設定是全域的之後還是可以被監聽事件給覆蓋。

function optionSetting() {
  msg.rate = options[0].value;
  msg.pitch = options[1].value;
  msg.text = options[2].value;
  speakText();
}

function speakText() {
  synth.speak(msg); //將拿到的值餵給speechSynthesis說話
}

function cancelSpeak() {
  synth.cancel();
}

function setVoice() {
  const selectedVoiceValue = voicesDropdown.value;

  const selectedVoice = voices.find(
    (voice) => `${voice.name} ${voice.lang}` === selectedVoiceValue
  );

  if (selectedVoice) {
    msg.voice = selectedVoice;
  }
  speakText();
}

// 監聽調整的列表，調整之後再按下speakButton，裡面的數值要有變化。
options.forEach((option) => {
  option.addEventListener("input", optionSetting);
});
// 監聽下拉式選單語音列表，被改變後，會轉換該語音包。
voicesDropdown.addEventListener("change", setVoice);

// 監聽speak按鈕
speakButton.addEventListener("click", speakText);

// 監聽stop按鈕
stopButton.addEventListener("click", cancelSpeak);
