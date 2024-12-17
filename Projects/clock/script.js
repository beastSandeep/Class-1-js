const svg = document.getElementById("clock");
svg.setAttribute("width", window.innerWidth);
svg.setAttribute("height", window.innerHeight);
// window.addEventListener("resize", (e) => {
//   console.log(window);
//   svg.setAttribute("width", window.innerWidth);
//   svg.setAttribute("height", window.innerHeight);
// });

const center = {
  x: Math.round(window.innerWidth / 2),
  y: Math.round(window.innerHeight / 2),
};

const clockRadius = 250;
const clockBorder = false;
const digits = false;

const origin = `<circle id="origin" r="3" cx=${center.x} cy=${center.y} fill="white" />`;

const circle = `<circle r=${clockRadius} cx=${center.x} cy=${
  center.y
} fill="none" ${clockBorder ? 'stroke="white" stroke-width="1"' : ""} />`;

svg.innerHTML += origin;
svg.innerHTML += circle;

// const tick = new Audio("./sound/tick.mp3");

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
function hands() {
  return `<line id="hourHand" x1=${pointsOnCircle(rotation.h, 0).x} y1=${
    pointsOnCircle(rotation.h, 0).y
  } x2=${pointsOnCircle(rotation.h, clockRadius - 75).x} y2=${
    pointsOnCircle(rotation.h, clockRadius - 75).y
  } style="stroke:green;stroke-width:3"  />
  
  <line id="minuteHand" x1=${pointsOnCircle(rotation.m, 0).x} y1=${
    pointsOnCircle(rotation.m, 0).y
  } x2=${pointsOnCircle(rotation.m, clockRadius - 60).x} y2=${
    pointsOnCircle(rotation.m, clockRadius - 60).y
  } style="stroke:blue;stroke-width:2"  />

  <line id="secondHand" x1=${pointsOnCircle(rotation.s, 0).x} y1=${
    pointsOnCircle(rotation.s, 0).y
  } x2=${pointsOnCircle(rotation.s, clockRadius - 45).x} y2=${
    pointsOnCircle(rotation.s, clockRadius - 45).y
  } style="stroke:red;stroke-width:1"  />
  `;
}

for (let i = 0; i < 60; i++) {
  const deg = (360 * i) / 60;

  if (i % 5 === 0) {
    if (digits) {
      console.log(i);
    } else {
      const refLine = `<line x1=${pointsOnCircle(deg, clockRadius - 35).x} y1=${
        pointsOnCircle(deg, clockRadius - 35).y
      } x2=${pointsOnCircle(deg, clockRadius - 2).x} y2=${
        pointsOnCircle(deg, clockRadius - 2).y
      } style="stroke:red;stroke-width:5" stroke-linecap="round"  />`;
      svg.innerHTML += refLine;
    }
  } else {
    const refLine = `<line x1=${pointsOnCircle(deg, clockRadius - 15).x} y1=${
      pointsOnCircle(deg, clockRadius - 15).y
    } x2=${pointsOnCircle(deg).x} y2=${
      pointsOnCircle(deg).y
    } style="stroke:white;stroke-width:2" />`;
    svg.innerHTML += refLine;
  }
}

let rotation = { s: 0, m: 0, h: 0 };

svg.innerHTML += hands();
setTimeout(() => {
  document.getElementById("secondHand").remove();
  document.getElementById("minuteHand").remove();
  document.getElementById("hourHand").remove();
  document.getElementById("origin").remove();
}, 1000);

const date = new Date();
// console.log(date.getHours(), date.getMinutes(), date.getSeconds());
rotation.s += (360 / 60) * date.getSeconds() + 360 / 60;

rotation.m +=
  (360 / 60) * (date.getMinutes() + date.getSeconds() / 60) + 360 / (60 * 60);

rotation.h +=
  (360 / 12) * (date.getHours() + date.getMinutes() / 60) +
  360 / (60 * 60 * 12);
let firstTime = true;

setInterval(() => {
  if (firstTime) {
    firstTime = !firstTime;
  } else {
    document.getElementById("secondHand").remove();
    document.getElementById("minuteHand").remove();
    document.getElementById("hourHand").remove();
    document.getElementById("origin").remove();
  }

  // tick.play();

  svg.innerHTML += hands();
  svg.innerHTML += origin;

  rotation.s += 360 / 60;
  rotation.m += 360 / (60 * 60);
  rotation.h += 360 / (60 * 60 * 12);
}, 1000);
