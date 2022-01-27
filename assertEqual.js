// FUNCTION IMPLEMENTATION
const assertEqual = function(actual,expected) {
  actual === expected
    //literal refactoring
    ? console.log(`✅Assertion Passed: ${actual} = ${expected}`)
    //conventional method
    : console.log("🛑Assertion failed:" + actual + " != " + expected);
};

// TEST CODE
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);
