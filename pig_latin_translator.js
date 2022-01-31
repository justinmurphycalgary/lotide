//function Block
const newTranslator = (originalWords) => {
  var pigLatinWords = [];
  function translateToPigLatin(word) {
    return word.slice(1, word.length) + word[0] + "ay";
  }
  for (var i = 0; i < originalWords.length; i++) {
    pigLatinWords.push(translateToPigLatin(originalWords[i]));
  }
  console.log(
    `English "${originalWords}" is translated to "${pigLatinWords.join(
      " "
    )}" in pig latin!`
  );

  return pigLatinWords;
};
//test code
newTranslator((originalWords = process.argv.slice(2)));

// //version 1 of my implimentation
// var originalWords = process.argv.slice(2);
// var pigLatinWords = [];
// //console.log('originalWords :>> ', originalWords);

// for (var i = 0; i < originalWords.length; i++) {
//   console.log('originalWords :>> ', originalWords[i]);
//   pigLatinWords.push(translateToPigLatin(originalWords[i]));
// }

// console.log(pigLatinWords.join(' '));
// var asd
// function translateToPigLatin(word) {
//   return word.slice(1, word.length) + word[0] + "ay";
// }
