const gp = document.querySelector(".grandParent");
const p = document.querySelector(".parent");
const c = document.querySelector(".child");

// eventBubbling :- when an event occurs form child to their parents, it's naming done like, bubble moves to low to high height in atmosphere that's why child to parent event fire

// gp.addEventListener("click", function () {
//   console.log("grand parent clicked");
//   // grand parent clicked
// });

// p.addEventListener("click", function () {
//   console.log("parent clicked");
//   // parent clicked
//   // grand parent clicked
// });

// c.addEventListener("click", function () {
//   console.log("child clicked");
//   // child clicked
//   // parent clicked
//   // grand parent clicked
// });

// eventCapturing :- it's just opposite from eventBubbling, we can enable it to pass third argument "true" in addEventListener(eventName, fn, true)

gp.addEventListener(
  "click",
  function () {
    console.log("grand parent clicked");
    // grand parent clicked
  },
  true
);

p.addEventListener(
  "click",
  function () {
    console.log("parent clicked");
    // grand parent clicked
    // parent clicked
  },
  true
);

c.addEventListener(
  "click",
  function () {
    console.log("child clicked");
    // grand parent clicked
    // parent clicked
    // child clicked
  },
  true
);
