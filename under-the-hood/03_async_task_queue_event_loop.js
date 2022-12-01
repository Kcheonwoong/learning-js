/**
 * Asynchronous, Task Queue, Event Loop
 *
 * Event Loop's order
 *
 *    ┌───────────────────────────┐
 * ┌─>│           timers          │
 * │  └─────────────┬─────────────┘
 * │  ┌─────────────┴─────────────┐
 * │  │     pending callbacks     │
 * │  └─────────────┬─────────────┘
 * │  ┌─────────────┴─────────────┐
 * │  │       idle, prepare       │
 * │  └─────────────┬─────────────┘      ┌───────────────┐
 * │  ┌─────────────┴─────────────┐      │   incoming:   │
 * │  │           poll            │<─────┤  connections, │
 * │  └─────────────┬─────────────┘      │   data, etc.  │
 * │  ┌─────────────┴─────────────┐      └───────────────┘
 * │  │           check           │
 * │  └─────────────┬─────────────┘
 * │  ┌─────────────┴─────────────┐
 * └──┤      close callbacks      │
 *    └───────────────────────────┘
 */

const fs = require("fs");

console.log("start");

// i/o operation
fs.readFile("/etc/hosts", (err, data) => {
  console.log("reading file");
});

process.nextTick(() => console.log("nextTick 1"));

// timers
setTimeout(() => {
  process.nextTick(() => console.log("nextTick 2"));
  console.log("setTimeout 1");
}, 0);
setImmediate(() => console.log("setImmediate"));
setTimeout(() => {
  process.nextTick(() => console.log("nextTick 3"));
  console.log("setTimeout 2");
}, 10);

console.log("hello event loop");

let counter = 0;
const timerLoop = setInterval(() => {
  console.log("setInterval", counter);

  if (counter >= 3) {
    console.log("exiting setInterval");
    clearInterval(timerLoop);
  }

  counter++;
}, 0);

// promise
new Promise((resolve, reject) => {
  console.log("start promise");
  resolve("promise data");
}).then((data) => {
  console.log(data); // promise data
});

console.log("end");

// start
// hello event loop
// start promise
// end
// nextTick 1
// promise data
// setTimeout 1
// nextTick 2
// setImmediate
// setInterval 0
// setInterval 1
// reading file
// setInterval 2
// setInterval 3
// exiting setInterval
// setTimeout 2
// nextTick 3
