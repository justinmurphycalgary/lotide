const letterPosition = (param) => {
  let results = {};
  for (let i = 0; i < param.length; i++) {
    results[param[i]] 
    ? results[param[i]].push(i) 
    : results[param[i]] = [i];
  }
  return results;
};

console.log(letterPosition("hello my name is helen"));
