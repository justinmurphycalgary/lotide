const eqArrays = (actual, expected) => {
  JSON.stringify(actual) === JSON.stringify(expected)
    ? //literal refactoring
      console.log(`✅Assertion Passed: ${actual} = ${expected}`)
    : //conventional method
      console.log(`🛑Assertion failed: ${actual} != ${expected}`);
};

const middle = (array) => {
  let middleFloor = Math.floor(array.length / 2);
  console.log("middleFloor :>> ", middleFloor);

  let middleCeil = Math.ceil(array.length / 2);
  console.log("middleCeil :>> ", middleCeil);

  if (middleCeil == middleFloor) {
    return `The Middle Numbers are ${array[middleFloor - 1]} and ${
      array[middleCeil]
    }`;
  } else {
    return `The Middle Number is ${array[middleFloor]}.`;
  }
};


console.log(middle([1,2]));

