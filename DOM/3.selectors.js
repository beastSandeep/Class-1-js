// selectors are docements' method and these methods are just takes a string and returns elements according to their type

// -----------------------------------------------------------

// 1. getElementById(id) :- it takes a string of id and returns a html element(tag)

const h1 = document.getElementById("main");
// console.log(h1);
// const str = prompt("please enter your statement");
// h1.innerText = str;

// -----------------------------------------------------------

// 2. getElementsByClassName(class) :- it takes a string of class and returns an HTMLCollection of elements. (HTMLCollection is array like data type so we can also check .length and indexing)

const classElements = document.getElementsByClassName("amz");
// console.log(classElements);
// classElements[1].innerText = "Manpeet";

// -----------------------------------------------------------

// 3. getElementsByTagName() :- it takes a string of tag name and returns an HTMLCollection of elements. (HTMLCollection is array like data type so we can also check .length and indexing)

const tagElements = document.getElementsByTagName("p");
// console.log(tagElements);

// -----------------------------------------------------------
