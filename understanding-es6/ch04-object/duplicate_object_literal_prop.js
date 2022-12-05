/**
 * in es5, strict mode, duplication of object literal property throw error.
 * in es6, the duplicate property check was removed. last property of the given name becomes the prop's actual value
 */
"use strict";
var person = {
  name: "Nicholas",
  name: "Greg", // no error in ES6 strict mode
};
console.log(person.name); // "Greg"
