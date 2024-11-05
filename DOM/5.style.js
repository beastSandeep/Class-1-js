// style is unique property for all elements, we can get and set all css things here
// style is an object itself, all css properties are keys of it

const h2 = document.getElementById("h2");
console.log(h2.style);

h2.style.color = "red";

// all dashed(-) properties are converted into camelCase
// ex.- padding-top => paddingTop
// ex.- background-color => backgroundColor

h2.style.paddingTop = "30px";
h2.style.backgroundColor = "rgb(200,200,200)";

console.log(h2.style.color);
