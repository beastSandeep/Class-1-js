const canvas = document.getElementById("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const ctx = canvas.getContext("2d");

const toolBar = document.getElementById("toolBar");

const pointer = document.getElementById("pointer");
const pen = document.getElementById("pen");
const arrow = document.getElementById("arrow");
const eraser = document.getElementById("eraser");

const cursor = document.getElementById("cursor");

let activeStroke = 0;
let activeBackground = 0;
let activeStrokeWidth = 0;
let opacity = 70;

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
let lineWidth = 5;
let radius = lineWidth / 2;

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

let stepSize = 5;
let previous = { x: 0, y: 0 };

function drawArrow(x, y) {}

function drawLine(x, y) {
  const distant = Math.sqrt((previous.x - x) ** 2 + (previous.y - y) ** 2);

  if (distant > stepSize) {
    ctx.lineTo(x, y);
    ctx.stroke();
    ctx.beginPath();
    // ctx.arc(x, y, radius, 0, Math.PI * 2);
    // ctx.fill();
    ctx.moveTo(x, y);
    previous.x = x;
    previous.y = y;
  }
}

pointer.addEventListener("click", () => {
  activeToolId = 1;
  colorChanger(activeToolId);
  canvas.style.cursor = "move";
  cursor.style.display = "none";
});

pen.addEventListener("click", () => {
  activeToolId = 2;
  colorChanger(activeToolId);
  canvas.style.cursor = "crosshair";
  cursor.style.display = "none";
});

arrow.addEventListener("click", () => {
  activeToolId = 3;
  colorChanger(activeToolId);
  canvas.style.cursor = "auto";
  cursor.style.display = "none";
});

eraser.addEventListener("click", () => {
  activeToolId = 4;
  colorChanger(activeToolId);
  cursor.style.display = "block";
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
    if (activeToolId === 4) {
      cursor.style.top = e.clientY - 25 + "px";
      cursor.style.left = e.clientX - 25 + "px";
      ctx.clearRect(e.clientX, e.clientY, 50, 50);
    }

    if (activeToolId === 3) {
      drawArrow(e.clientX, e.clientY);
    }
  } else {
    if (activeToolId === 4) {
      cursor.style.top = e.clientY - 25 + "px";
      cursor.style.left = e.clientX - 25 + "px";
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
