/**
 * Function constructor allows to dynamically create a new function
 */
var pickFirst = new Function("...args", "return args[0]");
console.log(pickFirst(1, 2)); // 1
