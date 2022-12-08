/**
 * class 와 object literal 에 유사점들이 있는데 그중에 하나가 computed names 를 가질수 있다는것.
 */

let memberName = "sayName";

class Person {
  constructor(name) {
    this.name = name;
  }
  [memberName]() {
    console.log(this.name);
  }
}

let p = new Person("kcw");
p.sayName();

// accessor properties 도 computed name 을 사용가능하다.
let propertyName = "html";

class CustomHTMLElement {
  constructor(element) {
    this.element = element;
  }

  get [propertyName]() {
    return this.element.innerHTML;
  }

  set [propertyName](value) {
    this.element.innerHTML = value;
  }
}
