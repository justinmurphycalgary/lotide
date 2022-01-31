//function implimention v2
const scrambledPassword = (input) => {
  inputArgv = input.slice(2);
  if (inputArgv.length === 1) {
    let returnValue = "";
    const inputString = inputArgv[0];
    for (var i = 0; i < inputString.length; i++) {
      switch (inputString[i]) {
        case "a":
          returnValue += "4";
          break;
        case "e":
          returnValue += "3";
          break;
        case "o":
          returnValue += "0";
          break;
        case "l":
          returnValue += "1";
          break;
        default:
          returnValue += inputString[i];
      }
    }
    return returnValue;
  }
};

// Test Code
//console.log('process.argv.slice(2) :>> ', process.argv);
console.log(`Scrambled Password :>> , ${scrambledPassword(process.argv)}`);
