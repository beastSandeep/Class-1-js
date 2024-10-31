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

// 3. getElementsByTagName(tagName) :- it takes a string of tag name and returns an HTMLCollection of elements. (HTMLCollection is array like data type so we can also check .length and indexing)

const tagElements = document.getElementsByTagName("p");
// console.log(tagElements);

// -----------------------------------------------------------

// 4. querySelector() :- it takes a string of HTMLElementTagNameMap (means we need to put # before id and . before a class name, for tag names nothing to put extra) and returns a single and first element.

const heading = document.querySelector("#main");
// console.dir(heading);

// -----------------------------------------------------------

// 5. querySelectorAll() :- it takes a string of HTMLElementTagNameMap (means we need to put # before id and . before a class name, for tag names nothing to put extra, in the nutshell we can use all our css selectors as well) and returns a NodeList (NodeList is array like data type so we can also check .length and indexing) of elements.

const paragraphs = document.querySelectorAll("p");
// console.log(paragraphs);

// -----------------------------------------------------------

// 6. getElementsByName(name) :- it takes a string of name attribute value and returns a NodeList (NodeList is array like data type so we can also check .length and indexing) of elements.

const inputs = document.getElementsByName("gender");
console.log(inputs);
