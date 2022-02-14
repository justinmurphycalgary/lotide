const eqArrays = require('../assertArraysEqual')
console.clear()
console.log("--------eqArrays Test--------");
// TEST CODE
arr1=[1, 2, 3];
arr2=[1, 2, 3];
arr3=[1, 2, 3];
arr4=[3, 2, 1];
arr5=["1", "2", "3"];
arr6=["1", "2", "3"];
arr7=["1", "2", "3"];
arr8=["1", "2", 3];


console.log(`✅ Assertion Passed:`, eqArrays(arr1,arr2))
console.log(`🛑 Assertion failed:`, eqArrays(arr5,arr2))