// synchronous :- line by line(ordered) code execution
// Asynchronous :-unorderd code execution

// console.log("start");

// it tooks a lot of time
// let num = 0;
// for (let i = 0; i < 1000000000; i++) {
//   num += i;
// }

// console.log("end");

// here console.log("start"); will print in start and then after let num = 0; for (let i = 0; i < 1000000000; i++) {  num += i;} will gonna run, and it will take a lot of time, so console.log("end"); has to wait untill above line compeletly exectuted, hence these types of line are called blocking code. and therefor we need something diffrent for this problem:--> Async

console.log("start");

setTimeout(() => {
  console.log("mid");
}, 2 * 1000);

console.log("end");

// here setTimeout() is WEB-API and this just takes away all heavy burden from ruuning js to the browser, then browser will take care what is inside this setTimeout() and after given time it will be executed.
