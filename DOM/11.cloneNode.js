// cloneNode(?true) clones a elemnts and we can pass optionally true init for deep cloning

const body = document.getElementsByTagName("body")[0];

const li = document.createElement("li");
li.innerText = "123"; // <li>123</li>

body.append(li);
console.log(li);

const li2 = li.cloneNode(true); // <li>123</li>

li.innerText = "wow"; // <li>wow</li>

body.append(li2);
console.log(li2);
