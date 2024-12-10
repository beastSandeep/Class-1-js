const boxs = document.getElementsByClassName("box");

function move(box) {
  box.addEventListener("mouseenter", () => {
    const x = Math.round(Math.random() * (window.innerWidth - 50));
    const y = Math.round(Math.random() * (window.innerHeight - 50));

    box.style.left = `${x}px`;
    box.style.top = `${y}px`;

    // box.style.backgroundColor = `rgb(${Math.floor(
    //   Math.random() * 256
    // )},${Math.floor(Math.random() * 256)},${Math.floor(Math.random() * 256)})`;
  });
  // box.addEventListener("click", () => {
  //   const x = Math.round(Math.random() * (window.innerWidth - 50));
  //   const y = Math.round(Math.random() * (window.innerHeight - 50));

  //   box.style.left = `${x}px`;
  //   box.style.top = `${y}px`;

  //   box.style.backgroundColor = `rgb(${Math.floor(
  //     Math.random() * 256
  //   )},${Math.floor(Math.random() * 256)},${Math.floor(Math.random() * 256)})`;
  // });
}

for (let i = 0; i < boxs.length; i++) {
  move(boxs[i]);
}
