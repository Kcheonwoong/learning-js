/**
 * A promise is a placeholder for the result for an asynchrounous operation.
 *
 * Promise Life Cycle
 * [[PromiseState]]
 * pending - unsettled
 * fulfilled - operation has completed successfully
 * rejected  - operation didn’t complete successfully
 *
 * Specify action by then()
 */
const fs = require("fs");

function readFile(filePath) {
  return new Promise(function (resolve, reject) {
    fs.readFile(filePath, { encoding: "utf8" }, function (err, content) {
      if (err) {
        reject(err);
        return;
      }

      resolve(content);
    });
  });
}

let promise = readFile("/etc/hosts");
promise
  .then((content) => {
    console.log(content.slice(0, 50));
  })
  .catch((err) => {
    console.log(err);
  });

let promise2 = new Promise(function (resolve, reject) {
  console.log("Promise"); // 1
  resolve();
});

promise2.then(function () {
  console.log("Resolved"); // 3
});

console.log("Hi!"); // 2

// if you want a promise to represent just a single known value
let promise3 = Promise.resolve(42); // returns a promise in the fulfilled state. the rejection handler would never be called
promise3.then(function (value) {
  console.log(value); // 42
});
