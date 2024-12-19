const cells = document.getElementsByClassName("cell");

const p = document.createElement("p");
p.classList.add("stat");
p.innerText = 0;
document.body.append(p);

const randomNumber = (n = 16) => Math.floor(Math.random() * n);
const cellRecord = Array(16).fill({ value: null, isFilled: false });
const numRecord = [1, 2, 3, 4, 5, 6, 7, 8, 1, 2, 3, 4, 5, 6, 7, 8];

function gridRandomFiller() {
  if (numRecord.length === 0) return;
  const num = randomNumber(); // index for cellRecord 4

  if (!cellRecord[num].isFilled) {
    const cell = cells[num]; // 4th cell

    const i = randomNumber(numRecord.length); // 9
    cell.lastElementChild.innerText = numRecord[i]; // 4th cells value is 2

    cellRecord[num] = { value: numRecord[i], isFilled: true };

    numRecord.splice(i, 1);
  }

  gridRandomFiller();
}

gridRandomFiller();

let clicks = [];
let clicksCount = 0;

// listners
for (let i = 0; i < cells.length; i++) {
  const cell = cells[i];
  cell.addEventListener("click", () => {
    // fliping styles
    cell.children[0].classList.toggle("hidden");
    cell.children[1].classList.toggle("hidden");

    if (!cells[i].children[1].classList.contains("hidden")) {
      clicks.push({ pos: i, val: cellRecord[i].value });
    } else {
      clicks.pop();
    }

    clicksCount++;
    p.innerText = clicksCount;

    if (clicks.length === 2) {
      const first = clicks[0];
      const second = clicks[1];

      if (first.val === second.val) {
        // match found
        cells[first.pos].style.pointerEvents = "none";
        cells[second.pos].style.pointerEvents = "none";
      } else {
        // match not found
        setTimeout(() => {
          cells[first.pos].children[0].classList.toggle("hidden");
          cells[first.pos].children[1].classList.toggle("hidden");

          cells[second.pos].children[0].classList.toggle("hidden");
          cells[second.pos].children[1].classList.toggle("hidden");
        }, 300);
      }

      clicks = [];
    }
  });
}
