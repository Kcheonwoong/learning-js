/**
 * common methods
 * copyWithin() findIndex() lastIndexOf() slice()
 * entries() forEach() map() some()
 * fill() indexOf() reduce() sort()
 * filter() join() reduceRight() values()
 * find() keys() reverse()
 *
 * typed array have additinal checks for numeric type safety and typed array is returned.
 */
let ints = new Int16Array([25, 50]),
  mapped = ints.map((v) => v * 2);

console.log(mapped.length); // 2
console.log(mapped[0]); // 50
console.log(mapped[1]); // 100
console.log(mapped instanceof Int16Array); // true // [Symbol.species]

let ints1 = [...ints];
console.log(ints1);
console.log(ints1 instanceof Array);

/**
 * of(), from() methods
 * all typed arrays have static of(), from() methods that works like the Array.of(), Array.from()
 */
let ints2 = Int16Array.of(25, 50),
  floats = Float32Array.from([1.2, 3, 5]);
console.log(ints2 instanceof Int16Array);
console.log(floats instanceof Float32Array);
