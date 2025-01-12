// setTimeout(fn, time in milliseconds):- it takes a functinon and runs after a certain time(milliseconds)

console.log("start");

function hello() {
  console.log("hello");
}

const id = setTimeout(hello, 1000);

// clearTimeout(id);

console.log("end");

// all setTimeout() returns a unique id , and we can use this id to cancel them with the help of clearTimeout(id), it just takes an id and cancels setTimeout 😎
