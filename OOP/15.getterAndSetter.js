// getter and setter are just keywords for methods

// we use get to make our methods like properties, for example array has a length property and we know this property is not static means when we do .length in any array it always count array's item and give us total number of items, so that if we want such functnality we have to palce get keyword in front of a method

// getter are moslty used in computed properties (those properties that can be made out of existing properties)

// if we are making a getter than we can't accept in this method
// and getter are used like we are accessing it's property

// ------------------------------------------------------------------------------

// setter are just a methods that runs diffrently, we just write a seeter like a property and we give it's a value.
// we can't give a property more than one value that's why we have to accept exactly one prameter in setter

class Person {
  constructor(fname, lname) {
    this.firstName = fname;
    this.lastName = lname;
  }

  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }

  set changeName(name) {
    const arr = name.split(" ");
    const fn = arr[0];
    const ln = arr[1];

    this.firstName = fn;
    this.lastName = ln;
  }
}

const person = new Person("ramu", "kaka");
console.log(person);

// using a getter
console.log(person.fullName);

// using a stter
person.changeName = "chachi 420";

console.log(person);
