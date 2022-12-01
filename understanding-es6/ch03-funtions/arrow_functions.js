/**
 * arrow functions 는 일반적인 function과 약간 다르다.
 *
 * 1. no this, super, arguments, and new.target bindings
 * 2. cannot be called with new - no [[Construct]]
 * 3. no prototype property
 * 4. cannot change this
 * 5. no arguments object. use named and rest parameters
 * 6. no duplicate named parameters - 일반적인 function 은 strict mode 에서만 같은 매개변수 이름이 허용되지 않음
 */

var sum = (a, b) => a + b;
console.log(sum(1, 2));

// wrapping the object literal in parentheses signals
const getObj = () => ({ foo: "bar" });
console.log(getObj());

// iife(immediately invoked function expressions)
let person = ((name) => ({
  getName: function () {
    return name;
  },
}))("kcw");
console.log(person.getName());

// --------------------------------------------------------------
// No this Binding
/**
 * javascript 에서 흔히 하는 실수가 function 내에서 this binding 하는 것이다.
 */
// let PageHandler = {
//   id: "123456",
//   init: function () {
//     // not work!
//     // document.addEventListener(
//     //   "click",
//     //   function (event) {
//     //     console.log("click");

//     //     // 여기서의 this는 event target 이므로 Uncaught TypeError: this.doSomething is not a function 발생.
//     //     // 해당 콜백을 실행 시킨건 event 이다.!
//     //     this.doSomething(event.type); // error
//     //   },
//     //   false
//     // );

//     // 1. solution - bind
//     // document.addEventListener(
//     //   "click",
//     //   // init 의 this를 bind 한 새로운 함수 생성.
//     //   function (event) {
//     //     this.doSomething(event.type);
//     //   }.bind(this),
//     //   false
//     // );

//     // 2. solution - arrow function
//     document.addEventListener(
//       "click",
//       // 아래의 arrow function에서의 this는 init 내의 this 와 같다.
//       (event) => this.doSomething(event.type),
//       false
//     );
//   },
//   doSomething: function (type) {
//     console.log("Handling " + type + " for " + this.id);
//   },
// };

// PageHandler.init();

// --------------------------------------------------------------
// Arrow functions and Arrays
/**
 * 간결하게~
 */
// var result = values.sort(function (a, b) {
//   return a - b;
// });
const values = [2, 1, 5, -1];
var result = values.sort((a, b) => a - b);
console.log(result);

// --------------------------------------------------------------
// no arguments binding
/**
 * Even though arrow functions don’t have their own arguments object,
 * it’s possible for them to access the arguments object from a containing function.
 *
 * Even though the arrow function is no longer in the scope of the function that created it,
 * arguments remains accessible due to scope chain resolution of the arguments identifier.
 *
 * 정리하자면 arrow function은 자신의 arguments object는 없지만
 * scope chain resolution 을 사용하여 해당 arrow function의 포함하고 있는 함수의 arguments object에 접근가능
 */
function createArrowFunctionReturningFirstArg() {
  return () => arguments[0];
}
var arrowFunction = createArrowFunctionReturningFirstArg(5);
console.log(arrowFunction()); // 5

// --------------------------------------------------------------
// identifying arrow function
var comparator = (a, b) => a - b;
console.log(typeof comparator); // "function"
console.log(comparator instanceof Function); // true
// 다른 함수들 처럼 call, apply, bind 사용가능, 하지만 this binding 이 영향을 끼치지 않는다

var sum = (num1, num2) => num1 + num2;
console.log(sum.call(null, 1, 2)); // 3
console.log(sum.apply(null, [1, 2])); // 3

var boundSum = sum.bind(null, 1, 2);
console.log(boundSum.name); // 3
console.log(boundSum()); // 3
