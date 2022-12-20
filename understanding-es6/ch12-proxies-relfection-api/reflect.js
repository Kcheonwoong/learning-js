// Reflect
// Reflect is a built-in object that simplifies creation of Proxy.

// Operation	Reflect call	Internal method
// obj[prop]	Reflect.get(obj, prop)	[[Get]]
// obj[prop] = value	Reflect.set(obj, prop, value)	[[Set]]
// delete obj[prop]	Reflect.deleteProperty(obj, prop)	[[Delete]]
// new F(value)	Reflect.construct(F, value)	[[Construct]]

let user = {
  name: "John",
};

user = new Proxy(user, {
  get(target, prop, receiver) {
    console.log(`GET ${prop}`);
    return Reflect.get(target, prop, receiver); // (1)
  },
  set(target, prop, val, receiver) {
    console.log(`SET ${prop}=${val}`);
    return Reflect.set(target, prop, val, receiver); // (2)
  },
});

let name = user.name; // shows "GET name"
user.name = "Pete"; // shows "SET name=Pete"
