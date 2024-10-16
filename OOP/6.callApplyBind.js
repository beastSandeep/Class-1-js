// these three are special methods, because they blelongs to functions....it means these are function's method

// 1. call()

// we have a function
function hello() {
  console.log("hello world");
}

// we can call it like this
// window.hello();
// hello();

// and we can call it like this also 😄
// hello.call();

// for call() method, if a function is using "this" then we can take control of what should be "this" by call() mehod, we have to just pass the object in it, and if function accepting other argument then we can pass them as normal as we were doing but first argument always for "this" binding
const user1 = {
  name: "Manni",
  age: 18,
  about(a, b) {
    console.log(this.name, this.age, a + b);
  },
};

const user2 = { name: "Tanpreet", age: 19 };

// user1.about.call(user1, 50, 50);
// user1.about.call(user2, 100, 100);

const user3 = {
  name: "Anmol",
  age: 19,
};

function printDetail() {
  console.log(`user ${this.name} is years ${this.age} old`);
}

// printDetail.call(user1);
// printDetail.call(user2);
// printDetail.call(user3);

// 2. apply()

// it's similar to call(), but we need to pass our aurguments as array in it, that's all
// user1.about.apply(user2, [100, 100]);
// printDetail.apply(user3);

// 3. bind()

// it's job is to bind "this" to a function, maily when we are shipping a function to another place, it just bind function to "this" not calls(run) a function itself 😎

const user4 = {
  fistName: "Arsh",
  lastName: "Singh",
  address: "USA",
  about() {
    console.log(`${this.fistName} ${this.lastName} lives in ${this.address}`);
  },
};

// we can't do like this
const func = user4.about;
func();

// we have to bind it with our object before shipping the function
const newFunc = user4.about.bind(user4);
newFunc();
