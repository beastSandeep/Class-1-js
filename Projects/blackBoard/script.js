const canvas = document.getElementById("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const ctx = canvas.getContext("2d");

const toolBar = document.getElementById("toolBar");

const pointer = document.getElementById("pointer");
const pen = document.getElementById("pen");
const arrow = document.getElementById("arrow");
const eraser = document.getElementById("eraser");

const tools = [pointer, pen, arrow, eraser];

let activeToolId = 2;
let dragging = false; // not clicked
let radius = 5;
const lineWidth = radius * 2;

function colorChanger(id) {
  tools.forEach((tool, index) => {
    if (id - 1 === index) {
      tool.style.backgroundColor = "rgb(145, 102, 232,0.4)";
    } else {
      tool.style = "";
    }
  });
}

pointer.addEventListener("click", () => {
  activeToolId = 1;
  colorChanger(activeToolId);
});

pen.addEventListener("click", () => {
  activeToolId = 2;
  colorChanger(activeToolId);
});

arrow.addEventListener("click", () => {
  activeToolId = 3;
  colorChanger(activeToolId);
});

eraser.addEventListener("click", () => {
  activeToolId = 4;
  colorChanger(activeToolId);
});

function init() {
  colorChanger(activeToolId);
}
init();

canvas.addEventListener("mouseup", () => {
  dragging = false;
  ctx.beginPath();
});
canvas.addEventListener("mousedown", () => {
  dragging = true;
});

ctx.fillStyle = "white";
ctx.strokeStyle = "white";
ctx.lineWidth = lineWidth;
canvas.addEventListener("mousemove", (e) => {
  if (dragging) {
    if (activeToolId === 2) {
      ctx.lineTo(e.clientX, e.clientY);
      ctx.stroke();
      ctx.beginPath();
      ctx.lineTo(e.clientX, e.clientY);
      ctx.arc(e.clientX, e.clientY, radius, 0, Math.PI * 2);
      ctx.fill();
      ctx.beginPath();
      ctx.moveTo(e.clientX, e.clientY);
    }
  }
});

// if (activeToolId === 2) {
// }
