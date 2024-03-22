"use strict";

const persons = require("./person.json");

function search(searchkey, value) {
  //error checking missing

  const found = [];
  for (const person of persons) {
    if (person[searchkey] == value) {
      found.push(person);
    }
  }

  return found;
}

console.log(search("firstname", "Oviya"));
console.log("#######");
console.log(search("age", 25));

const age = 25;
const result = search("age", age);
if (result.length > 0) {
  console.log(`Persons age of ${age}:`);
  for (const person of result) {
    console.log(`${person.lastname} ${person.firstname}`);
  }
} else {
  console.log(`No persons age ${age}`);
}
