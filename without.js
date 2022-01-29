// FUNCTION IMPLEMENTATION
const without = function (array, removalString) {
  //console.log('array :>> ', array);

  const  newArray = array.filter(function(value){
    return value != removalString;
  })
  //console.log('array :>> ', newArray);
  return newArray;
 
};

// TEST CODE
console.log(without([1, 2, 3], [1])) // => [2, 3]
console.log(without(["1", "2", "3"], [1, 2, "3"])) // => ["1", "2"]