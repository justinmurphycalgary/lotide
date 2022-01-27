//assert equal function
const assertEqual = function(actual,expected) {
  actual === expected
    ? console.log(`✅Assertion Passed: ${actual} = ${expected}`)
    : console.log(`🛑Assertion failed: ${actual} != ${expected}`);
};

const tail = (arr) => arr.slice(1);

 testArray = [22,33,44];

 console.log(tail(testArray));

// assertEqual(head([5,6,7]), 5);

// assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
//console.log(typeof(result))
const result = tail(["Hello", "Lighthouse", "Labs"]);
//console.log(typeof(result))
assertEqual(result, ["Lighthouse", "Labs"]);
