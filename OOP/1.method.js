// Mehod is just a fucntion inside an Oject

const person = {
  name: "Jake Suli",
  age: 50,

  // normal way to create methods
  about: function (country) {
    console.log("person Jake is 50 years old");
    console.log(`and he is from ${country}`);
  },

  // another way to create methods
  sing() {
    console.log("la la la la");
    return "Hardy Sandhu";
  },
};

console.log(person.name);

person.about("India");
person.about("USA");

const singer = person.sing();
console.log(singer);
