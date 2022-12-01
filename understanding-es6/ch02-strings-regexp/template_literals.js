/**
 * template literals provide syntax for creating domain-specific languages(DSLs)
 *
 * Mulitiple strings
 * Basic string formatting
 * HTML escaping
 */

const user = "kcw";
const template1 = `this is ${user}'s 
template`;
const template2 = `this is ${user}'s 
                  template`;

console.log(template1);
console.log(template1.length);
console.log(template2);
console.log(template2.length);

// tagged template
// template literal 에 변형을 추가 하여 문자열을 리턴한다.
// 아래의 tag 는 template literal 의 기본적인 동작이 적용되어있음F
function tag(staticStrings, ...args) {
  console.log(staticStrings);
  console.log(staticStrings[1]);
  console.log(staticStrings.raw[1]); // raw 속성을 사용하여 escape sequences 처리 없이 원래의 문자를 엑세스 가능
  console.log(args);

  let result = "";

  for (let i = 0; i < args.length; i++) {
    result = staticStrings[i] + args[i];
  }

  result += staticStrings[staticStrings.length - 1];
  return result;
}

// tagName`` 과 같이 선언시 함수가 호출됨
let name = "cheonwoong",
  myTaggedTemplate = tag`This is ${name}'s tagged template. \n \t wow`;

console.log(myTaggedTemplate);

// String.raw()
// raw string 생성을 위한 메서드로 python의 r'' 태그와 유사한 기능
const str = String.raw`this is \n ${name}'s raw string. `;
console.log(str);
