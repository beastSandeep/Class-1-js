// createElement(elementName) :- we can create elements from it, it just take a tag/element name

const div = document.createElement("div");
// console.log(div);

// createTextNode(string) :- we can create text nodes from it, it just take a text as a string
const text = document.createTextNode("my name is sandeep");
// console.log(text);

// append(...nodes) :- this method can insert one node into another
div.append(text); // <div>my name is sandeep</div>

const body = document.getElementsByTagName("body")[0];

body.append(div); // <body><div>my name is sandeep</div></body>
