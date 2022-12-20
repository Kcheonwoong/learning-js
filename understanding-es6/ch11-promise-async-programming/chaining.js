// rejection handler throws an error
let p1 = new Promise(function (resolve, reject) {
  throw new Error("Explosion!");
});

p1.catch(function (error) {
  console.log(error.message); // "Explosion!"
  throw new Error("Boom!");
})
  .catch(function (error) {
    console.log(error.message); // "Boom!"
  })
  .finally(() => {
    throw new Error("!");
  })
  .catch((err) => {
    console.log(err);
  })
  .finally(() => {
    console.log("!!");
  });

// returning values
let p2 = Promise.resolve(1);

p2.then((res) => {
  console.log(res);
  return res + 1;
}).then((res) => {
  console.log(res);
});

//  returning promise
let p3 = new Promise(function (resolve, reject) {
  resolve(42);
});
let p4 = new Promise(function (resolve, reject) {
  resolve(43);
});

p3.then(function (value) {
  // first fulfillment handler
  console.log(value); // 42
  return p4;
}).then(function (value) {
  // second fulfillment handler
  console.log(value); // 43
});

/**
 * This pattern is useful when you want to wait until a previous promise has been settled
 * before triggering another promise.
 */
let p5 = new Promise(function (resolve, reject) {
  resolve(42);
});

p5.then(function (value) {
  console.log(value); // 42

  // p5 가 settled 되기전까지 호출되지 않음
  return new Promise(function (resolve, reject) {
    resolve(43);
  });
}).then(function (value) {
  console.log(value); // 43
});
