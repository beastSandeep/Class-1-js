// this keyword placed before a function call, new keyword does 3 jobs

// 1. Inide function this creates a empty object and assign this newly create object to "this"
// 2. And it links(sets proto) that newly created object to its's fucntion's prototype
// 3. In last it return that object

function Person() {
  this.name = "Sandeep";
  this.age = 24;
}

Person.prototype.about = "hello my name is sandeep";

const me = new Person();
console.log(me);
console.log(me.about);
