/**
 * In ES5, sets and maps by using object properties
 *
 * Problems
 * all object properties must be strings, must be certain no two keys evaluate to the same string.
 *
 * 객체를 set,map 으로 사용하는 것에서 발생한 문제는 객체 속성에 관한 문제 때문이엇으며,
 * 같은 키 값으로 평가되는 값을 사용할 때 문제가 됨.
 */

var map = Object.create(null);
map[5] = "foo";
console.log(map["5"]); // "foo"

var map = Object.create(null),
  key1 = {},
  key2 = {};
map[key1] = "foo"; // key1,key2 는 같은 값("[object Object]")으로 평가됨
console.log(map[key2]); // "foo"

var map = Object.create(null);
map.count = 1;
// checking for the existence of "count" or for a nonzero value?
if (map.count) {
  // code to execute
}