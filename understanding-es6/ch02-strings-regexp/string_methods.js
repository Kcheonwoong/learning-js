let msg = "Hello world! World";
console.log(msg.length); // 18

console.log(msg.indexOf("o")); // 4
console.log(msg.lastIndexOf("o")); // 14

console.log(msg.startsWith("Hello")); // true
console.log(msg.endsWith("!")); // false
console.log(msg.includes("o")); // true

console.log(msg.startsWith("o")); // false
console.log(msg.endsWith("?")); // false
console.log(msg.includes("x")); // false

console.log(msg.startsWith("o", 4)); // true

// substract 8 from string length 12
console.log(msg.endsWith("o", 8)); // true
console.log(msg.endsWith("r", 8)); // false

console.log(msg.includes("o", 8)); // true
console.log(msg.includes("d!", 8)); // false

// repeat
console.log("x".repeat(3)); // "xxx"
console.log("hello".repeat(2)); // "hellohello"
console.log("abc".repeat(4)); // "abcabcabcabc"

console.log(msg.match(/world/gi));
