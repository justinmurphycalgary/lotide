const assertEqual = function (actual, expected) {
  actual === expected ? true : false;
};



const countOnly = (allItems, itemsToCount) => {
  let results = {};
  for (let i = 0; i < allItems.length; i++) {
    itemsToCount[allItems[i]] === true
      ? (results[allItems[i]] = results[allItems[i]] + 1 || 1)
      : null;
  }
  //console.log("results :>> ", results);
  return results;
};



const printArray = (arr) => {
  arr.forEach(element => console.log(element));
}



const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe",
];


const result1 = countOnly(firstNames, {
  Jason: true,
  Karima: true,
  Fang: true,
  Agouhanna: false,
});

console.log("result1 :>> ", result1);

assertEqual(result1.Jason, 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);
assertEqual(result1["Agouhanna"], undefined);
