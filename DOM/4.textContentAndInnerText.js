const div = document.getElementById("heading");

// textContent: Use for plain text, including child elements.
// innerText: Use for visible text, considering CSS.
// innerHTML: Use for HTML content, including tags.
// outerHTML: Use for the entire HTML structure of the element.

// Getting Values
console.log(div.innerText); // Mange Your Task
console.log(div.textContent); // Mange Your Task Hello
console.log(div.innerHTML); // Mange Your Task <span>Hello</span>

// Setting Values
div.innerText = "wow";

console.log(div.innerText); // wow
