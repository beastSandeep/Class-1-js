// events are something that user does on page via clicking, hovering etc.
// We can use envent in 3 ways

// 1. Direct HTML :- we can use onEvent Attribute of html tags
// <button onclick="console.log('Hello')">Hii !</button>

// 2. Event propery :- we just need to put a function in event handler properties
// const btn = document.querySelector("#btn");
// btn.onclick = function () {
//   console.log("Hello");
// };

// ********** MOST USED **********

// 3. addEventListner(eventName, function) :- it's a method that is availabe to almost every element, it just take eventName and a function, when a event occors that function will run by browser

const btn = document.querySelector("#btn");

btn.addEventListener("click", function () {
  console.log("hello");
});

// ---------- multiple eventListeners

const btns = document.querySelectorAll(".my-buttons button");
console.log(btns);

for (let i = 0; i < btns.length; i++) {
  const btn = btns[i];

  btn.addEventListener("click", function () {
    console.log(`button clicked ${i + 1}`);
  });
}

// ---------- "this" inside eventListener handles

// "this" is always going to be an element which is responsible for event fire
// "this" inside arrow functions is always goint to be window object
btn.addEventListener("click", function () {
  // this => btn element
  console.log(this.innerText);
});
