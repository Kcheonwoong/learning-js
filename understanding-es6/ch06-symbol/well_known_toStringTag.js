/**
 * One of the most interesting problems in JavaScript has been the existence
 * of multiple global execution environments.
 *
 * iframe을 포함한 페이지의 경우 데이터 전달에는 문제가 없지만 타입을 다룰 때 문제가 발생한다.
 * iframe에서 다른 페이지로 array를 전달하는 경우 다른 영역에 있는 array 의 instanceof Array 값이 false 가 됨.
 */

function isArray(value) {
  return Object.prototype.toString.call(value) === "[object Array]";
}
console.log(isArray([]));

function Person(name) {
  this.name = name;
}

var me = new Person("Nicholas");
console.log(me.toString());

// Symbol.toStringTag
Person.prototype[Symbol.toStringTag] = "Person";
console.log(me.toString());

Person.prototype.toString = function () {
  return this.name;
};
console.log(me.toString());
console.log(Person.prototype.toString.call(me));
console.log(Object.prototype.toString.call(me));
