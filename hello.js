/* This is the original one. not yet improve.
const sayHello = function () {
  console.log("Hello, world");
}
sayHello();
*/


// let's improve it
const sayHello = function (name) {
  console.log("Hello, " + name);
}
sayHello("Caliban");
sayHello("Miranda");
sayHello("Ferdinand");


//return & console.log
// console.log:
const sayHelloToConsole = function (name) {
  console.log("Hello, " + name);
}
sayHelloToConsole("JohMary");


//return:
const returnSayHello = function (name) {
  return "Hello, " + name;
}
const greeting = returnSayHello("Mary");
console.log(greeting);


