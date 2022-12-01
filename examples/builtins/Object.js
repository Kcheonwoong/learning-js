/**
 * Object.defineProperty
 * Property Descriptor
 * value        : 속성 값
 * writable     : 속성 쓰기 가능 여부
 * enumerable   : 속성 열거 여부
 * configurable : 속성 설정 가능 여부
 *
 * 객체 잠금
 *  - preventExtensions(obj)
 *      속성추가 불가능
 *      나머지 가능
 *
 *  - seal(obj)
 *      속성추가 불가능
 *      속성삭제 불가능
 *      속성설정 불가능
 *      나머지 가능
 *
 *  - freeze(obj)
 *      속성추가 불가능
 *      속성삭제 불가능
 *      속성설정 불가능
 *      속성값 변경 불가능
 *      속성 읽기만 가능
 */

const obj = {
  //   foo: "bar",
  other: {
    name: "kkk",
    age: 12,
  },
};
console.table(obj);

Object.defineProperty(obj, "foo", {
  value: "bar",
  writable: true,
  enumerable: true,
  configurable: true,
});
console.table(Object.getOwnPropertyDescriptor(obj, "foo"));
console.log(Object.keys(obj)); // ohter, foo

Object.defineProperty(obj, "foo", {
  writable: true,
  enumerable: false,
  configurable: true,
});
console.table(Object.getOwnPropertyDescriptor(obj, "foo"));
console.log(Object.keys(obj)); // foo

// Object.preventExtensions
// Object.preventExtensions(obj);
// obj.hobby = "baseball";
// console.table(obj);

Object.seal(obj);
obj.address = "abc";
obj.foo = "zen";
delete obj.foo;
//seal > Uncaught TypeError 속성 설정 불가능
// Object.defineProperty(obj, "foo", {
//   writable: true,
//   enumerable: true,
//   configurable: true,
// });
console.table(Object.getOwnPropertyDescriptor(obj, "foo"));
console.table(obj);

// Object.freeze(obj);
// obj.foo = "zen";
// console.table(obj);

// --------------------------------------------------------------
// Object.create()

// Object.assign()

// Object.is(a, b)
console.log(+0 === -0); // true
console.log(-0 === -0); // true
console.log(Object.is(+0, -0)); // false
console.log(Object.is(-0, -0)); // true

console.log(NaN === NaN); // false
console.log(Object.is(NaN, NaN)); // true
console.log(Object.is(NaN, 0 / 0)); // true

console.log([] === []); // false
console.log(Object.is([], [])); // false
