/**
 * collection iterators
 * arrays, maps, sets
 *
 * entries() : key-value pairs
 * keys()    : keys
 * values()  : values - default iterators for collection types
 */
let arr = ["red", "green", "blue"];
let set = new Set([1234, 5678, 9012]);
let map = new Map();
map.set("title", "Understanding ECMAScript 6");
map.set("format", "ebook");

// entries()
// [index, value]
for (let entry of arr.entries()) {
  console.log(entry);
}

// [value, value]
for (let entry of set.entries()) {
  console.log(entry);
}

// [key, value]
for (let entry of map.entries()) {
  console.log(entry);
}

// keys()
// index
for (let entry of arr.keys()) {
  console.log(entry);
}

// value
for (let entry of set.keys()) {
  console.log(entry);
}

// key
for (let entry of map.keys()) {
  console.log(entry);
}

// values()
// value
for (let entry of arr.values()) {
  console.log(entry);
}

// value
for (let entry of set.values()) {
  console.log(entry);
}

// value
for (let entry of map.values()) {
  console.log(entry);
}

// same as using arr.values()
for (let value of arr) {
  console.log(value);
}
// same as using set.values()
for (let num of set) {
  console.log(num);
}
// same as using map.entries()
for (let [k, v] of map) {
  console.log(k + ": " + v);
}

// string iterators
var message = "A 𠮷 B";

// double byte char is treated as two code units.
for (let i = 0; i < message.length; i++) {
  console.log(message[i]);
}

// es6 support unicode
for (let i of message) {
  console.log(i);
}

/**
 * 유니코드가 포함된 문자열의 길이 - ch02-string_resgexp.nomalize.js
 */
function length(text) {
  const result = text.match(/[\s\S]/gu); // 공백이거나 공백이 아닌 유니코드 문자와 매칭 [ ... ]
  return result ? result.length : 0;
}
