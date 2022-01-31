// version 2 of flatten
// function implimentation
const flatten = (inputArray) => {
  return (outArray = inputArray.flat(2));
};
//run testing
console.log(flatten2([1, 2, 3, [4, 5, 6, [7, 8, 9]]]));

// const eqArrays = (actual, expected) => {
//   JSON.stringify(actual) === JSON.stringify(expected)
//     ? console.log(`✅Assertion Passed: ${actual} = ${expected}`)
//     : console.log(`🛑Assertion failed: ${actual} != ${expected}`);
// };

// version 1 of flatten
// function implimentation
// function flatten(input) {
//   var outArray = input.flat(2)
//   return outArray
// }
