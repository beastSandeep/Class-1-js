const obj = {
  name: "Sandeep",
  address: "India",
  printName: function (key) {
    console.log(this.name);
    console.log(this[key]);
  },
};

const obj2 = {
  name: "Tanpreet",
  address: "USA",
  printName: function (key) {
    console.log(this.name);
    console.log(this[key]);
  },
};

const obj3 = {
  name: "Manni",
  address: "USA",
  printName: function (key) {
    // key = "address"
    console.log(this.name);
    console.log(this[key]);
  },
};

// console.log(obj.name);
// console.log(obj.address);
obj.printName("address");
obj2.printName("address");
obj3.printName("address");
