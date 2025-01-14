// callbacks means a functions takes a function in parameters and class it on it's own.

// simple
function myFunc(cb) {
  console.log("hello");
  cb();
}

myFunc(function () {
  console.log("sandeep");
});

// complex
function twoNumber(a, b, fn) {
  fn(a, b);
}

twoNumber(4, 6, (x, y) => {
  console.log(x + y);
});

twoNumber(4, 6, (x, y) => {
  console.log(x - y);
});

twoNumber(4, 6, (x, y) => {
  console.log(x * y);
});

twoNumber(4, 6, (x, y) => {
  console.log(x / y);
});

// comlex ultra pro max
function utils(a, b, onSuccess, onFailure) {
  if (typeof a === "number" && typeof b === "number") {
    onSuccess(a, b);
  } else {
    onFailure();
  }
}

utils(
  9,
  5,
  (x, y) => {
    console.log(x + y);
  },
  () => {
    console.log("incorrect data type");
  }
);
