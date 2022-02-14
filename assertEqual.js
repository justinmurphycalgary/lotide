console.clear();

//function implimentation
const assertEqual = function (actual, expected) {
  answer = actual === expected ? true : false;
  if (answer === true) {
    console.log("AE Results, Are the values Equal? :>> ", answer);
  } else {
    console.log("AE actual :>> ", actual);
    console.log("AE expected :>> ", expected);
  }
  return answer;
};

module.exports = assertEqual;
