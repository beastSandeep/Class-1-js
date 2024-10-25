// classes are object making machine like constructor functions
// classes are syntactic sugar only on the top of constructor function, it means they work similar in behind like constructor function
// Every class name should be Capital letter starting, and inside it we have a own constructor of it. inside constructor we just make properties and outside of constructor we make methods

// how to write class
class Name {
  constructor(parameters) {
    // properties
  }

  // methods
}

// CreateUser class look like this
class CreateUser {
  constructor(userName, userEmail, userAge) {
    // all the thing that we are taking form CreateUser() class call, they are accessible inside of it's constructor like name, email etc.
    this.name = userName;
    this.email = userEmail;
    this.age = userAge;
  }

  // we can create methods directly on it
  about() {
    return `${this.name} is ${this.age} years old`;
  }

  is18() {
    return this.age >= 18;
  }
}

// classes are also used by the help of "new" keyword
const user = new CreateUser("Preet", "stanpreet@gamil.com", 18);
console.log(user.about());
