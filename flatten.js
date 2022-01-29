const eqArrays = (actual, expected) => {
  JSON.stringify(actual) === JSON.stringify(expected)
    ? console.log(`✅Assertion Passed: ${actual} = ${expected}`)
    : console.log(`🛑Assertion failed: ${actual} != ${expected}`);
};

const flatten = (inputArray) => {
  //array.isArray()
  return outArray = inputArray.flat(2)

}

console.log(flatten([1,2,3,[4,5,6,[7,8,9]]]))
