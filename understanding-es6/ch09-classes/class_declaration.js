/**
 * ES6, class declaration looks similar to classes in other lang.
 * use class keyword
 *
 * Interestingly, class declarations are just syntactic sugar on top of the existing custom type declarations.
 * The Person declaration actually creates a function that has the behavior of the constructor method,
 * which is why typeof Person gives "function" as the result
 *
 * diff with function declaration and class decleration
 * 1. not hoisted: class declaration are not hoisted.
 * 2. strict mode: all code inside class declarations runs in strict mode.
 * 3. nonenumerable: all methods are nonenumerable.
 * 4. all methods lack an internal [[Construct]].
 * 5. calling the class constructor without new throws an error.
 * 6. overwriting the class name within a class throws an error.
 */
// direct equivalent of PersonClass
let PersonType = (function () {
  "use strict";

  const PersonType = function (name) {
    if (typeof new.target === "undefined") {
      throw new Error("Constructor must be called with new.");
    }

    this.name = name;
  };

  Object.defineProperty(PersonType.prototype, "sayName", {
    value: function () {
      if (typeof new.target !== "undefined") {
        throw new Error("Method cannot be called with new.");
      }

      console.log(this.name);
    },
    enumerable: false,
    writable: true,
    configurable: true,
  });

  return PersonType;
})();

class Person {
  constructor(name) {
    // Person = "PPerson" // throws error - cannot overwrite class name inside class
    this.name = name;
  }

  sayName() {
    console.log(this.name);
  }
}

var person = new Person("kcw");
person.sayName();

console.log(person instanceof Person);
console.log(person instanceof Object);

console.log(typeof Person);
console.log(typeof Person.prototype.sayName);
