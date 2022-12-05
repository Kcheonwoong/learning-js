/**
 * [Symbol.isConcatSpreadable]: boolean
 *
 * this property is a Boolean value,
 * which indicates that an object has a length property and numeric keys,
 * and that its numeric property values should be added individually to the result of a concat() call
 *
 * js concat is designed to concat two arrays
 *
 * concat()
 * The JavaScript specification states that arrays are
 * automatically split into their individual items and all other types are not.
 * 
 * You can also set Symbol.isConcatSpreadable to false on derived array classes to 
 * prevent items from being separated by concat() calls
 */

let color1 = ["red", "blue"],
  color2 = color1.concat(["green", "dark"], "brown");
console.log(color2);

// set up to look like an array. numeric keys, length, Symbol.isConcatSpreadable
let collection = {
  0: "Hello",
  1: "world",
  length: 2,
  [Symbol.isConcatSpreadable]: true,
};

let messages = ["Hi"].concat(collection);
console.log(messages.length); // 3
console.log(messages); // ["hi","Hello","world"]
