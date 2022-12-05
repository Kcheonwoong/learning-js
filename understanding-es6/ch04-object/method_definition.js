/**
 * Prior to ES6, the concept of a "method" wasn't formally defined.
 *
 * In ES6, method as a function the has and internal [[HomeObject]] property
 * containing the object to which the method belongs.
 *
 *
 */
// not a method
function shareGreeting() {
  return "Hi!";
}

let person = {
  // method - [[HomeObject]] for getGreeting() is person
  getGreeting() {
    return "Hello";
  },
};

// prototype is person
let friend = {
  // method
  getGreeting() {
    // equal to person.getGreeting() + ", hi!";
    return super.getGreeting() + ", hi!";
  },
};

Object.setPrototypeOf(friend, person);
console.log(friend.getGreeting()); // "Hello, hi!"
