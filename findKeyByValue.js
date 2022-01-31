//assertEqual
const assertEqual = function (actual, expected) {
  actual === expected ? console.log('Test :>> True'):
  console.log('Test :>> False');
};

//function code
const findKeyByValue = (inputObj, inputValue) => {
  let outputKey = ""
 for (let [key,value] of Object.entries(inputObj)){
   value === inputValue ? outputKey = key: "";
   } 
 return outputKey
}

//test data
const bestTVShowsByGenre = { 
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

//test script
assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);