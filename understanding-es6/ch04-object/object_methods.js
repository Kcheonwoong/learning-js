/**
 * One of the design goal of ECMAScript was to avoid both
 * creating new global functions and creating methods on Object.prototype.
 *
 * add new methods to the standard.
 *
 * es6 introduces a couple of new methods on the Object global
 */

// 1. Object.is()
console.log(+0 === -0); // true
console.log(Object.is(+0, -0)); // false

console.log(NaN === NaN); // false - isNaN() was considered to detect NaN
console.log(Object.is(NaN, NaN)); // true

console.log(5 === "5"); // false
console.log(Object.is(5, "5")); //false

// 2. Object.assign()
// Mixin pattern allows the receiver to gain new properties without inheritance
//
// Object.assign() accepts any number of suppliers
// Second supplier overwrite a value from the first supplier
// Object.assign() doesn'y create accesstor properties on receiver
function mixin(receiver, supplier) {
  Object.keys(supplier).forEach(function (key) {
    receiver[key] = supplier[key];
  });
  return receiver;
}

function EventTarget() {
  /*...*/
}
EventTarget.prototype = {
  constructor: EventTarget,
  emit: function (e) {
    console.log("emit", e);
  },
  on: function () {
    /*...*/
  },
};

var myObject = {};
// mixin(myObject, EventTarget.prototype);
Object.assign(myObject, EventTarget.prototype);
myObject.emit("somethingChanged");

// Object.assign() accepts any number of suppliers
var receiver = {};
Object.assign(
  receiver,
  {
    type: "js",
    name: "file.js",
  },
  {
    type: "css",
  }
);
console.log(receiver.type); // "css"
// second supplier overwrite a value from the first supplier
console.log(receiver.name); // "file.js"

var receiver = {},
  supplier = {
    get name() {
      return "file.js";
    },
  };

Object.assign(receiver, supplier);
console.log(Object.getOwnPropertyDescriptor(supplier, "name"));
/**
 * {
  get: [Function: get name],
  set: undefined,
  enumerable: true,
  configurable: true
}
 */
console.log(Object.getOwnPropertyDescriptor(receiver, "name"));
/**
 * Object.assign() doesn'y create accesstor properties on receiver
 * {
  value: 'file.js',
  writable: true,
  enumerable: true,
  configurable: true
}
 */