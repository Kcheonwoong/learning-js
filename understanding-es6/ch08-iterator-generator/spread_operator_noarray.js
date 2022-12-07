/**
 * The spread operator works on all iterables
 * and uses the default iterator to determine which values to include.
 * but the spread operator works equally well on any iterable.
 */
var set = new Set([1, 2, 3, 4, 5, 5]),
  array = [...set];
console.log(array);

var map = new Map([
    ["name", "Nicholas"],
    ["age", 25],
  ]),
  array = [...map];
console.log(array);

/**
 * You can use the spread operator in an array literal as many times as you want,
 * and you can use it wherever you want to insert multiple items from aniterable.
 *
 * the original arrays are unchanged.
 * it is the easiest way to convert an iterable into an array
 */
var smallNumbers = [1, 2, 3],
  bigNumbers = [100, 101, 102],
  allNumbers = [0, ...smallNumbers, ...bigNumbers];

console.log(allNumbers.length);
console.log(allNumbers);

var message = "A 𠮷 B",
  messages = [...message];
console.log(messages);
