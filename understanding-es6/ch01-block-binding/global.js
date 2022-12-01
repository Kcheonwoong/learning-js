/**
 * Global Block Binding
 * global scope 에서 var <> let,const 가 어떻게 다르게 동작 하는가
 */

// var
var RegExp = "Hello!";
// global scope에서 var 를 사용할 경우 이미 존재하는 글로벌 변수를 overwrite 할 수 있다.
console.log(window.RegExp); // Hello!

// let
let RegExp = "Hello!";
// let 을 사용한 선언은 global RegExp 를 가려버리게 되지만 window.RegExp 은 변경되지 않음
console.log(RegExp === window.RegExp); // false


// 여러 frames 또는 windows 에 걸쳐 변수를 사용하고 싶을 때 global scope 에서 var 를 사용하는 경우가 있다.