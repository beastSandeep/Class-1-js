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

// we are preventing default dined beghavior of dragover
document.addEventListener(
  "dragover",
  function (event) {
    // prevent default to allow drop
    event.preventDefault();
  },
  false
);

box.addEventListener("dragend", (e) => {
  let x = Math.round(e.clientX - boxRect.width / 2 - containerRect.left);
  let y = Math.round(e.clientY - boxRect.height / 2 - containerRect.top);

  if (x < 0) {
    x = 0;
  }
  if (x > containerRect.width) {
    x = Math.floor(containerRect.width) - boxRect.width;
  }

  if (y < 0) {
    y = 0;
  }
  if (y > containerRect.height) {
    y = Math.floor(containerRect.height) - boxRect.height;
  }

  box.style.left = `${x}px`;
  box.style.top = `${y}px`;

  box.innerText = `${x}, ${y}`;
});
