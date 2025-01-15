const arr = [1, 2, 3, 4, 5, 6];
function hi() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (arr.length > 5) {
        resolve("bigger than 5");
      } else {
        reject("smaller than 5");
      }
    }, 2000);
  });
}

hi()
  .then((res) => {
    console.log(res);
  })
  .catch((rej) => {
    console.log(rej);
  });
