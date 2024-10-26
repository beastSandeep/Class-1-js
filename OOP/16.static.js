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
