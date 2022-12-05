/**
 * When you’re using destructuring to declare variables using var, let, or const,
 * you must supply an initializer.
 *
 * syntax error!
 * let { type, name };
 *
 */

let node = {
  type: "Identifier",
  name: "foo",
};

let otherNode = {
  type: "id2",
  name: "bar",
};

// optionally define a default value
let { type, name, value = true } = node;
console.log(type); // "Identifier"
console.log(name); // "foo"
console.log(value); // true

// assign different values using destructuring
({ type, name } = otherNode);
console.log(type); // "id2"
console.log(name); // "bar"

// different names
let { type: localType, name: localName, value: localValue = false } = node;
console.log(localType);
console.log(localName);
console.log(localValue);

// The outputInfo() function is called with a destructuring assignment expression
function outputInfo(value) {
  console.log(value === node);
}
outputInfo(({ type, name } = node)); // true
console.log(type); // "Identifier"
console.log(name); // "foo"

/**
 * nested object destructuring
 */
let nestedNode = {
  type: "Identifier",
  name: "foo",
  loc: {
    start: {
      line: 1,
      column: 1,
    },
    end: {
      line: 1,
      column: 4,
    },
  },
};

let {
  loc: { start: localStart },
} = nestedNode;

console.log(localStart.line); // 1
console.log(localStart.column); // 1
