const svg = document.getElementById("clock");
svg.setAttribute("width", window.innerWidth);
svg.setAttribute("height", window.innerHeight);

const center = {
  x: Math.round(window.innerWidth / 2),
  y: Math.round(window.innerHeight / 2),
};

const clockRadius = 250;

function circleX(rad) {
  return center.x + clockRadius * Math.sin(rad);
}
function circleY(rad) {
  return center.y + clockRadius * Math.cos(rad);
}

function pointsOnCircle(deg) {
  const radian = Math.PI - (deg * Math.PI) / 180;

  return { x: circleX(radian), y: circleY(radian) };
}

const origin = `<circle r="3" cx=${center.x} cy=${center.y} fill="white" />`;
const circle = `<circle r=${clockRadius} cx=${center.x} cy=${center.y} fill="none" stroke="green" stroke-width="3" />`;

svg.innerHTML += origin;
svg.innerHTML += circle;

const parts = 12;
for (let i = 0; i < parts; i++) {
  const deg = (360 * i) / parts;
  const refLine2 = `<line x1=${center.x} y1=${center.y} x2=${
    pointsOnCircle(deg).x
  } y2=${pointsOnCircle(deg).y} style="stroke:purple;stroke-width:2" />`;
  svg.innerHTML += refLine2;
}
