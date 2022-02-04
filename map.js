const words = ["ground", "control", "to", "major", "tom"];

const myCallback = (arr) => {
return arr.map(arr => arr.toUpperCase())
}

const map = (arr,callback)=>{
newArr = arr.slice(1)
return callback(newArr)
}

console.log(map(words,myCallback))