/**
 * [Symbol.toPrimmitive]: function(hint){ return number or string }
 * hint: one of "number", "string", "default"
 *
 * JavaScript frequently attempts to convert objects into primitive values implicitly
 * when you apply certain operations( + , / , - , ==).
 *
 * For instance, when you compare a string to an object using the double equals (==) operator,
 * the object is converted into a primitive value before comparing.
 *
 * ES6 exposes that value(making it changable) through the Symbol.toPrimitive
 *
 * For most standard objects, number mode has the following behaviors, which are listed in order by priority:
 * 1. call valueOf() if primitive return it.
 * 2. otherwise, call toString() if primitive return it,
 * 3. otherwise, throw an error.
 *
 * string mode
 * 1. call toString().
 * 2. call valueOf().
 * 3. throw an error.
 *
 * In many cases, standard objects treat default mode as equivalent to number mode (except for Date, string mode)
 * Default mode is used only for the == operator
 */

function Temperature(degrees) {
  this.degrees = degrees;
}

Temperature.prototype[Symbol.toPrimitive] = function (hint) {
  switch (hint) {
    case "string":
      console.log("string");
      return this.degrees + "\u00b0"; // degrees symbol
    case "number":
      console.log("number");
      return this.degrees;
    case "default":
      console.log("default");
      return this.degrees + " degrees";
  }
};

var freezing = new Temperature(32);
var freezing2 = new Temperature(32);

console.log(freezing); // Temperature { degrees: 32 }
console.log(freezing + "!"); // "32 degrees!" (default mode)
console.log(freezing / 2); // 16 (number mode)
console.log(String(freezing)); // "32°" (string mode)
console.log(freezing == "32 degrees"); // true (default mode)
console.log(freezing === "32 degrees"); // false
