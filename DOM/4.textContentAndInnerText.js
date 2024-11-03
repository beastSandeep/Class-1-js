const h2 = document.getElementById("heading");

// Getting Values
console.log(h2.innerText); // Mange Your Task
console.log(h2.textContent); // Mange Your Task Hello
console.log(h2.innerHTML); // Mange Your Task <span>Hello</span>

// Setting Values
h2.innerText = "wow";

console.log(h2.innerText); // wow

// textContent: Use for plain text, including child elements.
// innerText: Use for visible text, considering CSS.
// innerHTML: Use for HTML content, including tags.
// outerHTML: Use for the entire HTML structure of the element.
