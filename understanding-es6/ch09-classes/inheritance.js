/**
 * classes make inheritance easier to implement by using familiar "extends" keyword
 *
 * Classes that inherit from other classes are referred to as derived classes.
 * Derived classes require you to use super() if you specify a constructor;
 * if you don’t, an error will occur.
 * 상속하는 클래스에서는 super를 호출해서 생성자를 구체화해야함. super 호출 하지 않으면 에러.
 *
 * If you choose not to use a constructor,
 * super() is automatically called for you with all arguments.
 * 생성자 미작성시 자동적으로 super 를 호출함.
 *
 *  class Square extends Rectangle {
 *      // no constructor
 *  }
 *
 *  // is equivalent to
 *  class Square extends Rectangle {
 *      constructor(...args) {
 *          super(...args);
 *      }
 *  }
 *
 * super() 사용시 유의할 점
 * 1. super() 는 파생클래스 생성자에서만 호출할수있음.
 * 2. super() 는 생성자 내에서 this 에 접근하는 코드 전에 호출되어야함.
 * 3. super() 호출을 피하는 유일한 방법은 생성자에서 객체를 리턴하는 것.
 */
class Rect {
  constructor(length, width) {
    this.length = length;
    this.width = width;
  }
  getArea() {
    console.log("Rect.getArea");
    return this.length * this.width;
  }
}

class Square extends Rect {
  constructor(length) {
    // equivalent of Rect.call(this, length, length) in es5
    super(length, length);
  }

  // override getArea
  getArea() {
    console.log("Square.getArea");
    // call Rect.getArea
    return super.getArea();
  }
}
var square = new Square(5);
console.log(square);
console.log(square.getArea());
console.log(square instanceof Square);
console.log(square instanceof Rect);
