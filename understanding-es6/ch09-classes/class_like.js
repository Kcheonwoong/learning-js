/**
 * in ES5 and eariler js had no classes.
 *
 * creating a constructor
 * and then assigning methods to the constructor's prototype.
 */
// constructor fucntion
function Person(name) {
  this.name = name;
}

Person.prototype.sayName = function () {
  console.log(this.name);
};

var person = new Person("kcw");
person.sayName();

console.log(person instanceof Person);
console.log(person instanceof Object);

console.log(typeof Person);
console.log(typeof Person.prototype.sayName);

