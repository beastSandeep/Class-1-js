// prototype is just a empty object inside a function
// we can treat functions as a object, we have properties and mehtods of every function
function hello() {
  console.log("hello world");
}

// we have name property of functions which tells name of function
console.log(hello.name);

// we have prototype property of functions which gives object inside function
// console.log(hello.prototype);

// we can add properties to prototype object
hello.prototype.hi = "hi";
hello.prototype.name = "Sandeep";

// we can add methods to prototype object
hello.prototype.sing = function () {
  console.log("la la la la");
};

// logging whole object
console.log(hello.prototype);
