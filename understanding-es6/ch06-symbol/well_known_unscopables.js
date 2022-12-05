/**
 * The Symbol.unscopables symbol is used on Array.prototype to indicate
 * which properties shouldn’t create bindings inside a with statement.
 */
// 'use strict'
// with statement not allow in strict mode

var values = [1, 2, 3],
  colors = ["red", "green", "blue"],
  color = "black";

// built into ECMAScript 6 by default
Array.prototype[Symbol.unscopables] = Object.assign(Object.create(null), {
  copyWithin: true,
  entries: true,
  fill: true,
  find: true,
  findIndex: true,
  keys: true,
  values: true,
});

with (colors) {
  push(color);
  push(...values);
}
console.log(colors); // ["red", "green", "blue", "black", 1, 2, 3]
