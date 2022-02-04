const findKeyByValue = function(inputObj, callback) {
  for( const property in inputObj){
    if (callback(property) === true){
      console.log(inputObj[property])
    }
  }
};

const findBluehill = (statement) => {
  if (statement === "Blue Hill"){
    return true
  }};

const list = {
  "Blue Hill": 1,
  Akaleri: 3,
  noma: 2,
  elBulli: 3,
  Ora: 2,
  Akelarre: 3,
};

findKeyByValue(list, findBluehill);
