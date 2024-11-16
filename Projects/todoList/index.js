// Selections
const body = document.getElementsByTagName("body")[0];
const tasksTabel = document.getElementsByClassName("tasks")[0];
const input = document.getElementById("message");
const submitButton = document.getElementById("submit");

function taskCreater(msg) {
  const task = document.createElement("div");
  task.classList.add("task");
  const p = document.createElement("p");
  p.innerText = msg.length > 32 ? msg.substring(0, 32) + "..." : msg;
  p.setAttribute("title", msg);
  task.append(p);

  const button = document.createElement("button");
  button.innerHTML = `<svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="feather feather-trash-2"
              >
                <polyline points="3 6 5 6 21 6"></polyline>
                <path
                  d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"
                ></path>
                <line x1="10" y1="11" x2="10" y2="17"></line>
                <line x1="14" y1="11" x2="14" y2="17"></line>
              </svg>`;

  button.addEventListener("click", function () {
    p.style.textDecoration = "line-through";
    task.style.backgroundColor = "#888";
    task.style.opacity = "0.5";
    button.remove();
  });

  task.append(button);

  return task;
}

submitButton.addEventListener("click", function (e) {
  e.preventDefault(); // prevents from reloding
  const taskMessage = input.value; // storing message

  input.value = ""; // resetting input value

  // adding task to tasks section
  if (taskMessage) {
    const task = taskCreater(taskMessage);
    tasksTabel.append(task);
  }
});

// Reset Button
const btn = document.createElement("button");
btn.innerText = "Reset";
btn.style.backgroundColor = "orange";
btn.style.color = "black";
btn.style.border = "1px solid black";
btn.style.padding = "10px 15px";
btn.style.fontWeight = "bold";
btn.style.borderRadius = "10px";
btn.style.position = "absolute";
btn.style.top = "2vh";
btn.style.left = "2vw";
btn.style.cursor = "pointer";

btn.addEventListener("click", () => {
  tasksTabel.innerHTML = "";
});

body.prepend(btn);
