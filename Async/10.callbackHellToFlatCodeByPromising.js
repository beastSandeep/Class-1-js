function changeText(el, text, color, time) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (el) {
        el.style.color = color;
        el.textContent = text;
        resolve();
      } else {
        reject("element not found");
      }
    }, time);
  });
}

const headings = document.querySelectorAll("h1");

changeText(headings[0], "One", "red", 1000)
  .then(() => changeText(headings[1], "Two", "blue", 1000))
  .then(() => changeText(headings[2], "Three", "green", 1000))
  .then(() => changeText(headings[3], "Four", "purple", 1000))
  .then(() => changeText(headings[4], "Five", "orange", 1000))
  .then(() => changeText(headings[5], "Six", "cyan", 1000))
  .then(() => changeText(headings[6], "Seven", "pink", 1000))
  .catch((data) => {
    console.log(data);
  });
