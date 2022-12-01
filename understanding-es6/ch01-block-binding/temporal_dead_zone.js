/**
 * TDZ(Temporal Dead Zone)
 * let, const 로 선언된 변수의 초기화 구문 전까지의 구간
 * 해당 구간에서 변수에 접근할 경우 Reference error 발생.
 * 변수가 declaration 은 되었지만 initialization 되지 않았기 때문
 * 
 * var
 * 1. Creation Phase : declaration, initialize - undefined
 * 2. Execution Phase: assignment
 * 
 * let
 * -------tdz-------
 * 1. Creation Phase : declaration
 * -----------------
 * 2. Execution Phase: initialize - undefined
 * 3.                  assignment
 * 
 * const
 * -------tdz-------
 * 1. Creation Phase : declaration
 * -----------------
 * 2. Execution Phase: initialize, assignment
 */

// ---tdz---
console.log(typeof value); // ReferenceError: Cannot access 'value' before initialization
// ---------
let value = "blue"; // 위에서 발생한 에러로 인해 해당 구문이 실행되지 않음
