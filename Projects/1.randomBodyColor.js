const body = document.getElementsByTagName("body")[0];
const btn = document.createElement("button");
btn.innerText = "Change Color";

body.append(btn);

body.style.margin = "0";
body.style.height = "100vh";
body.style.display = "flex";
body.style.justifyContent = "center";
body.style.alignItems = "center";

btn.style.border = "2px solid black";
btn.style.borderRadius = "5px";
btn.style.cursor = "pointer";

btn.addEventListener("click", () => {
  const r = Math.ceil(Math.random() * 255);
  const g = Math.ceil(Math.random() * 255);
  const b = Math.ceil(Math.random() * 255);
  body.style.backgroundColor = `rgb(${r},${g},${b})`;
});
