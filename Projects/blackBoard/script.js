const canvas = document.getElementById("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const ctx = canvas.getContext("2d");

const toolBar = document.getElementById("toolBar");

const pointer = document.getElementById("pointer");
const pen = document.getElementById("pen");
const arrow = document.getElementById("arrow");
const eraser = document.getElementById("eraser");

let activeStroke = 0;
let activeBackground = 0;
let activeStrokeWidth = 0;
let opacity = 100;

const strokes = document.querySelectorAll("#stroke > button");
strokes.forEach((btn, index) => {
  btn.addEventListener("click", () => {
    strokes.forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");
    activeStroke = index;
  });
});

const backgrounds = document.querySelectorAll("#background > button");
backgrounds.forEach((btn, index) => {
  btn.addEventListener("click", () => {
    backgrounds.forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");
    activeBackground = index;
  });
});

const strokeWidths = document.querySelectorAll("#strokeWidth > button");
strokeWidths.forEach((btn, index) => {
  btn.addEventListener("click", () => {
    strokeWidths.forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");
    activeStrokeWidth = index;
  });
});

const opacityInput = document.querySelector("#opacity");
opacityInput.addEventListener("change", (e) => {
  opacity = e.target.value;
});

const tools = [pointer, pen, arrow, eraser];

let activeToolId = 2;
let dragging = false; // not clicked
let radius = 2;
const lineWidth = 5;

ctx.lineCap = ctx.lineJoin = "round";

function colorChanger(id) {
  tools.forEach((tool, index) => {
    if (id - 1 === index) {
      tool.style.backgroundColor = "rgb(145, 102, 232,0.4)";
    } else {
      tool.style = "";
    }
  });
}

function drawLine(x, y) {
  ctx.lineTo(x, y);
  ctx.stroke();
  ctx.beginPath();
  ctx.lineTo(x, y);
  // ctx.arc(x, y, radius, 0, Math.PI * 2);
  ctx.fill();
  ctx.beginPath();
  ctx.moveTo(x, y);
}

pointer.addEventListener("click", () => {
  activeToolId = 1;
  colorChanger(activeToolId);
  canvas.style.cursor = "move";
});

pen.addEventListener("click", () => {
  activeToolId = 2;
  colorChanger(activeToolId);
  canvas.style.cursor = "crosshair";
});

arrow.addEventListener("click", () => {
  activeToolId = 3;
  colorChanger(activeToolId);
  canvas.style.cursor = "auto";
});

eraser.addEventListener("click", () => {
  activeToolId = 4;
  colorChanger(activeToolId);
  canvas.style.cursor = "auto";
});

canvas.addEventListener("mouseleave", () => {
  dragging = false;
  ctx.beginPath();
});

canvas.addEventListener("mouseup", () => {
  dragging = false;
  ctx.beginPath();
});
canvas.addEventListener("mousedown", () => {
  dragging = true;
});

canvas.addEventListener("mousemove", (e) => {
  ctx.strokeStyle = strokes[activeStroke].dataset.color.replace(
    "alpha",
    opacity / 100
  );
  ctx.fillStyle = backgrounds[activeBackground].dataset.color.replace(
    "alpha",
    opacity / 100
  );
  ctx.lineWidth = Math.round(
    lineWidth * Number(strokeWidths[activeStrokeWidth].dataset.width)
  );

  if (dragging) {
    if (activeToolId === 2) {
      drawLine(e.clientX, e.clientY);
    }
  }
});

function init() {
  colorChanger(activeToolId);
  canvas.style.cursor = "crosshair";
  ctx.fillStyle = ctx.strokeStyle = strokes[activeStroke].dataset.color;
  strokes[activeStroke].classList.add("active");
  backgrounds[activeBackground].classList.add("active");
  strokeWidths[activeStrokeWidth].classList.add("active");
}
init();
