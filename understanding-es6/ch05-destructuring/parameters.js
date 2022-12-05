/**
 * common pattern is to create an options
 */

function setCookie(name, value, options) {
  options = options || {};

  let secure = options.secure,
    path = options.path,
    domain = options.domain,
    expires = options.expires;
}

function setCookie(name, value, { secure, path, domain, expires }) {}
// js engine actually does above code
// function setCookie(name, value, options) {
//   let { secure, path, domain, expires } = options; // if options is undefined, error occur!
// }

function setCookie(
  name,
  value,
  {
    secure = false,
    path = "/",
    domain = "example.com",
    expires = new Date(Date.now() + 360000000),
  } = {}
) {
  console.log(name, value, secure, path, domain, expires);
}

setCookie("foo", "bar");
