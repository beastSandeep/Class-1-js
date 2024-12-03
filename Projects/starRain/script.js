const ranNum = (max = 256, min = 8) =>
  Math.max(Math.min(Math.floor(Math.random() * max), max), min);

const starSVG = document.getElementById("star");

function createGlow(x, y) {
  const glow = document.createElement("div");

  glow.classList.add("glow");
  glow.style.left = `${x}px`;
  glow.style.top = `${y}px`;
  document.body.append(glow);

  setTimeout(() => {
    glow.remove();
  }, 100);
}

function createStar(x, y) {
  const star = document.createElement("div");
  star.classList.add("star");
  star.style.left = `${x}px`;
  star.style.top = `${y}px`;

  const clonedStarSVG = starSVG.cloneNode(true);
  clonedStarSVG.style.width = `${ranNum(30, 15)}px`;
  clonedStarSVG.style.fill = `rgb(${ranNum()},${ranNum()},${ranNum()})`;
  star.append(clonedStarSVG);

  star.style.animation = `rotate${ranNum(
    3,
    1
  )} 1500ms cubic-bezier(0,-0.55,.5,.43) forwards`;
  document.body.append(star);

  setTimeout(() => {
    star.remove();
  }, 1500);
}

window.addEventListener("mousemove", (e) => {
  createGlow(e.clientX, e.clientY);
  createStar(e.clientX, e.clientY);
});
