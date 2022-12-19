/**
 * ES5 ===============
 * indexOf()
 * lastIndexOf()
 * limited because you could search for only one value at a time.
 *
 * ES6 ===============
 * find()
 * findIndex()
 * Both matches a condition rather than a value.
 * If you only want to find a value, indexOf() and lastIndexOf() are better choices.
 *
 * fill()
 * copyWithin()
 * The use cases for fill(), copyWithin() may not be obvious to you at this point. 
 * The reason is that these methods originated on typed arrays and were added to regular arrays for consistency.
 */

// find, findIndex with conditions
let numbers = [25, 30, 35, 40, 45];
console.log(numbers.find((n) => n > 33)); // 35
console.log(numbers.findIndex((n) => n > 33)); // 2

// fill(value)
numbers.fill(1);
console.log(numbers);

// fill (value, startIndex)
numbers.fill(2, 2);
console.log(numbers);

// fill (value, startIndex, endIndex)
numbers.fill(3, 2, 4);
console.log(numbers);

// copyWithin() - copy array element values from the array
// paste start index 2, copy start index 0
numbers.copyWithin(3, 0);
console.log(numbers);

numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8];
// paste start index 2, copy start index 0, copy end index
numbers.copyWithin(3, 5, 8); //
// [0, 1, 2, 3, 4, 5, 6, 7, 8]
//               [ 5, 6, 7 ]   - copy index  (5, 8)
//         [ 5, 6, 7 ]         - paste index (3)
// [0, 1, 2, 5, 6, 7, 6, 7, 8] 
console.log(numbers);