/**
 * Classes and functions are similar in that they have two forms: declarations and expressions.
 *
 * Functions have an expression form that doesn’t require an identifier after function;
 * similarly, classes have an expression form that doesn’t require an identifier after class
 */

let Person = class {
  constructor(name) {
    this.name = name;
  }
  sayName() {
    console.log(this.name);
  }

  // [Symbol.toStringTag] = "Person";
};

let person = new Person("Nicholas");
person.sayName(); // outputs "Nicholas"
console.log(person);
for (let p in person) {
  console.log(p);
}
console.log(person.toString());
console.log(person instanceof Person); // true
console.log(person instanceof Object); // true

console.log(typeof person);
console.log(typeof Person); // "function"
console.log(typeof Person.prototype.sayName); // "function"

/**
 In this example, the class expression is named PersonClass2. 
 The PersonClass2 identifier exists only within the class definition
 */
let PersonClass = class PersonClass2 {
  constructor(name) {
    this.name = name;
  }
  sayName() {
    console.log(this.name);
  }
};
console.log(typeof PersonClass);
console.log(typeof PersonClass2);

/**
 direct equivalent of PersonClass named class expression
 A named class expression uses its name in the const definition, 
 so PersonClass2 is defined for use only inside the class.
 */
// let PersonClass = (function () {
//   "use strict";

//   const PersonClass2 = function (name) {
//     if (typeof new.target === "undefined") {
//       throw new Error("Constructor must be called with new.");
//     }
//     this.name = name;
//   };

//   Object.defineProperty(PersonClass2.prototype, "sayName", {
//     value: function () {
//       if (typeof new.target !== "undefined") {
//         throw new Error("Method cannot be called with new.");
//       }
//       console.log(this.name);
//     },
//     enumerable: false,
//     writable: true,
//     configurable: true,
//   });

//   return PersonClass2;
// })();


/**
 * Another use of class expressions is creating singletons by immediately invoking the class constructor.
 * This pattern allows you to use the class syntax for creating singletons 
 * without leaving a class reference available for inspection.
 */
let p = new (class {
  constructor(name) {
    this.name = name;
  }
  sayName() {
    console.log(this.name);
  }

  [Symbol.toStringTag] = "Person";
})("Nicholas");

p.sayName(); // "Nicholas"

console.log(p);
console.log(p.toString());
console.log(p instanceof Person);
console.log(p instanceof Object);

console.log(typeof p);
