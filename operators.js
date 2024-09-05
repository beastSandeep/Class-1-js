let sum = 4 + 5;
// result operands  operator

// A. Airhmatic Operator
// 1. (+)   addition
// 2. (-)   suubtraction
// 3. (*)   multiplication
// 4. (/)   division
// 5. (**)  exponentiation
console.log(2 ** 3);
// 6. (%)   modulos (remainder)
console.log(26 % 26);
// 7. (++)  increment
let i = 3;
console.log(i++, ++i);
// 8. (--)  dicrement

// B. Assignment Operator (Airhmatic Operators with =)
// 1. (=)     ex. x=y (x and y are just variables)
// 2. (+=)    ex. x+=y   same as   x=x+y
let x = 2;
let y = 1;
x += y;
console.log(x);
// 3. (-=)    ex. x-=y   same as   x=x-y
// 4. (*=)    ex. x*=y   same as   x=x*y
// 5. (**=)   ex. x**=y  same as   x=x**y
// 6. (/=)    ex. x/=y   same as   x=x/y
// 7. (%=)    ex. x%=y   same as   x=x%y

// C. Comparision Operator
// 1. (==)   equal to
// 2. (!=)   not equal to
// 3. (===)  equal value and type
console.log("3" === 3);
// 4. (!==)  not equal value and type
// 5. (>)    greater than
// 6. (<)    less than
// 7. (>=)   greater than or equals to
console.log(3 <= 3);
// 8. (<=)   less than or equals to
// 9. (?:)   ternary operator

// D. Logical Operator
// 1. (&&)  logical And / And operator
// 2. (||)  logical Or / Or operator
// 3. (!)   logical Not / Not operator
console.log(!false);

let drink = 2 <= 1 ? "milk" : "soda";

console.log(drink);
