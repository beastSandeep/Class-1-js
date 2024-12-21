const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

// all properties and methods are availabel on canvas's contex, here is ctx variable

// 1. Rectangle :- we can create rectangle / squares with fillRect() and strokeRect() methods
// fillRect(x,y,width,height) filled box / strokeRect(x,y,width,height) borderd box
ctx.fillRect(50, 50, 50, 50);
ctx.strokeRect(40, 40, 70, 70);

// you can change default black colour of it
ctx.fillStyle = "orange";
ctx.strokeStyle = "rgb(11, 100, 234)";

ctx.fillRect(150, 150, 50, 50);
ctx.strokeRect(190, 190, 70, 70);

// clearRect(x,y,width,height) :- it's used for deleting parts form another any shpaes, it's eraser is in rectangle
ctx.clearRect(175, 175, 12, 12);

// -------------------------------------------------------------------

// for dynamic shapes we can use 'Drawing paths' ways
// In this way we use beginPath() and than use 'drawing commands', Once the path has been created, we can stroke or fill the path to render it.

// beginPath():-
// Creates a new path. Once created, future drawing commands are directed into the path and used to build the path up.

// closePath():-
// Adds a straight line to the path, going to the start of the current sub-path.

// stroke():-
// Draws the shape by stroking its outline.

// fill():-
// Draws a solid shape by filling the path's content area.

// When you call fill(), any open shapes are closed automatically, so you don't have to call closePath(). This is not the case when you call stroke().

// now we can start and end a path creation and we can fill or stroke afterword but in middle of it, we have to create the actual path. so for this we have several methods

// moveTo(x, y):-
// Moves the pen to the coordinates specified by x and y.

// lineTo(x, y):-
// Draws a line from the current drawing position to the position specified by x and y.

// just think that you are holding a pen and moveTo() just move your pen adn lineTo() also moves your pen but it's makes a line while moving

// -------------------------------------------------------------------

// 2. Triangle:- we can create triangle with with 'Drawing paths' ways
ctx.beginPath();
ctx.moveTo(325, 325);
ctx.lineTo(405, 325);
ctx.lineTo(325, 405);
ctx.fill();

ctx.beginPath();
ctx.moveTo(425, 425);
ctx.lineTo(425, 345);
ctx.lineTo(345, 425);
ctx.closePath();
ctx.stroke();

// 3. Circles:- we can create circles with with arc() method
// arc(x, y, radius, startAngle, endAngle, counterclockwise)
ctx.beginPath();
ctx.arc(250, 450, 80, 0, 2 * Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.arc(400, 700, 50, 0, Math.PI * 2, true); // Outer circle
ctx.moveTo(435, 700);
ctx.arc(400, 700, 35, 0, Math.PI, false); // Mouth (clockwise)
ctx.moveTo(390, 690);
ctx.arc(385, 690, 5, 0, Math.PI * 2, true); // Left eye
ctx.moveTo(420, 690);
ctx.arc(415, 690, 5, 0, Math.PI * 2, true); // Right eye
ctx.stroke();
