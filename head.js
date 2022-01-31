//function implimentation
//assert equal function
const assertEqual = function (actual, expected) {
  actual === expected
    ? console.log(`✅Assertion Passed: ${actual} = ${expected}`)
    : console.log(`🛑Assertion failed: ${actual} != ${expected}`);
};

const head = (arr) => arr[0];



//testcode
// testArray = [22,33,44];

// console.log(head(testArray));

// assertEqual(head([5,6,7]), 5);

// assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
