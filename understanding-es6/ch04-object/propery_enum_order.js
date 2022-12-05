/**
 * es6 strictly defines the order in which own properties must be returned when thry're enumerated.
 *
 * basic order for own property enumeration
 * the string keys come after the numeric keys
 * 1. all numeric keys in asc order
 * 2. all string keys in the order in which they were added to the object
 * 3. all symbol keys in the order in which they were added to the object
 * 
 * note
 * The for-in loop still has an unspecified enumeration order because not all JavaScript
 * engines implement it the same way. The Object.keys() method and JSON.stringify()
 * are both specified to use the same (unspecified) enumeration order as for-in.
 */
var obj = {
  x: 1,
  0: 1,
  y: 1,
  2: 1,
  z: 1,
  1: 1,
};

obj.a = 1;
console.log(Object.getOwnPropertyNames(obj).join("")); // "012xyza"
