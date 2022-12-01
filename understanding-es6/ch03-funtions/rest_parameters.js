/**
 * Unnamed parameters
 *
 * 초기 javscript 에서는 arguments object 를 이용하여 함수의 파라미터를 검사하였다.
 */

let book = {
  title: "Understanding ECMAScript 6",
  author: "Nicholas C. Zakas",
  year: 2016,
};

// --------------------------------------------------------------
/**
 * ES5
 *
 * This function mimics the pick() method from the Underscore.js library,
 * which returns a copy of a given object with some specified subset of the
 * original object’s properties.
 */
// function pick(object) {
//   let result = Object.create(null);

//   // start at the second parameter
//   for (let i = 1, len = arguments.length; i < len; i++) {
//     result[arguments[i]] = object[arguments[i]];
//   }
//   return result;
// }
// console.log(pick(book, "author", "year")); // { author: 'Nicholas C. Zakas', year: 2016 }

// --------------------------------------------------------------
/**
 * ES6
 *
 * A rest parameters dots(...) preceeding a named parameter
 * 
 * restrictions:
 * 1. only one rest parameter, and rest parameter must be last
 *    function pick(object, ...keys, last) 와 같은 선언은 불가능
 * 
 * 2. rest parameters cannot be used in an object literal setter
 *    객체 literal의 setter 메서드에 사용 불가. object literal setter 매개변수는 single argument로 제한되어있다.
 *    let object = {
 *      // Syntax error: Can't use rest param in setter
 *      set name(...value) {
 *        // do something
 *      }
 *    };
 *    
 */
function pick(object, ...keys) {
  let result = Object.create(null);

  for (let i = 0, len = keys.length; i < len; i++) {
    result[keys[i]] = object[keys[i]];
  }
  return result;
}
console.log(pick(book, "author", "year")); // { author: 'Nicholas C. Zakas', year: 2016 }
