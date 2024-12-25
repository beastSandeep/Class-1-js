// 1. Colors:- Up until now we have only seen methods of the drawing context. If we want to apply colors to a shape, there are two important properties we can use: fillStyle and strokeStyle.

// fillStyle = color
// strokeStyle = color

// ctx.fillStyle = "orange";
// ctx.fillStyle = "#FFA500";
// ctx.fillStyle = "rgb(255 165 0)";
// ctx.fillStyle = "rgb(255 165 0 / 100%)";

// fillStyle
// function draw() {
//   const ctx = document.getElementById("canvas").getContext("2d");
//   for (let i = 0; i < 6; i++) {
//     for (let j = 0; j < 6; j++) {
//       ctx.fillStyle = `rgb(${Math.floor(255 - 42.5 * i)} ${Math.floor(
//         255 - 42.5 * j
//       )} 0)`;
//       ctx.fillRect(j * 25, i * 25, 25, 25);
//     }
//   }
// }
// draw();

// strokeStyle
// function draw() {
//   const ctx = document.getElementById("canvas").getContext("2d");
//   for (let i = 0; i < 6; i++) {
//     for (let j = 0; j < 6; j++) {
//       ctx.strokeStyle = `rgb(0 ${Math.floor(255 - 42.5 * i)} ${Math.floor(
//         255 - 42.5 * j
//       )})`;
//       ctx.beginPath();
//       ctx.arc(12.5 + j * 25, 12.5 + i * 25, 10, 0, 2 * Math.PI, true);
//       ctx.stroke();
//     }
//   }
// }
// draw();

// -------------------------------------------------------------------------

// 2. Transparency :- In addition to drawing opaque shapes to the canvas, we can also draw semi-transparent (or translucent) shapes. This is done by either setting the globalAlpha property or by assigning a semi-transparent color to the stroke and/or fill style.
// ctx.globalAlpha :- set transparency value globally in canvas

// Applies the specified transparency value to all future shapes drawn on the canvas. The value must be between 0.0 (fully transparent) to 1.0 (fully opaque). This value is 1.0 (fully opaque) by default.

// function draw() {
//   const ctx = document.getElementById("canvas").getContext("2d");
//   // draw background
//   ctx.fillStyle = "#FD0";
//   ctx.fillRect(0, 0, 75, 75);
//   ctx.fillStyle = "#6C0";
//   ctx.fillRect(75, 0, 75, 75);
//   ctx.fillStyle = "#09F";
//   ctx.fillRect(0, 75, 75, 75);
//   ctx.fillStyle = "#F30";
//   ctx.fillRect(75, 75, 75, 75);
//   ctx.fillStyle = "#FFF";

//   // set transparency value
//   ctx.globalAlpha = 0.3;

//   // Draw semi transparent circles
//   for (let i = 0; i < 7; i++) {
//     ctx.beginPath();
//     ctx.arc(75, 75, 10 + 10 * i, 0, Math.PI * 2, true);
//     ctx.fill();
//   }
// }
// draw();

// -------------------------------------------------------------------------

// 3. Line styles: There are several properties which allow us to style lines.

// ctx.lineWidth = number
// Sets the width of lines drawn in the future.

// function draw() {
//   const ctx = document.getElementById("canvas").getContext("2d");
//   for (let i = 0; i < 10; i++) {
//     ctx.lineWidth = 1 + i;
//     ctx.beginPath();
//     ctx.moveTo(5 + i * 14, 5);
//     ctx.lineTo(5 + i * 14, 140);
//     ctx.stroke();
//   }
// }
// draw();

// ctx.lineCap = ["butt", "round", "square"]
// Sets the appearance of the ends of lines.

// function draw() {
//   const ctx = document.getElementById("canvas").getContext("2d");

//   // Draw guides
//   ctx.strokeStyle = "#09f";
//   ctx.beginPath();
//   ctx.moveTo(10, 10);
//   ctx.lineTo(140, 10);
//   ctx.moveTo(10, 140);
//   ctx.lineTo(140, 140);
//   ctx.stroke();

//   // Draw lines
//   ctx.strokeStyle = "black";
//   ["butt", "round", "square"].forEach((lineCap, i) => {
//     ctx.lineWidth = 15;
//     ctx.lineCap = lineCap;
//     ctx.beginPath();
//     ctx.moveTo(25 + i * 50, 10);
//     ctx.lineTo(25 + i * 50, 140);
//     ctx.stroke();
//   });
// }
// draw();

// ctx.lineJoin = ["round", "bevel", "miter"]
// Sets the appearance of the "corners" where lines meet.

// function draw() {
//   const ctx = document.getElementById("canvas").getContext("2d");
//   ctx.lineWidth = 10;
//   ["round", "bevel", "miter"].forEach((lineJoin, i) => {
//     ctx.lineJoin = lineJoin;
//     ctx.beginPath();
//     ctx.moveTo(-5, 5 + i * 40);
//     ctx.lineTo(35, 45 + i * 40);
//     ctx.lineTo(75, 5 + i * 40);
//     ctx.lineTo(115, 45 + i * 40);
//     ctx.lineTo(155, 5 + i * 40);
//     ctx.stroke();
//   });
// }
// draw();

// miterLimit = value
// Establishes a limit on the miter when two lines join at a sharp angle, to let you control how thick the junction becomes.

// getLineDash()
// Returns the current line dash pattern array containing an even number of non-negative numbers.

// setLineDash(segments)
// Sets the current line dash pattern.

// lineDashOffset = value
// Specifies where to start a dash array on a line.

// ----------------------------------------------------------------------

// 4. Gradients:- Just like any normal drawing program, we can fill and stroke shapes using linear, radial and conic gradients. We create a CanvasGradient object by using one of the following methods. We can then assign this object to the fillStyle or strokeStyle properties.

// createLinearGradient(x1, y1, x2, y2):- Creates a linear gradient object with a starting point of (x1, y1) and an end point of (x2, y2).

// Example:-
// const lineargradient = ctx.createLinearGradient(0, 0, 150, 150);
// lineargradient.addColorStop(0, "white");
// lineargradient.addColorStop(1, "black");
// ctx.fillStyle = lineargradient;

// function draw() {
//   const ctx = document.getElementById("canvas").getContext("2d");

//   // Create gradients
//   const linGrad = ctx.createLinearGradient(0, 0, 0, 150);
//   linGrad.addColorStop(0, "#00ABEB");
//   linGrad.addColorStop(0.5, "#fff");
//   linGrad.addColorStop(0.5, "#26C000");
//   linGrad.addColorStop(1, "#fff");

//   const linGrad2 = ctx.createLinearGradient(0, 50, 0, 95);
//   linGrad2.addColorStop(0.5, "#000");
//   linGrad2.addColorStop(1, "rgb(0 0 0 / 0%)");

//   // assign gradients to fill and stroke styles
//   ctx.fillStyle = linGrad;
//   ctx.strokeStyle = linGrad2;

//   // draw shapes
//   ctx.fillRect(10, 10, 130, 130);
//   ctx.strokeRect(50, 50, 50, 50);
// }
// draw();

// createRadialGradient(x1, y1, r1, x2, y2, r2):- Creates a radial gradient. The parameters represent two circles, one with its center at (x1, y1) and a radius of r1, and the other with its center at (x2, y2) with a radius of r2.

// function draw() {
//   const ctx = document.getElementById("canvas").getContext("2d");

//   // Create gradients
//   const radGrad = ctx.createRadialGradient(45, 45, 10, 52, 50, 30);
//   radGrad.addColorStop(0, "#A7D30C");
//   radGrad.addColorStop(0.9, "#019F62");
//   radGrad.addColorStop(1, "rgb(1 159 98 / 0%)");

//   const radGrad2 = ctx.createRadialGradient(105, 105, 20, 112, 120, 50);
//   radGrad2.addColorStop(0, "#FF5F98");
//   radGrad2.addColorStop(0.75, "#FF0188");
//   radGrad2.addColorStop(1, "rgb(255 1 136 / 0%)");

//   const radGrad3 = ctx.createRadialGradient(95, 15, 15, 102, 20, 40);
//   radGrad3.addColorStop(0, "#00C9FF");
//   radGrad3.addColorStop(0.8, "#00B5E2");
//   radGrad3.addColorStop(1, "rgb(0 201 255 / 0%)");

//   const radGrad4 = ctx.createRadialGradient(0, 150, 50, 0, 140, 90);
//   radGrad4.addColorStop(0, "#F4F201");
//   radGrad4.addColorStop(0.8, "#E4C700");
//   radGrad4.addColorStop(1, "rgb(228 199 0 / 0%)");

//   // draw shapes
//   ctx.fillStyle = radGrad4;
//   ctx.fillRect(0, 0, 150, 150);
//   ctx.fillStyle = radGrad3;
//   ctx.fillRect(0, 0, 150, 150);
//   ctx.fillStyle = radGrad2;
//   ctx.fillRect(0, 0, 150, 150);
//   ctx.fillStyle = radGrad;
//   ctx.fillRect(0, 0, 150, 150);
// }
// draw();
