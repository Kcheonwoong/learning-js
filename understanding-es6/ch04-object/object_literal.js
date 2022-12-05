/**
 * object literal
 */

// ------------------------------------------
// 1. property lnitializer shorthand
// es5
/**
 * object literal were simply collections of name-value pairs, meaning that some duplications
 */
function createPerson(name, age) {
  return {
    name: name,
    age: age,
  };
}

// es6
/**
 * eliminate the duplication
 * when a property in an object literal only has a name,
 * js engine looks in the surrounding scope for a variable of the same name.
 */
function createPerson(name, age) {
  return {
    name, // name: name
    age, // age : age
  };
}

// ------------------------------------------
// 2. concise methods
// es5
var person = {
  name: "kcw",
  sayName: function () {
    console.log(this.name);
  },
};

// es6
// eliminame colon and the function keyword
var person = {
  name: "kcw",
  sayName() {
    console.log(this.name);
  },
};

// ------------------------------------------
// 3. computed property names
/**
 * es5 and earlier, specify property names using variables and string literals
 * bracket notation allows any string value to be used as a property name.
 */
var person = {},
  lastName = "last name";
person["first name"] = "cheonwoong";
person[lastName] = "Kwak";

console.log(person);

var suffix = " name";
var person = {
  ["first" + suffix]: "cheonwoong",
  ["last" + suffix]: "Kwak",
};
console.log(person);
