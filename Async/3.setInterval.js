// setInterval(fn, time) :- it takes a functinon and runs after a certain time(milliseconds) again and again

const id = setInterval(() => {
  console.log("hello");
}, 1000);

// instant stoping interval
// clearInterval(id);

// stoping interval after a certain time
setTimeout(() => {
  clearInterval(id);
}, 7000);

const body = document.getElementById("body");
const stopBtn = document.getElementById("stop");

const bodyColorId = setInterval(() => {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);

  body.style.backgroundColor = `rgb(${r},${g},${b})`;
}, 1000);

stopBtn.addEventListener("click", () => {
  clearInterval(bodyColorId);
});
