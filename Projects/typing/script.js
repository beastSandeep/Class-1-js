const bright = document.getElementById("bright");
const dull = document.getElementById("dull");

const cursor = document.createElement("span");
cursor.style.backgroundColor = "#fff";
cursor.style.display = "inline-block";
cursor.style.width = "4px";
cursor.style.height = "45px";

let counter = 0;

const content = `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora, voluptatibus repellat debitis accusantium suscipit ducimus facere, beatae incidunt dolorum adipisci molestiae veritatis nulla quod dolor sed, quidem vero.`;

dull.innerText = content;

window.addEventListener("keydown", (e) => {
  if (e.key === content.slice(counter)[0]) {
    // right key
    counter++;
    bright.innerText = content.slice(0, counter);
    dull.innerText = content.slice(counter);
  } else {
    // wrong key
    // flash body screen with red
    // document.body.style.backgroundColor = "red";
    // setTimeout(() => {
    //   document.body.style.backgroundColor = "black";
    // }, 100);
  }
});
