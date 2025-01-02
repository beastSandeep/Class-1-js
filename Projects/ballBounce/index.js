const canvas = document.getElementById("canvas");
canvas.width = window.innerWidth - 5;
canvas.height = window.innerHeight - 5;

const ctx = canvas.getContext("2d");

const speed = 5;

const ball = {
  x: Math.floor(window.innerWidth / 2),
  y: Math.floor(window.innerHeight / 2),
  radius: 25,
  startAngle: 0,
  endAngle: 2 * Math.PI,
  vx: 3 * speed,
  vy: 6 * speed,
  hue: 0,

  draw() {
    ctx.save();
    ctx.fillStyle = `hsl(${this.hue}, 100%, 50%)`;
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, this.startAngle, this.endAngle);
    ctx.fill();
    ctx.restore();
  },
};

function draw() {
  const boundry = {
    maxX: canvas.width - ball.radius,
    minX: ball.radius,
    maxY: canvas.height - ball.radius,
    minY: ball.radius,
  };
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  ball.draw();
  ball.x += ball.vx;
  ball.y += ball.vy;
  // accelerations
  ball.vy *= 0.99;
  ball.vy += 0.25;

  if (ball.x + ball.vx > boundry.maxX || ball.x + ball.vx < boundry.minX) {
    ball.vx = -ball.vx;
    // color chage
    ball.hue += Math.random() * 10;
  }
  if (ball.y + ball.vy > boundry.maxY || ball.y + ball.vy < boundry.minY) {
    ball.vy = -ball.vy;
    // color chage
    ball.hue += Math.random() * 10;
  }

  requestAnimationFrame(draw);
}
requestAnimationFrame(draw);
