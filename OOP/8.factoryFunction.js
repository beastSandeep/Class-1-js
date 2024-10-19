import { data } from "./data.js";
// A factory function is just take arguments and return back a object

// we want this type of objects
// const user1 = {
//   name: "userName",
//   age: 0,
//   email: "email@gmail.com",
//   about() {},
//   is18() {},
// };

// if we want millions of objects like that, so we need to create a factory function

// How we will approch this problem looks like :-
// 1. this function will create an empty object
// 2. this function will add key-value paiers according to our given arguments
// 3. this function will return that object

// function createUser(userName, userMail, userAge) {
//   // step : 1
//   const user = {};

//   // step : 2
//   user.name = userName;
//   user.email = userMail;
//   user.age = userAge;
//   user.about = function () {
//     return `${this.name} is ${this.age} years old`;
//   };
//   user.is18 = function () {
//     return this.age >= 18;
//   };

//   // step : 3
//   return user;
// }

// const user2 = createUser("arsh", "arsh@yahoo.com", 14);
// console.log(user2);

// const user2about = user2.about();
// console.log(user2about);

// const user2Is18 = user2.is18();
// console.log(user2Is18);

// -----------------------------------------------------------------------

function createUser(id, fn, ln, age, email, lang) {
  // step : 1
  const user = {};

  // step : 2
  user.id = id;
  user.name = `${fn} ${ln}`;
  user.age = age;
  user.email = email;
  user.language = lang;

  user.about = function () {
    return `${this.name} is ${this.age} years old`;
  };

  user.is18 = function () {
    return this.age >= 18;
  };

  user.isIndian = function () {
    return this.language === "Hindi";
  };

  user.changeId = function () {
    const id = this.id;
    this.id = String(id).padStart(3, "0");
  };

  // step : 3
  return user;
}

const userData = data[2];

const user1 = createUser(
  userData.id,
  userData.firstName,
  userData.lastName,
  userData.age,
  userData.email,
  userData.language
);

console.log(user1);
user1.changeId();
console.log(user1);
console.log(user1.isIndian());
console.log(user1.about());
