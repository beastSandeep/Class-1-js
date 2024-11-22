const btns = document.getElementsByClassName("btn");
const turnMessage = document.getElementsByClassName("turn")[0];
const winnerMessage = document.getElementsByClassName("win")[0];

let turn = true; // X
let clicked = Array(9).fill(false);
const click = new Audio("./sounds/click.mp3");

for (let i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", (e) => {
    if (!clicked[i]) {
      click.play();

      if (turn) {
        e.target.innerText = "X";
        e.target.style.backgroundColor = "black";
        e.target.style.color = "white";
        turnMessage.innerText = "O's turn";
      } else {
        e.target.innerText = "O";
        e.target.style.backgroundColor = "#888";
        e.target.style.color = "white";
        turnMessage.innerText = "X's turn";
      }

      clicked[i] = true;
      turn = !turn;

      // chcking winner
      checkWinner();
    }
  });
}

function checkWinner() {}
