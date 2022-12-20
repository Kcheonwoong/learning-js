// NoreJS Rejection Handling
/**
 * 2 events on the process object
 * - unhandledRejection
 * rejection handler 가 없을 때
 * Emitted when a promise is rejected and no rejection handler is called within one turn of the event loop
 *
 * - rejectionHandled
 * rejection handler 가 나중에 호출될 때
 * Emitted when a promise is rejected and a rejection handler is called after one turn of the event loop
 */

let rejected = Promise.reject(new Error("Boom!!"));
// at this point, rejected is unhandled

// 주석시에 UnhandledPromiseRejectionWarning 에러 발생
// rejected.catch((value) => {
//   console.log(value);
// });

process.on("unhandledRejection", function (reason, promise) {
  console.log(reason.message);
  console.log(rejected === promise);
});

// let rejected;

// process.on("rejectionHandled", function (promise) {
//   console.log(rejected === promise); // 2 true
// });

// rejected = Promise.reject(new Error("BOOOOM!"));

// setTimeout(function () {
//   rejected.catch(function (v) {
//     console.log(v.message); // 1 BOOOOM!
//   });
// }, 1000);

/**
 * Browser
 * type: unhandledrejection, rejectionhandled
 * event
 *      .promise
 *      .reason
 */