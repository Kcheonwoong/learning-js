/**
 * loop 구문 내에서 사용된 변수는 loop 내에서만 사용하기를 원하지만
 * var 로 선언된 변수는 다르게 동작한다.
 */

// 1. for-loop ==================================================
// var
for (var i = 0; i < 10; i++) {
  console.log(i); // 0 ~ 9
}
console.log(i); // 10 - still accessible

// let
for (let j = 0; j < 10; j++) {
  console.log(j);
}
// console.log(j); // ReferenceError: j is not defined


// 2. functions in for-loop ====================================
// for loop 내에서 함수를 생성해보고 실행해보자
var funcs = [];
for (var i = 0; i < 10; i++) {
  funcs.push(function () {
    console.log(i);
  });
}
// 0 ~ 9 가 찍히는 함수가 실행되는 것을 예상 할 수도 있지만 실제로는 10이 10번 출력된다.
funcs.forEach((f) => f());

// 이를 해결하기 위해서는 출력될 변수를 강제로 copy 하도록 해주는
// IIFE(Immediately Invoked Function Expressions) 즉시 실행함수 표현을 사용해야한다.
// 즉시실행하여 해당 함수에 closure 스코프에 파라마터 값이 복사되도록함
var funcs = [];
for (var i = 0; i < 10; i++) {
  funcs.push(
    // copy and store value
    (function (value) {
      return function () {
        console.log(value);
      };
    })(i)
  );
}
funcs.forEach((f) => f());

// let
var funcs = [];
// let 사용시 한 스텝마다 변수가 선언되어지고 함수는 각각의 선언변수를 가지게 된다.
for (let i = 0; i < 10; i++) {
  funcs.push(function () {
    console.log(i);
  });
}
funcs.forEach((f) => f());


// 3. for-in, for-of ============================================
/**
 * 각 스텝마다 i가 생성 및 할당되는것은 for-in for-if loops 에서도 for-in for-if loops 에서도 동일하다
 */
var funcs = [],
  object = {
    a: true,
    b: true,
    c: true,
  };
// 각 스텝마다 새로운 key binding 이 생성되고
for (let key in object) {
  // 각 함수는 자신만의 변수를 가지게 됨
  funcs.push(function () {
    console.log(key);
  });
}
funcs.forEach((f) => f());

// const in loops
var funcs = [];
// throws an error after one iteration
// const 로 생성된 변수의 값을 변경(새로운 바인딩)하려고 해서 생긴 에러
// for (const i = 0; i < 10; i++) {
//   funcs.push(function () {
//     console.log(i);
//   });
// }

// doesn't cause an error
// loop initializer creates a new binding on each iteration
// 각 스텝마다 새로운 상수 값이 선언됨. 변경되는 것이 아니기 때문에 에러가 안남
for (const key in object) {
  funcs.push(function () {
    console.log(key);
  });
}
funcs.forEach(function (func) {
  func(); // outputs "a", then "b", then "c"
});
