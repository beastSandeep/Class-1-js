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

// createLinearGradient(x1, y1, x2, y2):-
