const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

const canvasWidth = canvas.getClientRects()[0].width;
const canvasHeight = canvas.getClientRects()[0].height;

ctx.strokeStyle = "rgb(206, 206, 206)";
for (let i = 0; i < canvasWidth; i += 50) {
  if (i % 100 === 0) {
    ctx.strokeStyle = "rgb(255, 0, 0,0.3)";
    ctx.strokeRect(i, 0, 1, canvasHeight);
  } else {
    ctx.strokeStyle = "rgb(206, 206, 206)";
    ctx.strokeRect(i, 0, 1, canvasHeight);
  }
}

ctx.strokeStyle = "rgb(206, 206, 206)";
for (let i = 0; i < canvasHeight; i += 50) {
  if (i % 100 === 0) {
    ctx.strokeStyle = "rgba(0, 0, 255, 0.3)";
    ctx.strokeRect(0, i, canvasWidth, 1);
  } else {
    ctx.strokeStyle = "rgb(206, 206, 206)";
    ctx.strokeRect(0, i, canvasWidth, 1);
  }
}

ctx.fillStyle = "green";
ctx.fillRect(100, 200, 50, 50);

ctx.fillStyle = "orange";
ctx.fillRect(200, 100, 50, 50);

ctx.strokeStyle = "black";
ctx.strokeRect(500, 300, 100, 50);

ctx.clearRect(225, 125, 25, 25);

ctx.fillStyle = "black";
ctx.strokeStyle = "black";
ctx.fillRect(25, 25, 100, 100);
ctx.clearRect(45, 45, 60, 60);
ctx.strokeRect(50, 50, 50, 50);

ctx.fillStyle = "red";
ctx.beginPath();
ctx.moveTo(300, 250);
ctx.lineTo(350, 300);
ctx.lineTo(350, 200);
ctx.fill();
