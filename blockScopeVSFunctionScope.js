// 1. Block Scope

// {} is called block (if, loop, else, switch)
// let and const are block scoped, means they can be accesed in block only(not outside of a block)
// var is not block scope(bad thing), means this can be accessed outside of a block

// ex:-
if (true) {
  const a = 2;
  let b = 12;
  var c = 15;
}
// console.log(a); // not defined
// console.log(b);// not defined
// console.log(c); // 15 (bad thing)
//const c = 13; // gives you error because c has already been declared inside if-block 😎

// 2. Function Scope
// var is only accessible inside function.

// ex:-
// function hello() {
//   var greeting = "hello, how are you";
//   console.log(greeting);
// }
// console.log(greeting); // not defined

if (true) {
  var firstName = "Sandeep";
}

if (true) {
  console.log(firstName); // Sandeep
}
