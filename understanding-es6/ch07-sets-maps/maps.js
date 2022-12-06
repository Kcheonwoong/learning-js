/**
 * In ES6 adds Map type that is ordered list of key-value pairs(any type).
 *
 * calling Object.is() method to determine equivalence of keys.
 *
 * set, get, has, delete, clear
 * 
 * 객체만을 키로 사용할 경우에는 WeakMap이 최선의 선택. 하지만 forEach 나 size 속성 및 clear 호출이 불가능
 */
let map = new Map();
map.set("title", "Understanding ECMAScript6");
map.set("year", 2022);
console.log(map);

console.log(map.get("title")); // "Understanding ECMAScript6"
console.log(map.get("titleee")); // undefined

console.log(map.has("year")); // true

console.log(map.delete("ear")); // false
console.log(map.delete("year")); // true
console.log(map);

map.clear();
console.log(map);

// object as a key
let map2 = new Map(),
  key1 = {},
  key2 = {};

map2.set(key1, 5);
map2.set(key2, 42);
console.log(map2.get(key1)); // 5
console.log(map2.get(key2)); // 42

// init
let map3 = new Map([
  ["name", "kcw"],
  ["age", 32],
]);
console.log(map3);

// forEach
map3.forEach((v, k, m) => {
  console.log(v, k, m);
});

/**
 * Weak Map
 * every key must be an object.
 * only weak map keys, not weak map values, are weak references
 * there is no way to verify that a weak map is empty, because it doesn’t have a size property.
 *
 * The most useful place to employ weak maps is when you’re creating an
 * object related to a particular DOM element in a web page.
 *
 * One practical use of weak maps is to store data that is private to object instances
 */
let weakMap = new WeakMap();
let element = {};
weakMap.set(element, "a");
console.log(weakMap);
console.log(weakMap.has(element)); // true
console.log(weakMap.get(element)); // "a"
element = null;
console.log(weakMap.has(element)); // false
// using DOM
// let weakMap = new WeakMap(),
//   element = document.getElementById(".element");
// map.set(element, "original");

// let value = map.get(element);
// console.log(value);

// element.parentNode.removeChild(element);
// element = null;

// private object data
function Person(name) {
  this._name = name;
}
Person.prototype.getName = function () {
  return this._name;
};

// ES5 - wrap the definition of Person
/**
 * The actual data is safe, even though this._id is exposed publicly.
 * The big problem with this approach is that the data in privateData
 * never disappears because there is no way to know when an object instance is destroyed
 */
var Person = (function () {
  var privateData = {},
    privateId = 0;

  function Person(name) {
    Object.defineProperty(this, "_id", { value: privateId++ });
    privateData[this._id] = { name: name };
  }

  Person.prototype.getName = function () {
    return privateData[this._id].name;
  };

  return Person;
})();

let p1 = new Person("kcw");
console.log(p1);
console.log(p1.getName());
// console.log(p1._id);
// console.log(Person.privateData); // not accessible outside the IIFE.

// ES6 - WeakMap
const WeakPerson = (function () {
  let privateData = new WeakMap();

  function Person(name) {
    // this(instance) as a key
    privateData.set(this, { name });
  }
  Person.prototype.getName = function () {
    return privateData.get(this).name;
  };

  return Person;
})();

let p2 = new WeakPerson("kcw");
console.log(p2);
console.log(p2.getName());
