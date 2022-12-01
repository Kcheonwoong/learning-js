/**
 * hoist: 끌어올리다.
 * 
 * var, function, import
 *
 * @param {*} condition
 * @returns
 */
function getValue(condition) {
  // var value; // js Engine에 의해 실제로 변수가 선언되는 위치(변수 선언이 맨위로 끌어올려진다(hoisting))

  if (condition) {
    var value = "blue";
    // other code
    return value;
  } else {
    /**
     * 실제 변수가 선언되지 않았을 경우에는 아래와 같은 에러가 남
     * ReferenceError: value is not defined
     */
    return value; //undefined
  }
}

console.log(getValue(false));
