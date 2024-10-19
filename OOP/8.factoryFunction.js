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

// ----------------------------------------------------------------------------------------------------------

// There are some cons to tackel

//  1 :- All properties are uniqe to users but all methods are same and methods are taking access space in memory, so that we need to solve this problem
// we just need to create all our methods outside of factory function and later we just need to pass refrence our methods

// const userMehods = {
//   about: function () {
//     return `${this.name} is ${this.age} years old`;
//   },
//   is18: function () {
//     return this.age >= 18;
//   },
// };

// function createUser(userName, userMail, userAge) {
//   // step : 1
//   const user = {};

//   // step : 2
//   user.name = userName;
//   user.email = userMail;
//   user.age = userAge;
//   user.about = userMehods.about;
//   user.is18 = userMehods.is18;

//   // step : 3
//   return user;
// }

// const user3 = createUser("Anmol", "anmol@gamil.com", 19);
// console.log(user3);
// console.log(user3.about());

// -----------------
// -----------------
// -----------------

//  2 :- if we'll be having a hunderds of methods then putting inside every user, that's a painful and time consuming work.
// so that we can link all the methods to user's proto, then if we use those methods JavaScript automatically seach user's proto and it will find it

// const userMehods = {
//   about: function () {
//     return `${this.name} is ${this.age} years old`;
//   },
//   is18: function () {
//     return this.age >= 18;
//   },
// };

// function createUser(userName, userMail, userAge) {
//   // step : 1
//   const user = Object.create(userMehods);

//   // step : 2
//   user.name = userName;
//   user.email = userMail;
//   user.age = userAge;

//   // step : 3
//   return user;
// }
// const user4 = createUser("Anmol", "anmol@gamil.com", 19);
// console.log(user4);
// console.log(user4.__proto__);
// console.log(user4.about());

// -----------------
// -----------------
// -----------------

//  3 :- userMehods will take it's own space in memory, we can optimise it also.
// We can use function's empty object(protoype) as a mehod holder then we can link it to user as a proto.

function createUser(userName, userMail, userAge) {
  // step : 1
  const user = Object.create(createUser.prototype);

  // step : 2
  user.name = userName;
  user.email = userMail;
  user.age = userAge;

  // step : 3
  return user;
}

createUser.prototype.about = function () {
  return `${this.name} is ${this.age} years old`;
};
createUser.prototype.is18 = function () {
  return this.age >= 18;
};

const user5 = createUser("Manpreet", "manni.singh@wool.com", 19);
console.log(user5);
console.log(user5.__proto__);
console.log(user5.about());
