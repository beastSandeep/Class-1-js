const arr = [1, 2, 3, 4];

function hi() {
  return new Promise((resolve, reject) => {
    if (arr.length > 5) {
      resolve("bigger than 5");
    } else {
      reject("smaller than 5");
    }
  });
}

const promise = hi();
// const pro = promise.then((res) => {
//   console.log(res);
// });
// pro.catch((rej) => {
//   console.log(rej);
// });

// most preferable
promise
  .then((res) => {
    console.log(res);
  })
  .catch((rej) => {
    console.log(rej);
  });
