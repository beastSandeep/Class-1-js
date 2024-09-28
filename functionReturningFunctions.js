// function main() {
//   function subFunc() {
//     console.log("Hello");
//   }

//   return subFunc;
// }

// const func = main();
// func();

// you can do this thing also
// main()();

// ex:- 1
// function main() {
//   function subFunc() {
//     return "Hello World";
//   }

//   return subFunc;
// }

// const func = main();
// const str = func();
// console.log(str);

// console.log(main()());

//
// ex:- 2
//
function main() {
  return function () {
    return "Hello World";
  };
}

console.log(main()());
