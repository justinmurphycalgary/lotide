var planetMoons = {
  mercury: 0,
  venus: 0,
  earth: 1,
  mars: 2,
  jupiter: 67,
  saturn: 62,
  uranus: 27,
  neptune: 14
};

for (var planet in planetMoons) {
  var numberOfMoons = planetMoons[planet];
  console.log("Planet: " + planet + ", # of Moons: "+ numberOfMoons);
}

console.log('get an array of object keys :>> ', Object.keys(planetMoons));

console.log('get an array of object values :>> ', Object.values(planetMoons));

console.log('get an array of object entries :>> ', Object.entries(planetMoons));

for(const entry of Object.entries(planetMoons)) {
  console.log(`${entry[0]} :>> ${entry[1]}`);
}

for(const [key,value] of Object.entries(planetMoons)) {
  console.log(`${key} :>> ${value}`);
}

