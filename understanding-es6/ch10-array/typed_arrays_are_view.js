/**
 * typed arrays 는 사실 array buffer에 대한 지정된 타입 view 이다.
 *
 * 8가지 타입 view 가 있다.
 *
 * Constructor Name     Element Size
 * Int8Array            // 1
 * Uint8Array           // 1
 * Uint8ClampedArray    // 1 이 타입은 0~255를 벗어나는 값을 할당할 경우 자동으로 가까운 값(0 or 255)을 지정해줌
 * Int16Array           // 2
 * Uint16Array          // 2
 * Int32Array           // 4
 * Uint32Array          // 4
 * Float32Array         // 4
 * Float64Array         // 8
 */

// constructor with buffer
let buffer = new ArrayBuffer(10),
  view1 = new Int8Array(buffer),
  view2 = new Int8Array(buffer, 5, 2);

console.log(view1.buffer === buffer);
console.log(view2.buffer === buffer);

console.log(view1.byteOffset);
console.log(view2.byteOffset);

console.log(view1.byteLength);
console.log(view2.byteLength);

// constructor with number
let ints = new Int16Array(2),
  floats = new Float32Array(5);

console.log(ints.byteLength);
console.log(floats.byteLength);

// constructor with object(typed array, iterable, array, array-like object)
let ints1 = new Int16Array([25, 50]),
  ints2 = new Int32Array(ints1);

console.log(ints1.buffer === ints2.buffer);

console.log(ints1);
console.log(ints2);

console.log(ints1.byteLength);
console.log(ints1.length);

console.log(ints2.byteLength);
console.log(ints2.length);

console.log(ints1[0]);
console.log(ints2[0]);
