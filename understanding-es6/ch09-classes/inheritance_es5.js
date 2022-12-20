/**
 * Prior ES6, implemeting inheritance with custome types was an extensive process.
 */
function Rect(length, width) {
  this.length = length;
  this.width = width;
}
Rect.prototype.getArea = function () {
  return this.length * this.width;
};

/**
 * ES5에서의 prototype 상속 방법
Square inherits from Rectangle, and to do so, 
it must overwrite Square.prototype with a new object created from Rectangle.prototype 
as well as call the Rectangle.call() method
 */
// 1. binding
function Square(length) {
  Rect.call(this, length, length);
}
// 2. define Prototype
Square.prototype = Object.create(Rect.prototype, {
  constructor: {
    value: Square,
    enumerable: true,
    writable: true,
    configurable: true,
  },
});

var square = new Square(5);
console.log(square);
console.log(square instanceof Rect);
console.log(square instanceof Square);
console.log(square.getArea());
