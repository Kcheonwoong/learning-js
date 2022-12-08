/**
 * classes allow you to define accessor properties on the prototype.
 * getter, setter
 */
class CustomHTMLElement {
  constructor(element) {
    this.element = element;
  }
  get html() {
    return this.element.innerHTML;
  }
  set html(value) {
    this.element.innerHTML = value;
  }
}

var descriptor = Object.getOwnPropertyDescriptor(
  CustomHTMLElement.prototype,
  "html"
);
console.log("get" in descriptor); // true
console.log("set" in descriptor); // true
console.log(descriptor.enumerable); // false

// direct equivalent to previous example
let CustomHTMLElement = (function () {
  "use strict";

  const CustomHTMLElement = function (element) {
    if (typeof new.target === "undefined") {
      throw new Error("Constructor must be called with new.");
    }
    
    this.element = element;
  };

  // Object.defineProperty
  Object.defineProperty(CustomHTMLElement.prototype, "html", {
    enumerable: false,
    configurable: true,
    get: function () {
      return this.element.innerHTML;
    },
    set: function (value) {
      this.element.innerHTML = value;
    },
  });

  return CustomHTMLElement;
})();
