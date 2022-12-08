/**
 * A convenient aspect of inheriting from built-ins is that any method that
 * returns an instance of the built-in will automatically return a derived class
 * instance instead.
 * 빌트인 상속의 편리한점은 자동으로 파생 클래스의 인스턴스가 리턴된다는것.
 *
 * Behind the scenes, the Symbol.species property is actually making this change.
 * 내부적으로 Symbol.species 가 동작하기 때문이다.
 *
 */

class MyArray extends Array {
  // empty
}
let items = new MyArray(1, 2, 3, 4),
  subitems = items.slice(1, items.length);

console.log(subitems);

console.log(items instanceof MyArray); // true
// MyArray 클래스의 인스턴스로 리턴됨
console.log(subitems instanceof MyArray); // true

/**
 * [Symbol.species]
 *
 * The Symbol.species well-known symbol is used to define a static accessor property that returns a function.
 * That function is a constructor to use whenever an instance of the class must be created inside an instance method
 * (instead of using the constructor).
 *
 * Symbol.species 는 잘 알려진 심볼로 함수를 리턴하는 정적 속성 접근자를 정의 할 때 사용됨.
 * 리턴되는 함수는 인스턴스 메소드 안에서 인스턴스가 생성될때 생성자로서 사용된다
 *
 * Array
 * ArrayBuffer
 * Map
 * Promise
 * RegExp
 * Set
 * Typed arrays
 */

// several built-in types use species similar to this
class MyClass {
  constructor(value) {
    this.value = value;
  }

  static get [Symbol.species]() {
    console.log(this);
    return this;
  }

  // instance method
  clone() {
    // 실제 인스턴스 생성시 사용되는 생성자
    console.log(this.constructor[Symbol.species]); // MyDerivedClass1, MyClass
    // new instance
    return new this.constructor[Symbol.species](this.value);
  }
}

class MyDerivedClass1 extends MyClass {}
class MyDerivedClass2 extends MyClass {
  // Symbol.species 를 재정의 하여 인스턴스 생성시 사용될 생성자를 지정
  static get [Symbol.species]() {
    return MyClass;
  }
}

let instance1 = new MyDerivedClass1("foo");
let clone1 = instance1.clone();
let instance2 = new MyDerivedClass2("bar");
let clone2 = instance2.clone();

console.log(clone1 instanceof MyClass); // true
console.log(clone1 instanceof MyDerivedClass1); // true
console.log(clone2 instanceof MyClass); // true
console.log(clone2 instanceof MyDerivedClass2); // false
