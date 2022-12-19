/**
 * 1. Array constructor
 *  생성자에 인자의 갯수에 따라 동작하는 방식이 상이함. -> 헷갈려 실수를 유발 -> Array.of() 도입
 * 2. array literal
 *
 * es6, add Array.of(), Array.from()
 */

// 길이가 2인 array
let items = new Array(2);
console.log(items);
console.log(items.length);
console.log(items[0]);
console.log(items[1]);

// ["2"]
items = new Array("2");
console.log(items);
console.log(items.length);
console.log(items[0]);
console.log(items[1]);

// [1, 2]
items = new Array(1, 2);
console.log(items);
console.log(items.length);
console.log(items[0]);
console.log(items[1]);

// [3, "2"]
items = new Array(3, "2");
console.log(items);
console.log(items.length);
console.log(items[0]);
console.log(items[1]);

// Array.of() - 인자의 개수와 상관없이 동일하게 동작.
// [2]
items = Array.of(2);
console.log(items);
console.log(items.length);
console.log(items[0]);
console.log(items[1]);

// [1, 2]
items = Array.of(1, 2);
console.log(items);
console.log(items.length);
console.log(items[0]);
console.log(items[1]);

/**
 * Array.from(arrayLike[, mapFn[, thisArg]])
 * array-like objects 또는 iterables 를 array로 변환.
 * 두 번째 인자에 함수를 적용하면 각각의 값에 변형을 적용하려 최종 array 획득가능
 */
// es5
// slice() needs only numeric indexes and a length property to function correctly, any array-like object will work
function doES5() {
  var args = Array.prototype.slice.call(arguments);
  console.log(args);
  console.log(typeof args);
  console.log(args instanceof Array);
}
doES5(1, 2, 3);

// es6
function doES6() {
  var args = Array.from(arguments); // ob
  console.log(args);
  console.log(typeof args);
  console.log(args instanceof Array);
}
doES6(1, 2, 3);

// Array.from(arrayLike, mapFn)
function translate() {
  return Array.from(arguments, (value) => value + 1);
}

let numbers = translate(1, 2, 3);
console.log(numbers); // [2, 3, 4]

// Array.from(arrayLike, mapFn, thisArg)
let calculator = {
  add(value) {
    return value + this.diff;
  },
};

let differ = {
  diff: 1,
};

function translate2() {
  return Array.from(arguments, calculator.add, differ);
}
console.log(translate(1, 2, 3)); // [2, 3, 4]

// iterables
let nums = {
  *[Symbol.iterator]() {
    yield 1;
    yield 2;
    yield 3;
  },
};

let nums2 = Array.from(nums, (val) => val + 1);
console.log(nums2);
