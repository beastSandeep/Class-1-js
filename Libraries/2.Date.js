const date = new Date(); // date constructor if we put something inside we can create taht specific date otherwise current date goanna created
console.log(date);
console.log(date.getHours()); // we have a lot of methods to extract hours , week, day etc. from date
console.log(date.getMinutes());
console.log(date.getSeconds());

console.log(Date.now()); // it's a static method which is calculate from 1 January 1970 to till now, passes time in miliseconds
