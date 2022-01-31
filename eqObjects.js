//assert Equal
const assertEqual = function (actual, expected) {
  actual === expected ? true : false;
};
//assert findKeyByEqual
const findKeyByValue = (inputObj, inputValue) => {
  let outputKey = "";
  for (let [key, value] of Object.entries(inputObj)) {
    value === inputValue ? (outputKey = key) : "";
  }
  return outputKey;
};

//function Logic
const eqObjects = (object1, object2) => {
  if (Object.keys(object1).length !== Object.keys(object2).length) {
    return false;
  }
  for (let [key, value] of Object.entries(object1)) {
    if (value != object2[key]) {
      return false;
    }
  }
  return true;
};

//test Code
const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
console.log(eqObjects(ab, ba)); // => true

const abc = { a: "1", b: "2", c: "3" };
console.log(eqObjects(ab, abc)); // => false
