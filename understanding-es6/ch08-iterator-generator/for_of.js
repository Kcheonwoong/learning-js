/**
 * iterable is an object with a [Symbol.iterator] property.
 *
 * [Symbol.iterator] specifies a function that return an iterator for the given object.
 * All collection objects(arrays, sets, maps, strings) are iterables in ES6, they have default iterator specified.
 *
 * for-of calls next()
 * The loop continues this process until the returned object’s done property is true
 */
let str = "helloworld";
for (const s of str) {
  console.log(s);
}

let values = [1, 2, 3];
let iterator = values[Symbol.iterator](); // default iterator
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());

function isIterable(object) {
  return typeof object[Symbol.iterator] === "function";
}
console.log(isIterable([1, 2, 3]));
console.log(isIterable("Hello"));
console.log(isIterable(new Map()));
console.log(isIterable(new Set()));
console.log(isIterable(new WeakMap()));
console.log(isIterable(new WeakSet()));

let collection = {
  items: [],

  // iterator
  //   [Symbol.iterator]() {
  //     var i = 0;

  //     return {
  //       next: () => {
  //         console.log(i);

  //         var done = i >= this.items.length;
  //         var value = !done ? this.items[i++] : undefined;

  //         return {
  //           done: done,
  //           value: value,
  //         };
  //       },
  //     };
  //   },

  // generator
  *[Symbol.iterator]() {
    for (let item of this.items) {
      yield item;
    }
  },
};

collection.items.push(1);
collection.items.push(2);
collection.items.push(3);
for (let i of collection) {
  console.log(i);
}
