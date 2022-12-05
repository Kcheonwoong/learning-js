/**
 * you might want different parts of your code to share symbols. For
 * example, suppose you have two different object types in your application
 * that should use the same symbol property to represent a unique identifier
 * ECMAScript 6 provides a global symbol registry that you can access at any time.
 */

// Symbol.for()
/**
 * The Symbol.for() method first searches the global symbol registry
 * to see whether a symbol with the key "uid" exists. If so, the method returns the existing symbol.
 * If no such symbol exists, a new symbol is created and registered to the global symbol registry using the specified key.
 * The new symbol is then returned
 */
console.log(Symbol("id") === Symbol("id"));

let uid = Symbol.for("uid");
let obj = {};

obj[uid] = "12345";
console.log(obj[uid]);
console.log(uid);
// Symbol.keyFor - retrieve the key associated with a symbol in the global symbol registry
console.log(Symbol.keyFor(uid));

let uid2 = Symbol.for("uid");
console.log(uid === uid2);
console.log(Symbol.keyFor(uid2));

let uid3 = Symbol("uid");
console.log(uid === uid3);
console.log(Symbol.keyFor(uid3));
