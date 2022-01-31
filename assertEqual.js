//function implimentation
const assertEqual = function (actual, expected) {
  actual === expected ? true : false;
};

// TEST CODE
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);

// const assertEqual = function(actual,expected) {
//   actual === expected
//     ? console.log(`✅Assertion Passed: ${actual} = ${expected}`)
//     : console.log("🛑Assertion failed:" + actual + " != " + expected);
// };
