// const ranNum = (max = 256, min = 8) =>
//   Math.max(Math.min(Math.floor(Math.random() * max), max), min);

function createGlow(x, y) {
  const glow = document.createElement("div");

  glow.classList.add("glow");
  glow.style.left = `${x}px`;
  glow.style.top = `${y}px`;
  document.body.appendChild(glow);

  setTimeout(() => {
    glow.remove();
  }, 200);
}

window.addEventListener("mousemove", (e) => {
  createGlow(e.clientX, e.clientY);
});
