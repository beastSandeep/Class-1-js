// event object is a giant event descripture as an object
// this object is recieved in addEventListener's function's parameter

// if we want to access element inside eventObject we have 2 propeties
// 1. currentTarget :- element that eventListener applied on
// 2. target :- element that trrigres an event

const btn = document.getElementById("btn");

btn.addEventListener("click", function (eventObject) {
  const element = eventObject.target; // btn element
  element.innerText = "WOW";
});
