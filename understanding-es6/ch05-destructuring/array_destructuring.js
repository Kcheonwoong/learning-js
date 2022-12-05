/**
 * similar to object desctructuring, it just uses array literal syntax.
 */
let colors = ["red", "green", "blue"];

// desctructuring
let [firstColor, secondColor] = colors;
console.log(firstColor);
console.log(secondColor);

// omit, default
let [, , thirdColor, fourthColor = "dark"] = colors;
console.log(thirdColor);
console.log(fourthColor);

// swapping variables in ECMAScript 6
let a = 1,
  b = 2;
[a, b] = [b, a];
console.log(a); // 2
console.log(b); // 1

// nested array
let nestedColors = ["red", ["green", "lightgreen"], "blue"];
[firstColor, [secondColor]] = nestedColors;
console.log(firstColor); // "red"
console.log(secondColor); // "green"

// rest items
let [startColor, ...restColor] = colors;
console.log(startColor, restColor);

// cloning
// es5
var clonedColors = colors.concat();
console.log(clonedColors);
// es6
var [...clonedColors] = colors;
console.log(clonedColors);
