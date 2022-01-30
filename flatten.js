// const eqArrays = (actual, expected) => {
//   JSON.stringify(actual) === JSON.stringify(expected)
//     ? console.log(`✅Assertion Passed: ${actual} = ${expected}`)
//     : console.log(`🛑Assertion failed: ${actual} != ${expected}`);
// };


const flatten = (inputArray) => {
  return outArray = inputArray.flat(2)
}

function flatten2(input) {
  var outArray = input.flat(2)
  return outArray
}



console.log(flatten2([1,2,3,[4,5,6,[7,8,9]]]))
