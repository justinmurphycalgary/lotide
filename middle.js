const assertEqual = require("./assertEqual")

const middle = (array) => {
  let middleFloor = Math.floor(array.length / 2);
  //console.log("middleFloor :>> ", middleFloor);

  let middleCeil = Math.ceil(array.length / 2);
  //console.log("middleCeil :>> ", middleCeil);

  if (middleCeil == middleFloor) {
    return  `${array[middleFloor - 1]} and ${array[middleCeil]}`;
  } else {
    return array[middleFloor];
  }
};


module.exports = middle

