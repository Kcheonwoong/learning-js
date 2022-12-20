/**
 * executor 내부에서 에러가 발생할 경우 reject가 호출됨.
 */
let promise = new Promise(function (resolve, reject) {
  throw new Error("Boom!");
  
  // An implicit try-catch is inside every executor so that the error is caught and then passed
  // to the rejection handler
  //   try {
  //     throw new Error("Boom!");
  //   } catch (err) {
  //     reject(err);
  //   }
});

promise.catch((err) => {
  console.log(err);
});
