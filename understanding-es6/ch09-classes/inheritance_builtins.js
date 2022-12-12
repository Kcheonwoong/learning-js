/**
 *
 */

// built-in array behavior
var colors = [];
colors[0] = "red";
console.log(colors.length); // 1

// length 속성을 0으로 해버리면 해당 인덱스의 값이 undefined 가 됨
colors.length = 0;
console.log(colors[0]); // undefined

// trying inherit from array in ES5
/**
 The length and numeric properties on an instance of MyArray don’t
 behave the same way they do for the built-in array because this functionality
 isn’t covered by either Array.apply() or assigning the prototype.
 */
function MyArray() {
  // MyArray this 가 먼저 생성된 후, Array.apply를 호출
  Array.apply(this, arguments);
}
MyArray.prototype = Object.create(Array.prototype, {
  constructor: {
    value: MyArray,
    writable: true,
    configurable: true,
    enumerable: true,
  },
});

var colors = new MyArray();
colors[0] = "red";
console.log(colors.length); // 0
colors.length = 0;
// 기존의 Array와 다르게 동작함.
console.log(colors[0]); // "red"

// ES6
// ES6에서는 Array 의 this 가 먼저 생생된 후, 상속받은 클래스 생성자를 수정하는 순서로 진행.
class CustomArray extends Array {}
let arr = new CustomArray();
arr[0] = "red";
console.log(arr.length);

arr.length = 0;
// 기존 Array와 동일하게 동작함
console.log(arr[0]); // undefined
