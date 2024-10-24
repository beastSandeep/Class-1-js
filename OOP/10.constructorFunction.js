function CreateUser(userName, userMail, userAge) {
  this.name = userName;
  this.email = userMail;
  this.age = userAge;
}

CreateUser.prototype.about = function () {
  return `${this.name} is ${this.age} years old`;
};
CreateUser.prototype.is18 = function () {
  return this.age >= 18;
};

const user5 = new CreateUser("Manpreet", "manni.singh@wool.com", 19);

console.log(user5);
console.log(user5.__proto__);
console.log(user5.about());
