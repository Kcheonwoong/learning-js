class Collection {
  constructor() {
    this.items = [];
  }

  *[Symbol.iterator]() {
    // delegate values() iterator of the items
    yield* this.items.values();
  }
}

let li = new Collection();
li.items.push(1);
li.items.push(2);
li.items.push(3);

for (let i of li) {
  console.log(i);
}
