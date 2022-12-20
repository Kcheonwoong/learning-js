let possiblyUnhandledRejections = new Map();

// rejection 처리되지않은 promise - rejection 저장
process.on("unhandledRejection", function (reason, promise) {
  possiblyUnhandledRejections.set(promise, reason);
});

// rejection 처리 - rejection 삭제
process.on("rejectionHandled", function (promise) {
  possiblyUnhandledRejections.delete(promise);
});

function handleRejection(promise, reason) {
  promise.catch(function (value) {
    console.log(reason.message);
  });
}

setInterval(function () {
  possiblyUnhandledRejections.forEach(function (reason, promise) {
    console.log(reason.message ? reason.message : reason);
    
    handleRejection(promise, reason);
  });
  possiblyUnhandledRejections.clear();
}, 60000);
