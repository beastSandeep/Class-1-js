class Animal {
  constructor(n, a, c, s) {
    this.name = n;
    this.age = a;
    this.color = c;
    this.speed = s;
  }

  eat() {
    return `${this.name} is eating`;
  }

  isCute() {
    return this.age <= 1;
  }

  addAge(num) {
    this.age += num;
    console.log(`${this.name.toUpperCase()} is now ${this.age} years old`);
  }

  happyBirthday() {
    console.log(`Happy BirthDay To Dear ${this.name.toUpperCase()}`);
    this.addAge(1);
  }
}

const animal = new Animal("tom", 2, "brown", 12);
console.log(animal);
animal.happyBirthday();

// we can extend any class from another class
// here Dog class is extend by Animal class. Means all properties and methods which were part of Animal class, now they are also being used by Dog class.
// here Dog is sub-class and Animal is parent/super-class.

class Dog extends Animal {}

const dog = new Dog("sheru", 4, "black", 15);
console.log(dog);
console.log(dog.isCute());
dog.addAge(2);
