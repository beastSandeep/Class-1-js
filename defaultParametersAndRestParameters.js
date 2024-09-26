// 1. Default Parameter
// Old Way
// function add(a, b, c, d) {
//   if (!b) b = 0;
//   if (!c) c = 0;
//   if (!d) d = 0;

//   return a + b + c + d;
// }

// const result = add(2, 3, 10, 10);
// console.log(result);

// New Way
// function add(a = 0, b = 0, c = 0, d = 0) {
//   return a + b + c + d;
// }

// const result = add(12);
// console.log(result);

//
// 2. Rest Parameter
//

function add(a, b, ...c) {
  //console.log(a); // 1
  //console.log(b); // 2
  //console.log(c); // [ 3, 4, 5, 6, 7 ]
  let sum = a + b;
  for (let i = 0; i < c.length; i++) {
    sum = sum + c[i];
  }
  return sum;
}

const result = add(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
console.log(result);
