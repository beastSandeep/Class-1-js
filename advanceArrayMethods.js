// We already learnt about functions, then we can explore this side of arrays
// These methods takes a function as a value, and these functions called callback functions(CB)
// CB can be made out from method as well as we can create anonymous CB inside method
// Every CB's parameter are first array value and second is index.

// -----------------------------------------------------------------------------

// So we are going to explore ten methods of arrays that are depended on callbacks

// 1.  forEach()
// 2.  map()
// 3.  filter()
// 4.  reduce()
// 5.  find()
// 6.  every()
// 7.  some()
// 8.  sort()
// 9.  fill()
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

// 2. map() :- map used when we need to create an array form existing array and also we want to chagne in array. map's callbacks always returns somthing and it also not mutate(change) original array. Then map returns modified new array

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

// const totalPrice = userCart.reduce((acc, obj) => {
//   const tax = (obj.price * obj.taxRates) / 100;
//   return acc + obj.price + tax;
// }, shippingTax);

// if we not provide initial value of accummulator than it will be array's first item

// console.log(totalPrice);
// accummulator     currentValue(value + tax)      return
//    15              18 + 0.45 = 18.45            33.45
//    33.45           95 + 1.425 = 96.425          129.875
//    129.875         1499 + 37.475 = 1536.475     1666.35
//    1666.35         1350 + 60.75 =  1410.75      3077.1 (final total price)

// -----------------------------------------------------------------------------

// 5. find() :- find's callback should be retrun boolean value, if it's returns "true" then that item will be returned out otherwise if "false" then undefined will be returned, it also not mutate(change) original array

// this method is similar to filter(), but one diffrence is this only give us sigle value where condition meets true, but filter() returnes an array of condition satisfied elements

// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const lessThanFive = arr.find((value) => value > 5);
// console.log(lessThanFive);

// const users = [
//   { id: 2938745, name: "Manni", age: 18 },
//   { id: 9567854, name: "Tannu", age: 19 },
//   { id: 4567343, name: "Arshu", age: 14 },
//   { id: 8234523, name: "Mandy", age: 26 },
// ];

// const user = users.find((user) => user.id === 9567854);
// console.log(user);

// -----------------------------------------------------------------------------

// 6. every() :- every's callback should be retrun boolean value, if it's returns "true" for all items then "true" will be returned out otherwise if "false" then "false" will be returned, it also not mutate(change) original array

// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const isAllElementsLessThan11 = arr.every((value) => value < 11);
// console.log(isAllElementsLessThan11);

// const users = [
//   { id: 2938745, name: "Manni", age: 18 },
//   { id: 9567854, name: "Tannu", age: 19 },
//   { id: 4567343, name: "Arshu", age: 14 },
//   { id: 8234523, name: "Mandy", age: 26 },
// ];

// const isAllUserAbove18 = users.every((user) => user.age >= 18);
// console.log(isAllUserAbove18);

// -----------------------------------------------------------------------------

// 7. some() :- some's callback should be retrun boolean value, if it's returns "true" for just one item then "true" will be returned out otherwise if "false" then "false" will be returned, it also not mutate(change) original array

// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const isOneOfTheElementsGreaterThanFive = arr.some((value) => value > 5);
// console.log(isOneOfTheElementsGreaterThanFive);

// const users = [
//   { id: 2938745, name: "Manni", age: 18 },
//   { id: 9567854, name: "Tannu", age: 19 },
//   { id: 4567343, name: "Arshu", age: 14 },
//   { id: 8234523, name: "Mandy", age: 26 },
// ];

// const isOneOfTheUserBelow18 = users.some((user) => user.age < 10);
// console.log(isOneOfTheUserBelow18);

// -----------------------------------------------------------------------------

// 8. sort() :- sort() is just used for sorting array, if we user only direct sort() on array we will get accending orderd array according to ASCII Table, if we want to sort array according to it's value than we have to put a CB inside sort(), and it's paramets are jsut first and second items of an array and CB has to return a diffrence in numbers, (a-b) for accending , (b-a) for decending

// ASCII Table
// characters : numbering
// "0" : 48

// "9" : 57
// ":" : 58
// ";" : 59
// "<" : 60
// "=" : 61
// ">" : 62
// "?" : 63
// "@" : 64
// "A" : 65

// "Z" : 90
// "[" : 91
// "\" : 92
// "]" : 93
// "^" : 94
// "-" : 95
// "`" : 96
// "a" : 97

// "z" : 122
// "{" : 123
// "|" : 124
// "}" : 125

// const userNames = ["saj", "pan", "abd", "abc", "hello", "ABC", "Hello"];

// userNames.sort();
// console.log(userNames);

// const numbers = [5, 9, 1200, 400, 3000];
// numbers.sort();
// console.log(numbers);

// const arr = [2, 4, 3, 8, 1, 0, 4, 5];
// arr.sort((a, b) => b - a);
// console.log(arr);

// const users = [
//   { id: 6938745, name: "Manni", age: 18 },
//   { id: 9567854, name: "Tannu", age: 19 },
//   { id: 4567343, name: "Arshu", age: 14 },
//   { id: 1234523, name: "Mandy", age: 26 },
// ];

// users.sort((obj1, obj2) => obj1.id - obj2.id);
// console.log(users);

// const userCart = [
//   { produtId: 7634, price: 18, name: "sumsung-earphones", taxRates: 2.5 },
//   { produtId: 9780, price: 95, name: "air-pods", taxRates: 1.5 },
//   { produtId: 1528, price: 1499, name: "iphone-16", taxRates: 2.5 },
//   { produtId: 5628, price: 1350, name: "mac-pro", taxRates: 4.5 },
// ];

// const lowToHigh = userCart.slice(0).sort((a, b) => a.price - b.price);
// console.log(lowToHigh);

// const highToLow = userCart.slice(0).sort((a, b) => b.price - a.price);
// console.log(highToLow);
// -----------------------------------------------------------------------------

// 9. fill() :- fill is just used for filling whole array with same value, this method mutate original array

// if we want fixed length array and filled with same value
// const newArray = new Array(10).fill("waheguru"); // 10 lengthed "waheguru" filled array
// console.log(newArray);

// if we want to chagne array's item
// const myArr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// myArr.fill("hi", 3, 7); // form index 3 to 7 fill "hi"
// console.log(myArr);

// -----------------------------------------------------------------------------

// 10. splice(startIndex, deleteCount, ...value) :- splice is just used for deleting array's item and inserting multiple values anywhere in the array, unlike pop()/push()/shift()/unshift(), this method mutate original array

// const arr = ["item 1", "item 2", "item 3", "item 4"];
// arr.splice(1, 1, "item 23", "item 12");
// console.log(arr);
