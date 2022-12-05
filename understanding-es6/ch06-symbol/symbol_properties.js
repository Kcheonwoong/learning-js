const uid = Symbol.for("uid");
let obj = {
  [uid]: "12345",
};

console.log(Object.getOwnPropertyNames(obj));
console.log(Object.getOwnPropertySymbols(obj));
