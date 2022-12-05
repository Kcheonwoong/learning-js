/**
 * string
 * number
 * boolean
 * null
 * undefined
 * symbol
 *
 * ES6 introduces symbols as a primitive type.
 * symbols began as a way to create private object members.
 * symbols do add non-string values for property names.
 * they don't have a literal form.
 *
 * symbols ars primitive values, new Symbol() throws an error.
 */

// A symbol’s description is stored internally in the [[Description]] property
let firstName = Symbol("first name");
console.log(typeof firstName === "symbol");
console.log(firstName); // "Symbol(first name)"

// use a computed object literal property
let person = {
  [Symbol("age")]: 0,
  [firstName]: "Nicholas",
};

console.log(person);
console.log(Object.getOwnPropertyNames(person)); // []

// make the property read only
Object.defineProperty(person, firstName, { writable: false });
console.log(person[firstName]); // "Nicholas"
person[firstName] = "Kwak";
console.log(person[firstName]); // "Nicholas"

let lastName = Symbol("last name");
Object.defineProperties(person, {
  [lastName]: {
    value: "Zakas",
    // writable: false, // default
  },
});

console.log(person[lastName]); // "Zakas"
person[lastName] = "Kwak";
console.log(person[lastName]); // "Zakas"
