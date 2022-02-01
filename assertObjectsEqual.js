//function code
const assertObjectsEqual = (actual, expected) => {
  if (Object.keys(actual).length !== Object.keys(expected).length) {
    return false;
  }
  for (let [key, value] of Object.entries(actual)) {
    if (value != expected[key]) {
      return false;
    }
  }
  return true;
};

//sample data
const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
//console.log(eqObjects(ab, ba)); // => true

const abc = { a: "1", b: "2", c: "3" };
//console.log(eqObjects(ab, abc)); // => false

//test code

if (assertObjectsEqual(ab, ba) == true) {
  console.log(`✅✅✅ Assertion Passed: :>> `);
} else {
  console.log(`🛑🛑🛑 Assertion Failed: :>> `);
}
