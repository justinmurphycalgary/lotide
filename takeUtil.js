//add on Functions
const eqArrays = function (actual, expected) {
  JSON.stringify(actual) === JSON.stringify(expected) ? true : false;
};



const takeUntil = function(array, callback) {


}

 





//test Data
const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const newData = [1, 2, 5, 7, 2];


//run code
console.log('endresults :>> ', takeUntil(data1, eqArrays));

