// Since we're using JavaScript to control <canvas> elements, it's also very easy to make (interactive) animations. In this chapter we will take a look at how to do some basic animations.

// Probably the biggest limitation is, that once a shape gets drawn, it stays that way. If we need to move it we have to redraw it and everything that was drawn before it. It takes a lot of time to redraw complex frames and the performance depends highly on the speed of the computer it's running on.

// ----------------------------------------------------------------------------------------

// Basic animation steps :-
// These are the steps you need to take to draw a frame:

// 1.Clear the canvas:- Unless the shapes you'll be drawing fill the complete canvas (for instance a backdrop image), you need to clear any shapes that have been drawn previously. The easiest way to do this is using the clearRect() method.

// 2.Save the canvas state:- If you're changing any setting (such as styles, transformations, etc.) which affect the canvas state and you want to make sure the original state is used each time a frame is drawn, you need to save that original state.

// 3.Draw animated shapes:- The step where you do the actual frame rendering.

// 4.Restore the canvas state:- If you've saved the state, restore it before drawing a new frame.

// ----------------------------------------------------------------------------------------

// Controlling an animation
// Shapes are drawn to the canvas by using the canvas methods directly or by calling custom functions. In normal circumstances, we only see these results appear on the canvas when the script finishes executing. For instance, it isn't possible to do an animation from within a for loop. That means we need a way to execute our drawing functions over a period of time. There are two ways to control an animation like this

// setInterval()
// Starts repeatedly executing the function specified by function every delay milliseconds.

// setTimeout()
// Executes the function specified by function in delay milliseconds.

// requestAnimationFrame()
// Tells the browser that you wish to perform an animation and requests that the browser call a specified function to update an animation before the next repaint.

// const ctx = document.getElementById("canvas").getContext("2d");

// let posX = 0;

// const w = c.getAttribute("width");
// const h = c.getAttribute("height");

// const draw = (e) => {
//   ctx.clearRect(0, 0, w, h);
//   ctx.fillRect(posX, 0, 100, 100);

//   if (posX < w - 100) {
//     posX += 2;
//   }
//   window.requestAnimationFrame(draw);
// };

// window.requestAnimationFrame(draw);

// -------------------------------------------------------------------------------

// how to controll canvas element using event listners

const ctx = document.getElementById("canvas").getContext("2d");

const cursor = { x: 0, y: 0 };

addEventListener("mousemove", (e) => {
  cursor.x = e.clientX;
  cursor.y = e.clientY;
});

const boxSize = { w: 20, h: 50 };

function tick() {
  ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
  ctx.fillRect(
    cursor.x - boxSize.w / 2,
    cursor.y - boxSize.h / 2,
    boxSize.w,
    boxSize.h
  );

  requestAnimationFrame(tick);
}
requestAnimationFrame(tick);
