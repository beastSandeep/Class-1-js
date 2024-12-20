const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

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
