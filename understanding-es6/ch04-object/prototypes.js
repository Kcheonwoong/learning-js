/**
 * Prototypes are the foundation of inheritance in JavaScript.
 *
 * Normally, an object’s prototype is specified when the object is created,
 * via either a constructor or the Object.create() method.
 *
 * es5 add Object.getPrototypeOf()
 * es6 add Object.setPrototypeOf()
 *
 * The actual value of an object’s prototype is stored in an internal-only property called [[Prototype]].
 */

/**
 * Easy prototype access with super references
 * super is a pointer to the current object’s prototype.
 * Attempting to use super outside of concise methods results in a syntax error
 */
let person = {
  getGreeting() {
    return "Hello";
  },
};

// prototype is person
let friend = {
  // getGretting: function(){...} // SyntaxError

  // concise method
  getGreeting() {
    // this is relative. prototype of relative if friend.
    // When friend.getGreeting().call() is called with relative as this,
    // the process starts over again and continues to call recursively until a stack overflow error occurs.
    // return Object.getPrototypeOf(this).getGreeting.call(this) + ", hi!";

    // es6, super reference - refer correct object(person)
    return super.getGreeting() + ", hi!";
  },
};

Object.setPrototypeOf(friend, person);

// prototype is friend
let relative = Object.create(friend);
console.log(person.getGreeting()); // "Hello"
console.log(friend.getGreeting()); // "Hello, hi!"
console.log(relative.getGreeting());
