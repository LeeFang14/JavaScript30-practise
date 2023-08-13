// fetch原始資料(一次)、使用者輸入的值(可多次) → 比對 → 渲染資料
// fetch和取得使用者輸入沒有先後順序，所以不想寫成巢狀。
function main() {
  // fetch
  let cityData = null;
  fetch(
    "https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json"
  )
    .then((response) => response.json())
    .then((data) => {
      cityData = data;
    })
    .catch((error) => {
      console.error("取得資料時發生錯誤：", error);
    });

  // addEventListener input
  const userInput = document.querySelector(".search");
  userInput.addEventListener("input", (e) => {
    const userInputValue = e.target.value;
    const resultList = compareValues(userInputValue, cityData);
    const ul = document.querySelector(".suggestions");

    const liHtml = resultList
      .map((obj) => {
        const regex = new RegExp(userInputValue, "gi");
        const cityName = obj.city.replace(
          regex,
          `<span class="hl">${userInputValue}</span>`
        );
        const stateName = obj.state.replace(
          regex,
          `<span class="hl">${userInputValue}</span>`
        );
        return `
          <li>
            <span>${cityName},${stateName}</span>
            <span>${numberWithCommas(obj.people)}</span>
          </li>`;
      })
      .join("");

    ul.innerHTML = liHtml;
  });
}

// 比對city & state 值包含 input，如果是空值則輸出全部。
function compareValues(userInputValue, cityData) {
  const matchArray = cityData.filter((cityObj) => {
    const search1 = cityObj.city
      .toLowerCase()
      .includes(userInputValue.toLowerCase());
    const search2 = cityObj.state
      .toLowerCase()
      .includes(userInputValue.toLowerCase());
    return search1 || search2;
  });

  return matchArray.map((item) => {
    return {
      city: item.city,
      state: item.state,
      people: item.population,
    };
  });
}

function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

main();
