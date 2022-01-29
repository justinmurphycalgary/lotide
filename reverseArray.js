var inputArgv = process.argv.slice(2);

const reverseArray = (input) => {
  let returnValue = [];
  for (var i = input.length; i >= 0; i--) {
    returnValue.push(input[i]);
  }
  return returnValue;
};

console.log("reverseArray :>> ", reverseArray(inputArgv));
