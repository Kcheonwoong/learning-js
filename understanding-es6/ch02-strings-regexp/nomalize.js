/**
 * æ 와 ae는 상호교환 가능한 문자이지만 표준화 하기 전에는 엄격히 다른 문자이다.
 *
 * ES6에서는 표쥰화를 제공함.
 * NFC(Normalization Form Canonical Composition) - default  정준결합
 * NFD(Normalization Form Canonical Decomposition)          정준분해
 * NFKC(Normalization Form Compatibility Composition)       호환결합 - 기호나 특수문자도 정규화 진행
 * NFKD(Normalization Form Compatibility Decomposition)     호환분해
 *
 * Regular Expression u Flag
 * 정규화 작업시에 16bit 코드 유닛이 기본이 되기때문에 유니코드 사용시 문제가 될 수 있다.
 * 이를 위해 u Flag를 사용.
 */

// nomalize
const one = "\u00e9"; // é
const two = "\u0065\u0301"; // é

console.log(one, two);
console.log(one === two);
console.log(one.normalize(), two.normalize());
console.log(one.normalize() === two.normalize());

// regexp - u Flag
let text = "𠮷";
console.log(text.length); // 2

// 한 글자인지 아닌지 검사
console.log(/^.$/.test(text)); // false
console.log(/^.$/u.test(text)); // true - u Flag 사용: 16bit 문자 대신 code point가 적용된 정규식이 된다.

function length(text) {
  const result = text.match(/[\s\S]/gu); // 공백이거나 공백이 아닌 문자와 매칭 [ ... ]
  return result ? result.length : 0;
}

console.log(length("abc")); // 3
console.log(length("𠮷bc")); // 3

