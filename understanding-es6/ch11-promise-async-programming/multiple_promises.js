/**
 * Promise.all()
 * Promise.race()
 */

// Promise.all() accepts iterable(array) of promises,
// and returns a promise that is resolved only when every promise in the iterable is resolved.
// 모든 프로미스가 resolve 됫을 때 then, 하나라도 에러가 낫을 때 catch - 다른 프로미스들을 기다리지 않음.
let p1 = new Promise(function (resolve, reject) {
  resolve(42);
});
let p2 = new Promise(function (resolve, reject) {
  setTimeout(() => {
    resolve(43);
  }, 1000);
});
let p3 = new Promise(function (resolve, reject) {
  //   resolve(44);
  reject(new Error("!"));
});

let p4 = Promise.all([p1, p2, p3]);
p4.then(function (results) {
  console.log(Array.isArray(results)); // true
  for (let res of results) {
    console.log(res);
  }
}).catch((err) => {
  console.log(err);
});

// Promise.race() accepts iterable(array) of promises,
// and returns promise is settled as soon as the first promise is settled
// 가장 먼저 settled 된 프로미스가 반환됨. 에러가 가장 먼저 발생할 경우 catch
let p5 = Promise.race([p2, p3]);
p5.then((res) => {
  console.log(res);
}).catch((err) => {
  console.log(err);
});
