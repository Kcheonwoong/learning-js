/**
 * In ES6 adds a Set type that is ordered list of value without dup.
 * you can’t directly access an item by index like you can with an array
 */

let set = new Set();
set.add(5);
set.add("5");
set.add(5);
console.log(set.size);

// Sets don’t coerce values to determine whether they’re the same
// Internally, the comparison uses the Object.is() method
console.log(Object.is({}, {}));

let set2 = new Set(),
  key1 = {},
  key2 = {};

set2.add(key1);
set2.add(key2);
console.log(set.size);

// e Set constructor actually accepts any iterable object as an argument
let set3 = new Set([1, 2, 3, 4, 5, 1, 2, 3, 4]);
console.log(set3.size);
console.log(set3.keys());
console.log(set3.values());

// .has
console.log(set3.has(5));

// .delete
set3.delete(5);
console.log(set3);

// .clear
set3.clear();
console.log(set3.size);

// forEach
/**
 * Set 은 keys를 갖지않기 때문에 forEach 에서 다른 Array forEach 와 다르게 콜백의 1,2 번째 인자가 같음
 */
let set4 = new Set([3, 2, 1, 4, 5]);
set4.forEach((v1, v2, s) => {
  console.log(v1, v2, s);
});

let arr = [3, 2, 1, 4, 5];
arr.forEach((v, i, arr) => {
  console.log(v, i, arr);
});

/**
 * eliminate dup of arr
 */
let arr2 = [1, 2, 3, 4, 5, 6, 6];
let arr3 = [...new Set(arr2)];
console.log(arr2);
console.log(arr3);

/**
 * Weak Sets
 *
 * The Set type could be called a strong set because of the way it stores object
 * references. Storing an object in an instance of Set is effectively the same as
 * storing that object inside a variable. As long as a reference to that Set instance
 * exists, the object cannot be garbage-collected to free memory
 *
 * strong set: 객체 참조를 저장. 저장하는 동안 가비지 컬렉터에 의해 객체가 정리되지 않음
 * weak set  : primitive type은 저장 불가. 참조가 set에만 남아있을 때 가비지 컬렉터에 의해 정리되는것을 허용
 * 
 * only object
 * no size property
 * no iterable - no keys, values, forEach, for-of
 * no way to determine the contents of a weak set
 * 
 * 객체 참조 tracking 할 때 사용.
 */

// strong set
let strongSet = new Set(),
  key = { foo: "bar" };

strongSet.add(key);
console.log(strongSet.size); // 1

// eliminate original reference
key = null;
console.log(strongSet.size); // 1
console.log(key);

// get the original reference back
key = [...strongSet][0];
console.log(key);

// weak set
let weakSet = new WeakSet(),
  foo = {};
weakSet.add(foo);
console.log(weakSet.size); // undefined
console.log(weakSet.has(foo)); // true

// weakSet.delete(foo);
// console.log(weakSet.has(foo)); // false

foo = null;
console.log(weakSet.has(foo)); // false
