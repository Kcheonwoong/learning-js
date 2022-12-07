/**
 * [[ Iterator ]]
 * ES6 adds iterators to JS.
 *
 * Iterators are objects with a specific interface designed for iteration.
 * All iterators objects have a next() method that return a result object.
 * The result object has two properties: value(값), done(리턴할 값이 있는지 여부)
 *
 * for-of works with iterators.
 * spread operator(...) uses iterators
 * asynchronous programming can use iterators.
 */

// 기존에 사용하던 방식은 복잡하다.
var colors = ["red", "green", "blue"];
for (var i = 0, len = colors.length; i < len; i++) {
  console.log(colors[i]);
}

// mimic iterator in ES5
function createIterator(items) {
  var i = 0;

  return {
    next: function () {
      console.log(i);

      var done = i >= items.length;
      var value = !done ? items[i++] : undefined;

      return {
        done: done,
        value: value,
      };
    },
  };
}

var iterator = createIterator(colors);
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
