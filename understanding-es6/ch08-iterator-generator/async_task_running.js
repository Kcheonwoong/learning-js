/**
 * Much of the excitement around generators is directly related to asynchronous programming.
 *
 * The traditional way to perform asynchronous operations is to call a function that has a callback
 */
let fs = require("fs");

function run(taskDef) {
  // create the iterator
  let task = taskDef();

  // start the task
  let result = task.next();
  console.log(result);

  // recursive function to keep calling next()
  function step() {
    // if there's more to do
    if (!result.done) {
      if (typeof result.value === "function") {
        // define callback
        result.value(function (err, data) {
          if (err) {
            result = task.throw(err);
            return;
          }

          console.log(data);
          result = task.next(data);
          step();
        });
      } else {
        result = task.next(result.value);
        step();
      }
    }
  }
  // start the process
  step();
}

function readFile(filename) {
  return function (callback) {
    fs.readFile(filename, callback);
  };
}

/**
 * This example performs the asynchronous readFile() operation
 * without making any callbacks visible in the main code.
 * Aside from yield, the code looks the same as synchronous code.
 *
 * Just understand the theory behind the task running.
 * Another new feature in ECMAScript 6, promises, offers more flexible ways of scheduling asynchronous tasks
 */
run(function* () {
  let contents = yield readFile("/etc/hostname");
  console.log(contents);
  console.log("Done");
});
