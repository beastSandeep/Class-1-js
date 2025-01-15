const promise = Promise.resolve("i am resolved");
promise.then((x) => {
  console.log(x);
});

Promise.resolve("i am resolved").then((x) => {
  console.log(x);
});

// then() always returns a promise 🤨
function hi() {
  return new Promise((res, rej) => {
    res("San");
  });
}

hi()
  .then((res) => {
    res += "de"; // San + de
    return res; // Sande
  })
  .then((val) => {
    val += "ep"; // Sande + ep
    return val; //  Sandeep
  })
  .then((name) => {
    console.log(name); //  Sandeep
    // returning nothing
  })
  .then((x) => {
    // will get undefined from above
    console.log(x); // undefined
  })
  .catch((rej) => {
    console.log("promise is rejected, do something");
  });

// this is called promise chaining
