/**
 * Generator
 *
 * Generator if a fucntion that returns an iterator.
 * Generator functions are indicated by an asterick character(*) after the function keyword. function *
 *
 * yield keyword new to ES6.
 * yield specifies values the resulting iterator should return when next() is called.
 *
 * g function stop execution after each yield statement.
 *
 */
function* createIterator() {
  yield 1;
  yield 2;
  yield 3;
}

let iter = createIterator();
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());

function* createIter(items) {
  console.log("created");

  for (let i = 0; i < items.length; i++) {
    yield items[i]; // 여기서 값을 리턴하고 stop. 다음 구문으로 이동안함. next() 호출시에 다음 라인으로 이동.
    console.log(i);
  }

  console.log("end");
}

let colors = ["red", "blue", "green"];
let iter2 = createIter(colors); // created
console.log(iter2.next());
console.log(iter2.next());
console.log(iter2.next());
console.log(iter2.next()); // end
console.log(iter2.next());

/**
 * syntax error
 * yield only inside generator.
 */
// function* createIter2(items) {
//     items.forEach((item)=> {
//         yield item + 1;
//         });
// }

// let iter3 = createIter2(colors);
// console.log(iter3.next())
// console.log(iter3.next())
// console.log(iter3.next())
// console.log(iter3.next())

// generator function expressions
let createIter4 = function* (items) {
  for (let i = 0; i < items.length; i++) {
    yield items[i];
  }
};

// generator ojbect methods
let obj = {
  //   createIterator: function* (items) {
  //     for (let i = 0; i < items.length; i++) {
  //       yield items[i];
  //     }
  //   },

  // es5 method shorthand
  *createIterator(items) {
    for (let i = 0; i < items.length; i++) {
      yield items[i];
    }
  },
};

let iter5 = obj.createIterator(colors);
console.log(iter5.next());
console.log(iter5.next());
console.log(iter5.next());
console.log(iter5.next());
