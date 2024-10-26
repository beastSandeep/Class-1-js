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
}

// If you want to add more properties and methods while extending your class than you need to use super() functions inside class constructor and pass all the parameters thar super class need.

// in short super() function is just to take your parameters and gives to your super class

// and oviously super() function is used while extending your class

class Cat extends Animal {
  constructor(n, a, c, s, jump) {
    super(n, a, c, s);
    this.heightJump = jump;
  }

  hunt() {
    console.log(`${this.name} is hunting`);
  }
}

const cat = new Cat("rosy", 1, "white", 10, 2);
console.log(cat);
cat.hunt();
