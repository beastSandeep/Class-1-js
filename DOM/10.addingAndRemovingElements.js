// our set up is
/* <ul class="list">
    <li>task 1</li>
    <li>task 2</li>
    <li>task 3</li>
</ul> */

const list = document.querySelector(".list");

const li = document.createElement("li");
li.innerText = "task 4";

// we have 4 ways to add li into ul
// 1. append(li) :-
list.append(li);
/* <ul class="list">
    <li>task 1</li>
    <li>task 2</li>
    <li>task 3</li>

    <li>task 4</li>
</ul> */

// 2. prepend(li) :-
list.prepend(li);
/* <ul class="list">
    <li>task 4</li>
    
    <li>task 1</li>
    <li>task 2</li>
    <li>task 3</li>
</ul> */

// 3. after(li) :-
list.after(li);
/* <ul class="list">
    <li>task 1</li>
    <li>task 2</li>
    <li>task 3</li>
  </ul> 

  <li>task 4</li>
*/

// 4. before(li) :-
list.before(li);
/* 
<li>task 4</li>

<ul class="list">
    <li>task 1</li>
    <li>task 2</li>
    <li>task 3</li>
</ul> */

// -----------------------------------------------------------
// Removing elements

console.log(list.children);

// remove():- we can remove elements from DOM
list.children[1].remove();
console.log(list.children);

// -----------------------------------------------------------
// -----------------------------------------------------------

// adding by insertAdjacentElement(where, element) :-

// where(first argument) is going to be a string it has 4 values:-
// 1. beforebegin
// 2. afterbegin
// 3. beforeend
// 4. afterend

li.innerText = "task 123";

// list.insertAdjacentElement("beforebegin", li);
// list.insertAdjacentElement("afterbegin", li);
// list.insertAdjacentElement("beforeend", li);
list.insertAdjacentElement("afterend", li);
