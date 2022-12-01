/**
 * ES6 전까지 javascript strings는 16bit(2byte) sequences code-unit 이 한 글자를 나타냈다.
 * length property 나 charAt() 메서드가 16-bit code units에 근거한다.
 * unicode의 등장으로 위의 방법으로 값을 가져오면 뜻하지 않은 결과 값이 나옴
 *
 * codePointAt() 을 사용하면 full code point 값을 알 수 있으며 코드 유닛이 1개인지 2개인지 확인 가능
 */

let utf8 = "한글";
console.log(utf8.charAt(0)); // "한"

console.log(utf8.charCodeAt(0)); // 54620
console.log(utf8.charCodeAt(1)); // 44544

console.log(utf8.codePointAt(0)); // 54620
console.log(utf8.codePointAt(1)); // 44544
console.log();

let utf16 = "🦁a";
console.log(utf16.length); // 3 코드유닛 3개로 이루어져 있음.
console.log(/^.$/.test(utf16)); // false 두개의 문자로 인식하여 false

console.log(utf16.charAt(0)); // ""
console.log(utf16.charAt(1)); // ""

console.log(utf16.charCodeAt(0)); // 55358
console.log(utf16.charCodeAt(1)); // 56705
console.log(utf16.charCodeAt(2)); // 97

// codePointAt returns the full code point
console.log(utf16.codePointAt(0)); // 129409 🦁에 대한 코드 포인트
console.log(utf16.codePointAt(1)); // 56705
console.log(utf16.codePointAt(2)); // 97      a에 대한 코드 포인트

function isStartWithUTF16(c) {
  return c.codePointAt(0) > 0xffff;
}

console.log(isStartWithUTF16(utf8));
console.log(isStartWithUTF16(utf16));

console.log(String.fromCodePoint(129409));
