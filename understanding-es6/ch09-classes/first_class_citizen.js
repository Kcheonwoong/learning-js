/**
 In programming, a first-class citizen is a value that can be passed into a function, 
 returned from a function, and assigned to a variable. 

 JavaScript functions are first-class citizens (also called first-class functions), 
 and they’re part of what makes JavaScript unique.F
 */
function createObject(classDef) {
  return new classDef();
}

let obj = createObject(
  class {
    sayHi() {
      console.log("Hi!");
    }
  }
);

obj.sayHi(); // "Hi!"
