/**
 * Typed arrays are special purpose arrays designed to work with numeric types.
 *
 * the numbers were stored in a 64-bit floating-point format and to 32-bit integers as needed.
 * ES6 Typed Array 는 WebGL version 과는 다른 Typed Array 지만 유사성이 있다.
 *
 * Javascript numbers are stored in IEEE 754 format,
 * which uses 64 bits to store a floating-point respresentation of the number.
 * This format represents integers and floats in JS.
 *
 * Typed arrays: 8 numeric types for storage, manipulation.
 * int8
 * uint8 - unsigned 8-bit integer
 * int16
 * uint16
 * int32
 * uint32
 * float32
 * float64
 *
 * To use them, create array buffer to store the data.
 */

/**
 * Array Buffer - memory location
 * array buffer 는 생성시에 정확한 바이트 숫자를 명시해야하며, 데이터는 바꿀수 있어서 길이는 바꾸지 못함.
 */
let buffer = new ArrayBuffer(10); // allocate 10 bytes
console.log(buffer);
console.log(buffer.byteLength);

let buffer2 = buffer.slice(2, 5); // index: 2,3,4
console.log(buffer2);
console.log(buffer2.byteLength);

/**
 * Array Buffer with View
 * array buffer가 메모리 위치를 나타낸다면, view는 이러한 메모리를 조작하기 위한 인터페이스다.
 *
 * DataView는 일반적인 view type 으로 8가지 데이터 타입 모두에서 작업가능한 view 이다.
 */
let buffer3 = new ArrayBuffer(10),
  view = new DataView(buffer3), // bytes 1 ~ 10
  view2 = new DataView(buffer3, 5, 2); // bytes 5, 6 버퍼에 대해 부분적으로 엑세스 가능
console.log(view);
console.log(view.byteLength);
console.log(view.byteOffset);
console.log(view.buffer);
console.log(view.buffer == buffer3);

console.log(view2);
console.log(view2.byteLength);
console.log(view2.byteOffset);
