// ES6 introduces block-level(lexical) scoping options to give developers more control over a variable's life cycle
// 블록{} 내에서 선언된 변수는 블록 밖에서 접근할 수 없음

// ===========================================
// let
// ===========================================
// block-level
// 재선언 불가
var count = 20;

// let 은 같은 scope 상에 있는 식별자를 재선언 하지 않는다.
// let count = 10; //SyntaxError: Identifier 'count' has already been declared

{
  // 다른 scope 에서는 error 가 나지 않음
  let count = 0;
  console.log(count); // 0
}

console.log(count); // 20

// ===========================================
// const
// ===========================================
// block-level

const maxItems = 30;

// let 과 동일하게 재선언 불가
// const maxItems = 35; // SyntaxError: Identifier 'maxItems' has already been declared

// const 는 재할당(modify binding) 불가
// maxItems = 35; //TypeError: Assignment to constant variable.

// const 는 선언과 동시에 초기화가 이루어져야함
// const name; // SyntaxError: Missing initializer in const declaration

// object declarations with const
// const 는 바인딩에 대한 변경을 허용하지 않지만 값에 대한 변경은 허용한다.
const person = { name: "Cheonwoong" };
person.name = "kcw"; // work!
// person = { name: "kcw" }; // TypeError: Assignment to constant variable.
