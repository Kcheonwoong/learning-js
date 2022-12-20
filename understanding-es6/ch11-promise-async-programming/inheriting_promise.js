/**
 * if extends Promise, you can use methods named success, failure insteads of then, catch
 */
class MyPromise extends Promise {
  success(resolve, reject) {
    return this.then(resolve, reject);
  }

  failure(reject) {
    return this.catch(reject);
  }
}

let promise = new MyPromise(function (resolve, reject) {
  resolve(32);
});

promise
  .success((res) => {
    console.log(res);
  })
  .failure((err) => {
    console.log(err);
  });
