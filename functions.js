// function chakki(mall) {
//   if (mall === "gnehu") {
//     return "Atta";
//   }
// }

// console.log(chakki("gnehu"));

function square(num) {
  // num = parameter
  return num * num;
}
console.log(square(4));
// 4 is argument for num parameter
console.log(square(3));
console.log(square(8));

function powerOf(num, power) {
  return num ** power;
}

console.log(powerOf(2, 4));
console.log(powerOf(8, 5));
console.log(powerOf(2, 32));

// Types of Functions

// 1. Function Declaration (basic)
function fucnName(param) {
  //code
}

// 2. Function Expression
const fucnName2 = function (param) {
  //code
};

// 3. Arrow Function (most used)
const fucnName3 = (param) => {
  //code
};

function strToArr(str) {
  const arr = [];
  for (let i = 0; i < str.length; i++) {
    arr.push(str[i]);
  }
  return arr;
}

console.log(strToArr("Sandeep"));
