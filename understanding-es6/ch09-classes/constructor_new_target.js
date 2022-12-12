/**
 * constructor 는 new 없이 호출되지 않기때문에 new.target은 항상 정의되어있지만
 * 매번 같은 값은 아니다.
 *
 * new.target 을 이용하여 추상클래스를 만드는 것도 가능
 */

class Shape {
  constructor() {
    if (new.target === Shape) {
      throw new Error("This class cannot be instantiated directly");
    }
  }
}

class Rectangle {
  constructor(length, width) {
    console.log(new.target === Rectangle);
    console.log(new.target);

    this.length = length;
    this.width = width;
  }
}

class Square extends Rectangle {
  constructor(length) {
    super(length, length);
  }
}

// var obj = new Shape();
var obj = new Rectangle(4, 5);
var obj = new Square(5);
