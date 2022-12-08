/**
 * [Symbol.iterator] 
 * iterable is an object with a [Symbol.iterator] property.
 * 
 * ch08 for_of.js 참고
 */
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
