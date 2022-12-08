/**
 * Adding methods directly onto constructors to simulate static members is another common pattern in ES5
 */
function Person(name) {
  this.name = name;
}
Person.create = function (name) {
  return new Person(name);
};
Person.prototype.sayName = function () {
  console.log(this.name);
};
var p = Person.create("kcw");
p.sayName();

/**
 * ES6, static keyword
 */

class PersonClass {
  constructor(name) {
    this.name = name;
  }
  sayName() {
    console.log(this.name);
  }
  static create(name) {
    return new PersonClass(name);
  }
}
var p = PersonClass.create("kcw");
p.sayName();
