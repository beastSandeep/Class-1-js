const url = "https://jsonplaceholder.typicode.com/posts";

// fetch(url, { method: "GET", headers: { "Content-type": "application/json" } })
//   .then((response) => response.json())
//   .then((data) => {
//     console.log(data);
//   });

// we can make our functions async with just putting async before function keyword
// await can be used inside async funtions, and it's for promises and waits untill they resolves and ruturns a value.
async function getData() {
  const response = await fetch(url);
  const data = await response.json();
  console.log(data);
}
getData();
