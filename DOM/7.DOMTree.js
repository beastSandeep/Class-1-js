/*<html>

  <head>
    <title>DOM Traversing</title>
    <script src="./src.js" defer></script>
  </head>

  <body>
    <div class="container">
      <h1>My Heading</h1>
      <p>Information</p>
    </div>
  </body>

</html> */

// Above html is made a tree like sturcture we can see it here :--> 7.DOM Tree.png (must before leaning these methods)

// We have some properties and methods to traverse in DOM(basically we can jump node to node with these tools)

// 1. getRootNode() :- it returns a root node (document node 😄)
const rootNode = document.getRootNode();
console.log(rootNode);

// 2. childNodes :- it a property that returns childrens(as a NodeList) of any node
const childNode = rootNode.childNodes;
console.log(childNode);
const html = childNode[1];
console.log(html.childNodes);

// 3. parentNode :- it a property that returns parent of any node
const body = html.childNodes[2];
console.dir(body.parentNode);

// 4. nextSibling :- it a property that returns next sibling of any node
const head = html.childNodes[0];
const text = head.nextSibling;
console.log(text); // nameSpace text
console.log(text.nextSibling); // body

// 5. nextElementSibling :- it a property that returns next element sibling of any node
console.log(head.nextElementSibling); // body

// 6. children :- it a property that returns childrens(as a HTMLCollection) of any node and it's skips text node only considers element nodes
console.log(html.children); // body

// we can only search what we are searching on
// lile here we are searching head in whole document but again we are searching title in just head only
const myHead = document.querySelector("head");
const title = myHead.querySelector("title");
console.log(title);
