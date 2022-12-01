/**
 * ES5 또는 이전에는 function이 new 와 함께 사용되는지에 따라 다른 목적으로 사용되었다.
 * new 를 사용할 경우 this object 가 생성되고 리턴된다.
 *
 * Javascript 는 두가지 내부 메소드가 있다. [[Call]], [[Construct]] - constructors라 불리기도 함
 * new 와 함께 함수가 호출될 경우 [[Construct]] 가 호출되고
 * 그렇지 않을 경우 [[Call]] 이 호출된다.
 * Arrow function 처럼 모든 함수가 [[Construct]] 메소드를 가지고 있는건 아니다.
 */
function Person(name) {
  this.name = name;
}

const notPerson = Person("kcw");
const person = new Person("kcw");

console.log(notPerson); // undefined
console.log(person); // Person { name: 'kcw' }

// --------------------------------------------------------------
// ES5 - determining how a function was called
/**
 * [[Construct]] 메서드는 새로운 instance를 만들고 this 에 할당한다.
 * 하지만 new 없이 함수가 호출될 수 있기에 아래의 this 검사 방식은 완전하지 못하다
 */
function PersonES5(name) {
  if (this instanceof PersonES5) {
    this.name = name;
  } else {
    throw new Error("Must use new with Person");
  }
}

// console.log(PersonES5("kcw")); // throw error
console.log(new PersonES5("kcw"));

// call function without new
const p = new PersonES5("kwak"); // PersonES5 { name: 'kwak' }
console.log(p);
const notP = PersonES5.call(p, "kim"); // no error! // PersonES5 { name: 'kim' } undefined
console.log(p, notP);

// --------------------------------------------------------------
// ES6
/**
 * new.target metaproperty - identifying function calls using new
 * [[Construct]] 메서드 호출시 new.target은 new operator 의 타겟으로 채워진다
 * [[Call]] 메서드 호출시 new.target is undefined
 */
function PersonES6(name) {
  if (typeof new.target !== "undefined") {
    // specific constructor
    //   if (new.target === PersonES6) {
    this.name = name;
  } else {
    throw new Error("PersonES6 cannot be called as function");
  }
}

const p2 = new PersonES6("kcw");
// const notP2 = PersonES6("kcw"); // throw error
// PersonES6.call(p2, "kim"); // throw error
