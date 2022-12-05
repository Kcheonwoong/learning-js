/**
 * [Symbol.match]: returns an array of matches, or null if no match is found
 * [Symbol.replace]: returns a string
 * [Symbol.search]: returns the numeric index of the match, or −1 if no match is found
 * [Symbol.split]: returns an array containing pieces of the string split on the match
 *
 * The four symbol properties are defined
 * on RegExp.prototype as the default implementation that the string methods should use
 */

// effectively equivalent to /^.{10}$/ 아무 글자 10개.
let hasLengthOf10 = {
  [Symbol.match]: function (value) {
    return value.length === 10 ? [value.substring(0, 10)] : null;
  },
  [Symbol.replace]: function (value, replacement) {
    return value.length > 10 ? replacement + value.substring(10) : value;
  },
  [Symbol.search]: function (value) {
    return value.length === 10 ? 0 : -1;
  },
  [Symbol.split]: function (value) {
    return value.length === 10 ? ["", ""] : [value];
  },
};

let message1 = "Hello world", // 11 characters
  message2 = "Hello John"; // 10 characters

let match1 = message1.match(hasLengthOf10),
  match2 = message2.match(hasLengthOf10);
console.log(match1); // null
console.log(match2); // ["Hello John"]

let replace1 = message1.replace(hasLengthOf10, "wow"),
  replace2 = message2.replace(hasLengthOf10, "wow");
console.log(replace1); // "wowd"
console.log(replace2); // "Hello John"

let search1 = message1.search(hasLengthOf10),
  search2 = message2.search(hasLengthOf10);
console.log(search1); // -1
console.log(search2); // 0

let split1 = message1.split(hasLengthOf10),
  split2 = message2.split(hasLengthOf10);
console.log(split1); // ["Hello world"]
console.log(split2); // ["", ""]
