const inc = document.getElementById("increment");
const dec = document.getElementById("decrement");
const count = document.getElementById("count");
const bars = document.getElementsByClassName("bar");

// for (let i = 0; i < bars.length; i++) {
//   const bar = bars[i];
//   bar.style.display = "none";
// }

inc.addEventListener("click", function () {
  // increment button listner
  const currentCount = Number(count.innerText); // we are reading count and converting into a number and after that we are storing it in a variable.
  if (currentCount < 10) {
    // we are checking that if we are not exceeding upper limit, If we are under 10 than we can do increment and can show Bars.
    count.innerText = currentCount + 1; // updating inner text of count element with current count + 1.
    bars[currentCount].style.display = "block"; // we are showing Bars according to our current count.
  }
});

dec.addEventListener("click", function () {
  // decrement button listner
  const currentCount = Number(count.innerText); // we are reading count and converting into a number and after that we are storing it in a variable.
  if (currentCount > 0) {
    // we are checking that if we are not exceeding lower limit, If we are above 0 than we can do decrement and can hide Bars.
    count.innerText = currentCount - 1; // updating inner text of count element with current count - 1.
    bars[currentCount - 1].style.display = "none"; // we are hiding Bars according to our currnet count - 1 .
  }
});
