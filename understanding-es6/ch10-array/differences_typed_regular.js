/**
 * typed arrays are not regular arrays.
 *
 * Array.isArray() returns false.
 *
 * 차이점
 * 1. typed arrays 와 regular arrays의 차이점을 길이를 변경 할 수 있는지 여부.
 * 2. typed check - invalid 한 값이 할당될 경우 0 이 대신 채워짐
 * 3. missing methods - concat(), shift(), unshift(), pop(), push()
 * 4. additinal methods - set(), subarray()
 */
let ints = new Int16Array(5);
console.log(ints.toString());

ints.set([1, 2], 2);
console.log(ints.toString());

subints = ints.subarray(1, 4);
console.log(subints.toString());

let floats = new Float32Array(5);
console.log(floats.toString());

let ints1 = new Int16Array(["what"]);
console.log(ints1.toString());

let floats1 = new Float32Array(["?"]);
console.log(floats1.toString());
