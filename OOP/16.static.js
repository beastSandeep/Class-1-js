// we can create static mehtods also by using static keyword
// static methods are accessible on Class, it means static methods are called upon Class like Object.create()

class Person {
  constructor(fname, lname) {
    this.firstName = fname;
    this.lastName = lname;
  }

  static info() {
    return "this is a person class";
  }
}

const user = new Person("ibrahim", "karu");
console.log(user);
console.log(Person.info());
console.log(Array.isArray([1, 2, 3]));
