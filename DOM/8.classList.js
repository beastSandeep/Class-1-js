// classList is a property thats reutuns a DOMTokenList(an array like thing) of applied classes

const arr = document.getElementsByClassName("container");
const section = arr[0];

console.log(section.classList); //  ['container', 'btn']

// we have some mehtods for classList

// 1. add(className) :- it's add class to the classList
section.classList.add("ABC");
console.log(section.classList); //  ['container', 'ABC', 'btn']

// 2. remove(className) :- it's remove class to the classList, if removing class doesn't exits it simply don't make any changes to classList
section.classList.remove("xyz");
console.log(section.classList); //  ['container', 'ABC', 'btn']

section.classList.remove("ABC");
console.log(section.classList); //  ['container', 'btn']

// 3. contains(className) :- it takes a class name and returns boolean value according to given class if exitst or not
console.log(section.classList.contains("btn")); // true

// 4. toggle(className) :- it toggles class form classList means if given class is not exist it adds that class and if given class already exist it simply remove that class, this methods is a combination of add() and remove().
section.classList.toggle("xyz");
console.log(section.classList); // ['container', 'btn', 'xyz']

section.classList.toggle("xyz");
console.log(section.classList); // ['container', 'btn']
