/**
 * difference of slice ,substring ,substr
 */
let numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

console.log(numbers.slice(2));
console.log(numbers.slice(-2));

console.log(numbers.slice(100)); // empty []
console.log(numbers.slice(-100));

console.log(numbers.slice(5, 7));
console.log(numbers.slice(-3, -1));

console.log(numbers.slice(-3, 1)); // empty []
console.log(numbers.slice(-3, -5)); // empty []

let str = "Hello World!";
console.log(str.substring(6));
console.log(str.substring(-6));

console.log(str.substring(100));
console.log(str.substring(-100));

console.log(str.substring(2, 8));
console.log(str.substring(-4, 2)); // "He"
console.log(str.substring(-4, -2)); // ""
