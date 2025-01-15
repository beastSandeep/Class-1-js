// promise :- is a future value , it is similar to functions first we have to make it and then we can consume it.

// when promise is created :- status -> pending // value -> ---
// when promise is resolved :- status -> fullfilled // value -> resolve inside
// when promise is rejected :- status -> rejected // value -> rejecte inside

// produce
let num = 3;
const promise = new Promise((resolve, reject) => {
  if (num > 4) {
    resolve("grater than 4");
  } else {
    reject("less than 4");
  }
});

// consume
promise
  .then((res) => {
    console.log(res);
  })
  .catch((rej) => {
    console.log(rej);
  });
