const container = document.getElementById("container");
const box = document.getElementById("box");

let containerRect = container.getBoundingClientRect();
let boxRect = box.getBoundingClientRect();

let posX = 0;
let posY = 0;
const step = 5;

document.addEventListener("keydown", (e) => {
  const direction = e.code;
  if (direction === "ArrowUp") {
    if (posY > 0) {
      posY -= step;
      box.style.top = `${posY}px`;
    }
  }
  if (direction === "ArrowDown") {
    if (posY < containerRect.height - boxRect.height) {
      posY += step;
      box.style.top = `${posY}px`;
    }
  }
  if (direction === "ArrowRight") {
    if (posX < containerRect.width - boxRect.width) {
      posX += step;
      box.style.left = `${posX}px`;
    }
  }
  if (direction === "ArrowLeft") {
    if (posX > 0) {
      posX -= step;
      box.style.left = `${posX}px`;
    }
  }

  box.innerText = `${posX}, ${posY}`;
});

window.addEventListener("resize", function () {
  containerRect = container.getBoundingClientRect();
});
