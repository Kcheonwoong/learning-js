/**
 * rest parameters
 * allow to arguments should be combined into an array
 *
 * spread operator
 * allow spread array into parameters
 */

const values = [1, 2, 5, 10];

// ES5
console.log(Math.max.apply(Math, values));
// ES6
console.log(Math.max(...values));
console.log(Math.max(...values, 100));
