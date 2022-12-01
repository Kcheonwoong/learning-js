/**
 * ES5 에서는 strict mode 적용시 블록내에서 함수 선언이 불가.
 *
 * ES6 에서는 block-level declaration 이 가능하며, 같은 블록 내에서 접근 가능
 */

// "use strict";

if (true) {
  console.log(typeof doSomething); // "function"
  function doSomething(z) {
    console.log(z)
    let a = 1;
    console.log(a);
  }
  doSomething(22);
}

console.log(typeof doSomething); // "undefined" in strict mode, but in non-strict mode, hoisted to global > "function"
