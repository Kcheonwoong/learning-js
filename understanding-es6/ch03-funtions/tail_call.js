/**
 * In ES6, engine optimization changes the tail call system.
 * A tail call is when a function is called as the last statement in another function
 *
 * ES5 에서 함수 내에서 다른 함수를 실행 시키면 call stack이 계속 커져만 갔다.
 *
 * ES6(strict mode) 에서 아래의 조건을 만족 하는한 새로운 스택프레임을 생성하는 대신,
 * 현재의 스택프레임이 클리어되고 재사용되게끔하여 call stack 사이즈를 줄였다.
 *
 * 1. tail call은 현재 스택의 변수에 접근하지 않는다.
 * 2. tail call을 사용하는 함수는 tail call을 리턴하고 더이상을 작업을 하지 않는다.
 * 3. tail call의 리턴값이 함수의 값으로 리턴된다.
 *
 * tail call 이 주로 사용되는 곳은 recursive function이다.
 */
"use strict";

function doSomethingElse() {
  console.log("doSomethingElse");
}

function doSomething() {
  console.log("doSomething");
  return doSomethingElse(); // tail call
}

doSomething();
console.log("end");

// cannot be optimized
// function factorial(n) {
//   if (n <= 1) {
//     return 1;
//   } else {
//     // not optimized - must multiply after returning
//     return n * factorial(n - 1);
//   }
// }

// optimized tail call
// function factorial(n, p = 1) {
//   if (n <= 1) {
//     return 1 * p;
//   } else {
//     let result = n * p;
//     // optimized
//     return factorial(n - 1, result);
//   }
// }

// factorial(10000);
function sumOfNaturalNumbersTailRecursive(n, acc = 0) {
  if (n <= 0) return acc;
  return sumOfNaturalNumbersTailRecursive(n - 1, acc + n);
}

console.log(sumOfNaturalNumbersTailRecursive(10000));
