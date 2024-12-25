// 1. fillText(text, x, y [, maxWidth]) :- Fills a given text at the given (x,y) position. Optionally with a maximum width to draw.

// function draw() {
//   const ctx = document.getElementById("canvas").getContext("2d");
//   ctx.font = "48px serif";
//   ctx.fillText("Hello world", 10, 50);
// }
// draw();

// 2. strokeText(text, x, y [, maxWidth]):- Strokes a given text at the given (x,y) position. Optionally with a maximum width to draw.

// function draw2() {
//   const ctx = document.getElementById("canvas").getContext("2d");
//   ctx.font = "48px serif";
//   ctx.strokeText("Hello world", 10, 50);
// }
// draw2();

// ---------------------------------------------------------------------

// 3.Styling text :- In the examples above we are already making use of the font property to make the text a bit larger than the default size. There are some more properties which let you adjust the way the text gets displayed on the canvas:

// ctx.font = value
// The current text style being used when drawing text. This string uses the same syntax as the CSS font property. The default font is 10px sans-serif.

// ctx.textAlign = value
// Text alignment setting. Possible values: start, end, left, right or center. The default value is start.

// ctx.textBaseline = value
// Baseline alignment setting. Possible values: top, hanging, middle, alphabetic, ideographic, bottom. The default value is alphabetic.

// we have predefined text/typography tools for letters of texts and we can check them at ...... 4.DrawingText.png

// ctx.direction = value
// Directionality. Possible values: ltr, rtl, inherit. The default value is inherit.

// ---------------------------------------------------------------------

// 4. Advanced text measurements:- In the case you need to obtain more details about the text, the following method allows you to measure it.

// ctx.measureText():- Returns a TextMetrics object containing the width, in pixels, that the specified text will be when drawn in the current text style.

// const ctx = document.getElementById("canvas").getContext("2d");
// const text = ctx.measureText("foo"); // TextMetrics object
// text.width; // 16;
