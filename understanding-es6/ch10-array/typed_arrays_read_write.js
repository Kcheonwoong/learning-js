/**
 * read/write methods
 *
 * int8
 * getInt8(byteOffset, littleEndian)
 * setInt8(byteOffset, value, littleEndian)
 *
 * uint8
 * getUint8(byteOffset, littleEndian)
 * setUint8(byteOffset, value, littleEndian)
 *
 * int16/uint16
 * int32/uint32
 * float32
 * float64
 * 
 * The DataView object is perfect for use cases that mix different data types in this way. 
 * However, if you’re only using one specific data type, the typespecific views are a better choice.
 */

// 2 bytes array
let buffer = new ArrayBuffer(2),
  view = new DataView(buffer);

view.setInt8(0, 127);
console.log(view.getInt8(0)); // 01111111

view.setInt8(0, 128);
console.log(view.getInt8(0)); // 10000000

view.setInt8(0, 129);
console.log(view.getInt8(0)); // 10000001

view.setInt8(0, 255);
console.log(view.getInt8(0)); // 11111111

view.setInt8(0, 256);
console.log(view.getInt8(0)); // 1 00000000

view.setInt8(0, 257);
console.log(view.getInt8(0)); // 1 00000001


view.setInt8(1, -1);
console.log(view.getInt8(0));  // 00000001
console.log(view.getInt8(1));  // 11111111
console.log(view.getInt16(0)); // 00000001 11111111
