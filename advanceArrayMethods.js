// We already learnt about functions, then we can explore this side of arrays
// These methods takes a function as a value, and these functions called callback functions(CB)
// CB can be made out of method as well as we can create anonymous CB inside method
// Every CB's parameter are first array value and second is index.

// -----------------------------------------------------------------------------

// So we are going to explore ten methods of arrays that are depended on callbacks

// 1. forEach()
// 2. map()
// 3. filter()
// 4. reduce()
// 5. find()
// 6. every()
// 7. some()
// 8. sort()
// 9. fill()
// 10. splice()

// -----------------------------------------------------------------------------

// 1. forEach() :- this method just loops over the array's items, callback shouldn't be retuen anything and it doesn't change original array

// we are using anonymous arrow functions for callbacks
// const arr = [1, 3, 4, 6, 2, 7, 3, 0, 9, 8, 5];

// arr.forEach((v, i) => {
//   console.log(`value is ${v} and index is ${i}`);
// });

// const users = [
//   { name: "Manni", age: 18 },
//   { name: "Tannu", age: 19 },
//   { name: "Arshu", age: 14 },
//   { name: "Mandy", age: 26 },
// ];

// users.forEach((user) => {
//   console.log(`user ${user.name} is ${user.age} years old`);
// });

// -----------------------------------------------------------------------------

// 2. map() :- map used when we need to create an array form existing array and also we want to chagne in arraya. map's callbacks always returns somthing and it also not mutate(change) original array. Then map returns modified new array

// const arr = [1, 3, 4, 6, 2, 7, 3, 0, 9, 8, 5];

// const squaredArray = arr.map((value) => value ** 2);
// console.log(squaredArray);

// if i don't return somthing from callback, we'll recieve array of undefined's
// const arrayOfUndefined = arr.map((value) => {
//   console.log(value);
// });
// console.log(arrayOfUndefined);

// const users = [
//   { name: "Manni", age: 18 },
//   { name: "Tannu", age: 19 },
//   { name: "Arshu", age: 14 },
//   { name: "Mandy", age: 26 },
// ];

// const nameArr = users.map((obj) => obj.name);
// console.log(nameArr);
// -----------------------------------------------------------------------------

// 3. filter() :- filter's callback should be retrun boolean value, if it's returns "true" then that item will be filtered out otherwise if "false" then that item will not be filtered out, after the end filter method returns filtered array and it also not mutate(change) original array

// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const filterArr = arr.filter((value) => value <= 5);
// console.log(filterArr);

// const users = [
//   { name: "Manni", age: 18 },
//   { name: "Tannu", age: 19 },
//   { name: "Arshu", age: 14 },
//   { name: "Mandy", age: 26 },
// ];

// const belowEighteen = users.filter((value) => value.age <= 18);
// console.log(belowEighteen);

// -----------------------------------------------------------------------------

// 4. reduce() :- reduce's callback always returns somthing and callback's parameters are accummulator, currentValue, index. currentValue and index are same thing, but accummulator is what callback reuturns (for first time accummulator is array's first value amd currentValue is array's second value). After the callback we can put optional intial value for accummulator

// const arr = [1, 2, 3, 4, 5];

// const value = arr.reduce((accummulator, value) => accummulator + value);
// console.log(value);
// for above explaination
// accummulator(returned value)       currentValue      return
//            1                             2              3
//            3                             3              6
//            6                             4              10
//            10                            5              15

// const userCart = [
//   { produtId: 7634, price: 18, name: "sumsung-earphones", taxRates: 2.5 },
//   { produtId: 9780, price: 95, name: "air-pods", taxRates: 1.5 },
//   { produtId: 1528, price: 1499, name: "iphone-16", taxRates: 2.5 },
//   { produtId: 5628, price: 1350, name: "mac-pro", taxRates: 4.5 },
// ];

// const shippingTax = 15;

// const totalPrice = userCart.reduce((acc, val) => {
//   const tax = (val.price * val.taxRates) / 100;
//   return acc + val.price + tax;
// }, shippingTax);

// console.log(totalPrice);
// accummulator     currentValue(value + tax)      return
//    15              18 + 0.45 = 18.45            33.45
//    33.45           95 + 1.425 = 96.425          129.875
//    129.875         1499 + 37.475 = 1536.475     1666.35
//    1666.35         1350 + 60.75 =  1410.75      3077.1 (final total price)

// -----------------------------------------------------------------------------
