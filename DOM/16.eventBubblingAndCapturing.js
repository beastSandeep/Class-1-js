const gp = document.querySelector(".grandParent");
const p = document.querySelector(".parent");
const c = document.querySelector(".child");

// eventBubbling :- when an event occurs form child to their parents

gp.addEventListener("click", function () {
  console.log("grand parent clicked");
  // grand parent clicked
});

p.addEventListener("click", function () {
  console.log("parent clicked");
  // parent clicked
  // grand parent clicked
});

c.addEventListener("click", function () {
  console.log("child clicked");
  // child clicked
  // parent clicked
  // grand parent clicked
});
