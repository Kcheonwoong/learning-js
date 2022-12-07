// Passing arguments to Iterators
/**
 * next() 메소드에 인자 전달시 제너레이터 안의 yield 에 값이 전달.
 * iter_next_order.png 참고
 */
function* createIter() {
  let first = yield 1;
  let second = 0;

  try {
    second = yield first + 2; // error!
  } catch (err) {
    console.log(err);
  }

  yield second + 3;
}

var iter = createIter();
// 첫 번째 yield 값을 리턴하고 stop
console.log(iter.next());
// 첫 번째 yield 자리의 변수에 값을 전달하고 두 번째 yield 값을 리턴
console.log(iter.next(2));
// 두 번째 yield 자리의 변수에 값을 전달하고 세 번째 yield 값을 리턴
console.log(iter.next(3));
console.log(iter.next());

// Throwing Error
/**
 * Iterators can implement a throw() method that instructs the iterator to throw an error when it resumes.
 * throw() method returned a result object just like the next() method.
 */
var iter = createIter();
console.log(iter.next());
console.log(iter.next(1));
console.log(iter.throw(new Error("Boom!")));
console.log(iter.next());

// Generator return
/**
 * the last call to next() on an iterator returns undefined,
 * but you can specify an alternate value by using return as you would in any other function.
 *
 * spread operator and for-of ignore any value by a return. stop without reading the value.
 */
function* createIterator() {
  yield 1;
  return 0; // value:0, done: true
}
var iter = createIterator();
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());

// Delegating Generators
/**
 * combining the values from two iterators.
 * generators can delegate to ohter generators using a special form of yield with an asterisk(*)
 * Generator delegation also lets you make further use of generator return values.
 */
function* createNumberIter() {
  yield 1;
  yield 2;

  return 3;
}
function* createColorIter() {
  yield "red";
  yield "blue";
}
function* createRepeatingIter(count) {
  for (let i = 0; i < count; i++) {
    yield `repeat-${i}`;
  }
}
function* createCombinedIter() {
  // delegate and result
  let result = yield* createNumberIter();
  console.log(result);

  // yield* createColorIter();
  yield* createRepeatingIter(result);

  return 0;
}
var iter = createCombinedIter();
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
