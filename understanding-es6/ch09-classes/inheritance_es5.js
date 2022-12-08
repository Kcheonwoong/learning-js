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
Square inherits from Rectangle, and to do so, 
it must overwrite Square.prototype with a new object created from Rectangle.prototype 
as well as call the Rectangle.call() method
 */
// Rect에 속성 바인딩
function Square(length) {
  Rect.call(this, length, length);
}
// Square prototype 정의
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
