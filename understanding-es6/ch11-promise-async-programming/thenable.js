/**
 * thenable 은 then 메서드를 가진 객체
 */

// thenable to promise
let thenable = {
  then: function (resolve, reject) {
    resolve(42);
  },
};

// resolve calls the thenable.then method
let p1 = Promise.resolve(thenable);
p1.then(function (value) {
  console.log(value); // 42
});
