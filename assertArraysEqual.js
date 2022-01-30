// FUNCTION IMPLEMENTATION
const eqArrays = function (actual, expected) {
  JSON.stringify(actual) === JSON.stringify(expected)
    ? console.log(`✅ Assertion Passed: ${actual} = ${expected}`)
    : console.log(`🛑 Assertion failed: ${actual} != ${expected}`);
};

// TEST CODE
eqArrays([1, 2, 3], [1, 2, 3]);
eqArrays([1, 2, 3], [3, 2, 1]);

eqArrays(["1", "2", "3"], ["1", "2", "3"]);
eqArrays(["1", "2", "3"], ["1", "2", 3]);
