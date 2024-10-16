// inside arrow function "this" always a window object, doesn't matter where your function is present

const user = {
  fistName: "Mandeep",
  lastName: "Singh",
  address: "USA",
  printThis: () => {
    console.log(this);
  },
};

user.printThis();
user.printThis.call(user);
