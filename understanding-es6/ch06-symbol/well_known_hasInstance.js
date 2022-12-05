/**
 * [Symbol.hasInstance]: fucntion
 *
 * Every function has Symbol.hasInstance method
 * The method is defined on Function.prototype so all functions inherit the default behavior for the instanceof property
 */

let obj = {};

console.log(obj instanceof Array);
// equal to the following
console.log(Array[Symbol.hasInstance](obj)); // instanceof operator 가 이 메소드 호출의 short-hand 이다.

function Person() {}
// use Object.defineProperty() to overwrite a nonwritable property
Object.defineProperty(Person, Symbol.hasInstance, {
  value: function (v) {
    return false;
  },
});

let p = new Person();
console.log(p instanceof Person); // false
