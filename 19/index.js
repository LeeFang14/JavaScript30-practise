const video = document.querySelector(".player");
const canvas = document.querySelector(".photo");
const ctx = canvas.getContext("2d");
const strip = document.querySelector(".strip");
const snap = document.querySelector(".snap");

// 取得攝影機畫面，會把攝影機轉成影片，所以要用video物件方法。
function getVideo() {
  navigator.mediaDevices
    .getUserMedia({ video: true, audio: false })
    .then((stream) => {
      console.log("stream", stream);
      video.srcObject = stream;
      video.play();
    })
    .catch((err) => {
      console.error(`An error occurred: ${err}`);
    });
}

// 將攝影機畫面以每16毫秒的間隔渲染在畫面上，這個過程已經把影片變成圖片，只是很時間很短所以畫面上看起來是影片。
function paintToCanvas() {
  const width = video.videoWidth;
  const height = video.videoHeight;
  canvas.width = width;
  canvas.height = height;

  return setInterval(() => {
    ctx.drawImage(video, 0, 0, width, height);
  }, 16);
}

// 監聽按鈕，它實際上是在抓取當前 <canvas> 元素上的圖像，這個圖像是最新的一幀，然後將這個圖像轉換成 Data URL 格式，
// 可以供你用於下載或在網頁上顯示。因此，即使看起來是影片，實際上你每次點擊 "Take Photo" 按鈕時，都是抓取的最新畫面，就像拍照一樣。
function takePhoto() {
  // played the sound
  snap.currentTime = 0;
  snap.play();

  // take the data out of the canvas
  const data = canvas.toDataURL("image/jpeg");
  const link = document.createElement("a");
  link.href = data;
  link.setAttribute("download", "handsome");
  link.innerHTML = `<img src="${data}" alt="Handsome Man" />`;
  strip.insertBefore(link, strip.firstChild);
}

getVideo();

video.addEventListener("canplay", paintToCanvas);
