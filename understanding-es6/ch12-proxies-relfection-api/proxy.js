/**
 * A Proxy object wraps another object and intercepts operations,
 * like reading/writing properties and others,
 * optionally handling them on its own, or transparently allowing the object to handle them.
 * 
 * 
Internal Method	Handler Method	Triggers when…
[[Get]]	get	reading a property
[[Set]]	set	writing to a property
[[HasProperty]]	has	in operator
[[Delete]]	deleteProperty	delete operator
[[Call]]	apply	function call
[[Construct]]	construct	new operator
[[GetPrototypeOf]]	getPrototypeOf	Object.getPrototypeOf
[[SetPrototypeOf]]	setPrototypeOf	Object.setPrototypeOf
[[IsExtensible]]	isExtensible	Object.isExtensible
[[PreventExtensions]]	preventExtensions	Object.preventExtensions
[[DefineOwnProperty]]	defineProperty	Object.defineProperty, Object.defineProperties
[[GetOwnProperty]]	getOwnPropertyDescriptor	Object.getOwnPropertyDescriptor, for..in, Object.keys/values/entries
[[OwnPropertyKeys]]	ownKeys	Object.getOwnPropertyNames, Object.getOwnPropertySymbols, for..in, Object.keys/values/entries
 */

/**
 * let proxy = new Proxy(target, handler)
 * target – is an object to wrap, can be anything, including functions.
 * handler – proxy configuration: an object with “traps”, methods that intercept operations.
 * – e.g. get trap for reading a property of target, set trap for writing a property into target, and so on.
 */
let user = {
  name: "John",
  _password: "***",
};

user = new Proxy(user, {
  get(target, prop) {
    if (prop.startsWith("_")) {
      throw new Error("Access denied");
    }
    let value = target[prop];
    return typeof value === "function" ? value.bind(target) : value; // (*)
  },
  set(target, prop, val) {
    // to intercept property writing
    if (prop.startsWith("_")) {
      throw new Error("Access denied");
    } else {
      target[prop] = val;
      return true;
    }
  },
  deleteProperty(target, prop) {
    // to intercept property deletion
    if (prop.startsWith("_")) {
      throw new Error("Access denied");
    } else {
      delete target[prop];
      return true;
    }
  },
  ownKeys(target) {
    // to intercept property list
    return Object.keys(target).filter((key) => !key.startsWith("_"));
  },
});

// "get" doesn't allow to read _password
try {
  console.log(user._password); // Error: Access denied
} catch (e) {
  console.log(e.message);
}

// "set" doesn't allow to write _password
try {
  user._password = "test"; // Error: Access denied
} catch (e) {
  console.log(e.message);
}

// "deleteProperty" doesn't allow to delete _password
try {
  delete user._password; // Error: Access denied
} catch (e) {
  console.log(e.message);
}

// "ownKeys" filters out _password
for (let key in user) console.log(key); // name
