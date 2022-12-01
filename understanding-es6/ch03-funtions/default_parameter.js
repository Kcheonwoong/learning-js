/**
 * Functions in JavaScript are unique in that they allow any number of parameters to be passed
 * regardless of the number of parameters declared in the function definition
 *
 * javascript function 은 함수 정의시 선언한 매개변수와 상관없는 갯수 만큼을 함수 호출시 전달 가능한 것이 특징이다.
 */
function makeRequest(url, timeout, callback) {
  /**
   * 이 함수에서는 timeout, callback 을 optional 하게 받으려 하고 있다.
   * timeout에 매개값을 전달하지 않을 경우 undefined 이므로 2000가 default 하게 적용된다.
   * 하지만, 만약 timeout이 0으로 매개값에 전달된다면 이 또한 2000으로 적용된다. << flaw!
   * 이를 해결하기 위해 typeof 를 사용하면 원하는 대로 safe 하게 동작할 수 있지만 코드의 양이 많아지고 지저분해진다.
   */

  //   timeout = timeout || 2000;
  //   callback = callback || function () {};

  timeout = typeof timeout !== "undefined" ? timeout : 2000;
  callback = typeof callback !== "undefined" ? timeout : function () {};
}

// --------------------------------------------------------------
/**
 * Default parameter values in ES6
 *
 * ES6부터는 함수 매개변수에 디폴트값을 지정 할 수 있다.
 */
function request(url, timeout = 2000, callback) {
  console.log(url, timeout, callback);
}
request("http://localhost:8080");
// timeout을 default 로 하고 callback 만 매개 값을 적용하는 것도 가능하다. 매개변수 위치에 undefined 삽입
request("http://localhost:8080", undefined, function () {});
// 단, null 의 경우에는 default 값이 사용되지 않고 null이 들어간다.
request("http://localhost:8080", null, function () {});

// --------------------------------------------------------------
/**
 * Arguments object
 *
 * The arguments object is always updated in non-strict mode
 * to reflect changes in the named parameters.
 * Thus, when first and second are assigned new values,
 * arguments[0] and arguments[1] are updated accordingly.
 *
 * ES5 strict mode 에서는 파라미터 변경값을 reflection 하지 않는다.
 *
 * ES6 default parameter values 사용시에 ES5 strict mode 와 같은 방식으로 동작한다.
 */
// function mixArgs(first, second) {
function mixArgs(first, second = "c") {
  //   "use strict";

  console.log(first, second, arguments);
  console.log(first === arguments[0]);
  console.log(second === arguments[1]);
  first = "c";
  second = "d";
  console.log(first === arguments[0]);
  console.log(second === arguments[1]);
  console.log(first, second, arguments);
}
mixArgs("a", "b"); // [Arguments] { '0': 'a', '1': 'b' }
// true
// true
// true > false in strict mode
// true > false in strict mode

mixArgs("a"); // arguments 에는 paremeter 전달된 값만 반영된다. [Arguments] { '0': 'a' }

// --------------------------------------------------------------
/**
 * Default parameter expressions
 *
 * default parameter value 값에서 직접 함수를 호출하여 값을 할당 할 수 있다.
 */
function getValues() {
  console.log("call getValues");
  return 1;
}
function add(first, second = getValues()) {
  return first + second;
}
// add 함수 호출시에 parameter에 등록한 함수가 호출된다.
console.log(add(1)); // 2
console.log(add(1, 2)); //3

// --------------------------------------------------------------
/**
 * Previous parameter can be used in later parameter
 *
 * 첫 번째 인자가 나중 인자에 사용 가능(반대로 후위 parameter로 이전 parameter에 할당 불가.)
 * 이를 응용하면 default paramter에 적용한 함수의 인자로 previous paramter 전달 가능
 */
function substract1(first, second = first) {
  return first - second;
}
console.log(substract1()); // NaN
console.log(substract1(1)); // 0
console.log(substract1(1, 2));

function pow(base, exponent = 1) {
  return Math.pow(base, exponent);
}
function substract2(first, second = pow(first)) {
  return first - second;
}
console.log(substract2(2));
console.log(substract2(2, 3));
console.log(substract2(2, pow(3, 2)));

// 반대의 경우 parameter-specific TDZ(let과 유사한 동작 방식) 로 인한 에러 발생
// declaration - intialization - assignment
function add(first = second, second) {
  return first + second;
}
console.log(add(1, 1)); // 2
// console.log(add(undefined, 1)); // throws an error

// behind  the scences
/**
    // JavaScript representation of call to add(1, 1)
    let first = 1;
    let second = 1;

    // JavaScript representation of call to add(undefined, 1)
    let first = second; // second가 아직 initialized 되지 않았기 때문에 Reference Error.
    let second = 1;
 */
