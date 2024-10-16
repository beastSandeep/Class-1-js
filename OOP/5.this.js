// "this" is just an object, it is determind from where we are calling that method for "this"

// --------------------------------------------------------------------

const person = {
  fullName: "jake",
  age: 20,
  about() {
    console.log(`i'm ${this.fullName} and i'm ${this.age} years old`);
  },
};

// here "this" is present in about method and that method is using "this" so method about is present inside person object so "this" equals to whole person object

person.about();

// --------------------------------------------------------------------

const personW = {
  fullName: "jake",
  age: 20,
  about() {
    console.log(this);
  },
};

personW.about();

// --------------------------------------------------------------------

function personInfo() {
  console.log(`person name is ${this.fristName} and it's age is ${this.age}`);
}

const person1 = {
  fristName: "harsh",
  age: 8,
  about: personInfo,
};

const person2 = {
  fristName: "vikas",
  age: 10,
  about: personInfo,
};

const person3 = {
  fristName: "chulbul",
  age: 9,
  about: personInfo,
};

// here "this" is changing according from where we are calling that function(method)
person1.about(); // this is person1 object
person2.about(); // this is person2 object
person3.about(); // this is person3 object

// --------------------------------------------------------------------

// we know all function are stored in window object so for those functions "this" always a window object
function hello() {
  console.log(this);
}
hello();
window.hello();

// --------------------------------------------------------------------

// like here also console lives inside window object so "this" always a window object
console.log(this);
console.log(window);
