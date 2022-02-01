const myObject = {
  a: 6,     // Number
  b: "abc", // String
  c: true,  // Boolean
  d: null,  // Null
};

const person = { firstName: "Khurram" };
const firstName = person["firstName"]; // get the value associated with the key "firstName"
console.log('firstName :>> ', firstName);

const firstNameAgain = person[firstName];
console.log('firstNameAgain :>> ', firstNameAgain);

const mary = { name: "Mary Sue" };
console.log('mary :>> ', mary);
mary["name"] = "Mary Jane";
console.log('mary :>> ', mary);
mary["age"]  = 22;
console.log('mary :>> ', mary);
mary // shows the resulting object with both properties

let person2 = {
  name: "Paul",
  address: {
    street: "310 W 95th",
    city: "New York",
    zipCode: 10027
  }
};

console.log('person :>> ', person2);
console.log('person2  :>> ', typeof(person2.address))
console.log('person2  :>> ', person2["address"]["city"])
console.log('person2 :>> ', person2.address.city)

person2["phoneNumbers"] = ["403.603.0603", "4036522953"];
console.log('person3 :>> ', person2.phoneNumbers[0]);

console.log('phone type :>> ', typeof person2.phoneNumbers[0]);