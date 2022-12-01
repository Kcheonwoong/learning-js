let re = /\w+(burger)/gi;

console.log(re);
console.log(re.toString());
console.log(re.source); // "ab"
console.log(re.flags); // "gi"

const burgerNames = "ABurger BBurger Cburger";
let result = 0;
while ((result = re.exec(burgerNames))) {
  console.log(result, re.lastIndex);
}
