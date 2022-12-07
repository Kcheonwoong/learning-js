/**
 * The DOM has a NodeList type that represents a collection of elements in a document.
 *
 * Both NodeList objects and arrays use the length property
 * and both use bracket notation to access individual items.
 *
 * Internally, however, a NodeList and an array behave quite differently, which has led to a lot of confusion.
 *
 * NodeList includes a default iterator that behaves in the same manner as the array default iterator.
 */

var divs = document.getElementsByTagName("div");
for (let div of divs) {
  console.log(div.id);
}
