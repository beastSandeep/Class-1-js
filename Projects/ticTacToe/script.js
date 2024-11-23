const btns = document.getElementsByClassName("btn");
const turnMessage = document.getElementsByClassName("turn")[0];
const winnerMessage = document.getElementsByClassName("win")[0];

let turn = true; // X
const grid = Array(9).fill({ clicked: false, value: null });
const click = new Audio("./sounds/click.mp3");

for (let i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", (e) => {
    if (!grid[i].clicked) {
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

      e.target.classList.add("clicked");
      grid[i] = { clicked: true, value: turn ? "X" : "O" };
      turn = !turn;

      // chcking winner
      checkWinner();
    }
  });
}

function checkWinner() {
  const winningPostions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (let i = 0; i < winningPostions.length; i++) {
    const winPos = winningPostions[i];
    for (let j = 0; j < grid.length; j++) {
      const index1 = winPos[0];
      const index2 = winPos[1];
      const index3 = winPos[2];

      const value1 = grid[index1].value;
      const value2 = grid[index2].value;
      const value3 = grid[index3].value;

      if (!value1 || !value2 || !value3) continue;

      if (value1 === value2 && value2 === value3 && value1 === value3) {
        winnerMessage.innerText = `${value1} is winner`;

        const restartBtn = document.createElement("button");
        restartBtn.classList.add("restart");
        restartBtn.innerText = "Restart";

        restartBtn.addEventListener("click", () => {
          window.location.reload();
        });

        turnMessage.before(restartBtn);
        turnMessage.remove();

        for (let k = 0; k < grid.length; k++) {
          grid[k].clicked = true;
        }
        return;
      }
    }
  }
}
