"strict mode";
console.time();
function sumOfNaturalNumbersTailRecursive(n, acc = 0) {
  if (n <= 0) return acc;
  return sumOfNaturalNumbersTailRecursive(n - 1, acc + n);
}
console.log(sumOfNaturalNumbersTailRecursive(100000));

// function recursiveSum(n) {
//   if (n <= 0) return 0;
//   return n + recursiveSum(n - 1);
// }
// console.log(recursiveSum(10000));
console.timeEnd();
