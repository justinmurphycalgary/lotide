const assertEqual = function(actual,expected) {
  actual === expected ? true : false
};

const countLetters = (input) => {
  let results = {};
  for (let i = 0; i < input.length; i++) {
     results[input[i]] = results[input[i]] + 1 || 1
  }
  console.log("results :>> ", results);
  return results;
};

countLetters("Hello My name is Justin")

