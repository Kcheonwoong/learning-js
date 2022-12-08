/**
 * You can use extends with any expression as long as
 * the expression resolves to a function with [[Construct]] and a prototype.
 */

// Rectangle is defined as an ECMAScript 5–style constructor, and Square is a class.
// Rectangle has [[Construct]] and a prototype, the Square class can still inherit directly from it.
/**
function Rectangle(length, width) {
  this.length = length;
  this.width = width;
}
Rectangle.prototype.getArea = function () {
  return this.length * this.width;
};

class Square extends Rectangle {
  constructor(length) {
    super(length, length);
  }
}

var x = new Square(3);
console.log(x.getArea()); // 9
console.log(x instanceof Rectangle); // true
 */

// 이러한 특성을 이용하여 mixin 패턴 적용
let serializableMixin = {
  serialize() {
    return JSON.stringify(this);
  },
};
let AreaMixin = {
  getArea() {
    return this.length * this.width;
  },
};

function mixin(...mixins) {
  var base = function () {};
  Object.assign(base.prototype, ...mixins);
  return base;
}

class Square extends mixin(AreaMixin, serializableMixin) {
  constructor(length) {
    super();
    this.length = length;
    this.width = length;
  }
}

var s = new Square(5);
console.log(s.getArea());
console.log(s.serialize());
