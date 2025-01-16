const url = "https://jsonplaceholder.typicode.com/posts";

// XMLHttpRequest()  // old way
// fetch() // new inbuild way
// axios() // new third party way

// GET request
fetch(url, { method: "GET", headers: { "Content-type": "application/json" } })
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
  });

const data = {
  name: "Anmol",
  age: 18,
};

// POST request
fetch(url, {
  method: "POST",
  body: JSON.stringify(data),
  headers: { "Content-type": "application/json" },
})
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
  });
