// Get your shorts on - this is an array workout!
// ## Array Cardio Day 1
// Some data we can work with
// 這是一項陣列訓練！我們可以使用的一些數據
// ==========題目==========
// Array.prototype.filter()
// 1. Filter the list of inventors for those who were born in the 1500's
// 篩選出生於 1500 年代的發明家列表(1500年代:1500年~1599年)
// Array.prototype.map()
// 2. Give us an array of the inventors first and last names
// 給我們一個發明人名字和姓氏的數組
// Array.prototype.sort()
// 3. Sort the inventors by birthdate, oldest to youngest
// 按出生日期對發明人進行排序，從最年長到最年輕
// Array.prototype.reduce()
// 4. How many years did all the inventors live all together?
// 所有發明家一起生活了多少年？
// 5. Sort the inventors by years lived
// 按壽命對發明者進行排序
// 6. create a list of Boulevards in Paris that contain 'de' anywhere in the name
// https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris
// 創建巴黎大道列表，名稱中任意位置包含“de”
// 7. sort Exercise
// Sort the people alphabetically by last name
// 按姓氏字母順序對人員進行排序
// 8. Reduce Exercise
// Sum up the instances of each of these
// 8. 總結每一個的實例
// ====================

// Q1~Q5：練習使用 array method
const inventors = [
  { first: "Albert", last: "Einstein", year: 1879, passed: 1955 },
  { first: "Isaac", last: "Newton", year: 1643, passed: 1727 },
  { first: "Galileo", last: "Galilei", year: 1564, passed: 1642 },
  { first: "Marie", last: "Curie", year: 1867, passed: 1934 },
  { first: "Johannes", last: "Kepler", year: 1571, passed: 1630 },
  { first: "Nicolaus", last: "Copernicus", year: 1473, passed: 1543 },
  { first: "Max", last: "Planck", year: 1858, passed: 1947 },
  { first: "Katherine", last: "Blodgett", year: 1898, passed: 1979 },
  { first: "Ada", last: "Lovelace", year: 1815, passed: 1852 },
  { first: "Sarah E.", last: "Goode", year: 1855, passed: 1905 },
  { first: "Lise", last: "Meitner", year: 1878, passed: 1968 },
  { first: "Hanna", last: "Hammarström", year: 1829, passed: 1909 },
];

// Q6：篩選名稱有"de"的值(任一位置)。
const BoulevardsInParis = [
  "Boulevards of Paris",
  "City walls of Paris",
  "Thiers wall",
  "Wall of Charles V",
  "Wall of Philip II Augustus",
  "City gates of Paris",
  "Haussmann's renovation of Paris",
  "Boulevards of the Marshals",
  "Boulevard Auguste-Blanqui",
  "Boulevard Barbès",
  "Boulevard Beaumarchais",
  "Boulevard de l'Amiral-Bruix",
  "Boulevard Mortier",
  "Boulevard Poniatowski",
  "Boulevard Soult",
  "Boulevard des Capucines",
  "Boulevard de la Chapelle",
  "Boulevard de Clichy",
  "Boulevard du Crime",
  "Boulevard du Général-d'Armée-Jean-Simon",
  "Boulevard Haussmann",
  "Boulevard de l'Hôpital",
  "Boulevard des Italiens",
  "Boulevard Lefebvre",
  "Boulevard de la Madeleine",
  "Boulevard de Magenta",
  "Boulevard Malesherbes",
  "Boulevard Marguerite-de-Rochechouart",
  "Boulevard Montmartre",
  "Boulevard du Montparnasse",
  "Boulevard Raspail",
  "Boulevard Richard-Lenoir",
  "Boulevard Saint-Germain",
  "Boulevard Saint-Michel",
  "Boulevard de Sébastopol",
  "Boulevard de Strasbourg",
  "Boulevard du Temple",
  "Boulevard Voltaire",
  "Boulevard de la Zone",
];

// Q7：按姓氏字母順序對人員進行排序 "名字,姓氏"
const people = [
  "Bernhard, Sandra",
  "Bethea, Erin",
  "Becker, Carl",
  "Bentsen, Lloyd",
  "Beckett, Samuel",
  "Blake, William",
  "Berger, Ric",
  "Beddoes, Mick",
  "Beethoven, Ludwig",
  "Belloc, Hilaire",
  "Begin, Menachem",
  "Bellow, Saul",
  "Benchley, Robert",
  "Blair, Robert",
  "Benenson, Peter",
  "Benjamin, Walter",
  "Berlin, Irving",
  "Benn, Tony",
  "Benson, Leana",
  "Bent, Silas",
  "Berle, Milton",
  "Berry, Halle",
  "Biko, Steve",
  "Beck, Glenn",
  "Bergman, Ingmar",
  "Black, Elk",
  "Berio, Luciano",
  "Berne, Eric",
  "Berra, Yogi",
  "Berry, Wendell",
  "Bevan, Aneurin",
  "Ben-Gurion, David",
  "Bevel, Ken",
  "Biden, Joseph",
  "Bennington, Chester",
  "Bierce, Ambrose",
  "Billings, Josh",
  "Birrell, Augustine",
  "Blair, Tony",
  "Beecher, Henry",
  "Biondo, Frank",
];

// Q8：總結每一個的實例
const data = [
  "car",
  "car",
  "truck",
  "truck",
  "bike",
  "walk",
  "car",
  "van",
  "bike",
  "walk",
  "car",
  "van",
  "car",
  "truck",
  "pogostick",
];

function main() {
  const birth16thCenturyInventors = Q1(inventors);
  console.log("Q1.出生於1500年代的發明家: ", birth16thCenturyInventors);
  const fullNameOfInventors = Q2(inventors);
  console.log("Q2.每位發明家全名: ", fullNameOfInventors);
  const ageFromChildhoodToAdulthood = Q3(inventors);
  console.log("Q3.發明家年齡排序小到大: ", ageFromChildhoodToAdulthood);
  const allInventorsLive = Q4(inventors);
  console.log("Q4.發明家壽命加總: ", allInventorsLive, "年");
  const LifespanFromLessToMore = Q5(inventors);
  console.log("Q5.發明家壽命排序小到大: ", LifespanFromLessToMore);
  const avenueWithDeInItsName = Q6(BoulevardsInParis);
  console.log("Q6.名稱含有'de'的大道", avenueWithDeInItsName);
  const alphabeticalByLastName = Q7(people);
  console.log("Q7.按姓氏字母順序對人員進行排序", alphabeticalByLastName);
  const eachItemQuantity = Q8(data);
  console.log("Q8.總結每一個的實例: ", eachItemQuantity);
}
main();

function Q1(inventors) {
  return inventors.filter((item) => {
    if (item.year >= 1500 && item.year < 1600) return item;
  });
}

function Q2(inventors) {
  return inventors.map((item) => {
    return `${item.first} ${item.last}`;
  });
}

function Q3(inventors) {
  return inventors.sort(
    (inventorsA, inventorsB) => inventorsA.year - inventorsB.year
  );
}

function Q4(inventors) {
  return inventors
    .map((item) => item.passed - item.year)
    .reduce((accumulator, currentValue) => accumulator + currentValue, 0);
}

function Q5(inventors) {
  inventors.forEach((item) => {
    return (item.lifespan = item.passed - item.year);
  });
  return inventors.sort(
    (inventorsA, inventorsB) => inventorsB.lifespan - inventorsA.lifespan
  );
}

function Q6(BoulevardsInParis) {
  return BoulevardsInParis.filter((item) => {
    if (/de/.test(item)) {
      return item;
    }
  });
}

function Q7(people) {
  return people.sort();
}

function Q8(data) {
  const sortedData = data.sort();
  return sortedData.reduce((counts, item) => {
    if (counts[item] === undefined) {
      counts[item] = 0;
    }
    counts[item]++;
    return counts;
  }, {});
}
