const svg = document.getElementById("clock");
svg.setAttribute("width", window.innerWidth);
svg.setAttribute("height", window.innerHeight);

const center = {
  x: Math.round(window.innerWidth / 2),
  y: Math.round(window.innerHeight / 2),
};

const clockRadius = 250;
const clockBorder = true;

function pointsOnCircle(deg, circleRadius = clockRadius) {
  function circleX(rad, circleRadius) {
    return center.x + circleRadius * Math.sin(rad);
  }
  function circleY(rad, circleRadius) {
    return center.y + circleRadius * Math.cos(rad);
  }

  const radian = Math.PI - (deg * Math.PI) / 180;

  return { x: circleX(radian, circleRadius), y: circleY(radian, circleRadius) };
}

const origin = `<circle r="3" cx=${center.x} cy=${center.y} fill="white" />`;
const circle = `<circle r=${clockRadius} cx=${center.x} cy=${
  center.y
} fill="none" ${clockBorder ? 'stroke="white" stroke-width="1"' : ""} />`;

svg.innerHTML += origin;
svg.innerHTML += circle;

for (let i = 0; i < 60; i++) {
  const deg = (360 * i) / 60;

  if (i % 5 === 0) {
    const refLine = `<line x1=${pointsOnCircle(deg, clockRadius - 35).x} y1=${
      pointsOnCircle(deg, clockRadius - 35).y
    } x2=${pointsOnCircle(deg, clockRadius - 2).x} y2=${
      pointsOnCircle(deg, clockRadius - 2).y
    } style="stroke:red;stroke-width:5" stroke-linecap="round"  />`;
    svg.innerHTML += refLine;
  } else {
    const refLine = `<line x1=${pointsOnCircle(deg, clockRadius - 15).x} y1=${
      pointsOnCircle(deg, clockRadius - 15).y
    } x2=${pointsOnCircle(deg).x} y2=${
      pointsOnCircle(deg).y
    } style="stroke:white;stroke-width:2" />`;
    svg.innerHTML += refLine;
  }
}
