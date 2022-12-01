/**
 * To Identifying functions, ES6 adds the name property to all functions.
 */

function sample1() {}
const sample2 = function () {};
console.log(sample1.name); // sample1
console.log(sample2.name); // sample2
console.log(sample2.bind().name); // bound sample2 - bound function prefixed with the string "bound"

const person = {
  get firstName() {
    return "Cheonwoong";
  },
  sayName: function () {
    console.log(this.name);
  },
};
console.log(person.firstName); // Cheonwoong
console.log(person.firstName.name); // undefined
console.log(person.sayName.name); // sayName

console.log(new Function().name); // anonymous
