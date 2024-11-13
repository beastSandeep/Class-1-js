// eventDelegation is help to only set lisner to parent and we can use this lisners to it's child also
// this uses event Bubbling in working

// we can use it as an optimization for less event listeners because we can set eventListeners just for parent and therefore it's child will do bubbling and we have target property in eventObject that is for who fire that event

const gp = document.querySelector(".grandParent");

gp.addEventListener("click", function (e) {
  console.log(e.target);
});
