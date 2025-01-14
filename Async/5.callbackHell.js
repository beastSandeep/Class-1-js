const headings = document.querySelectorAll("h1");

// setTimeout(() => {
//   headings[0].style.color = "red";
//   headings[0].textContent = "One";

//   setTimeout(() => {
//     headings[1].style.color = "blue";
//     headings[1].textContent = "Two";

//     setTimeout(() => {
//       headings[2].style.color = "green";
//       headings[2].textContent = "Three";

//       setTimeout(() => {
//         headings[3].style.color = "purple";
//         headings[3].textContent = "Four";

//         setTimeout(() => {
//           headings[4].style.color = "orange";
//           headings[4].textContent = "Five";

//           setTimeout(() => {
//             headings[5].style.color = "cyan";
//             headings[5].textContent = "Six";

//             setTimeout(() => {
//               headings[6].style.color = "indigo";
//               headings[6].textContent = "Seven";
//             }, 500);
//           }, 500);
//         }, 500);
//       }, 500);
//     }, 500);
//   }, 500);
// }, 500);

function changeText(
  element,
  text,
  color,
  time,
  successCallback,
  failureCallback
) {
  setTimeout(() => {
    if (element) {
      element.style.color = color;
      element.textContent = text;
      successCallback();
    } else {
      failureCallback();
    }
  }, time);
}

changeText(
  headings[0],
  "One",
  "red",
  500,
  () => {
    changeText(
      headings[1],
      "Two",
      "blue",
      500,
      () => {
        changeText(
          headings[2],
          "Three",
          "orange",
          500,
          () => {
            changeText(
              headings[3],
              "Four",
              "brown",
              500,
              () => {
                changeText(
                  headings[4],
                  "Five",
                  "green",
                  500,
                  () => {
                    changeText(
                      headings[5],
                      "Six",
                      "purple",
                      500,
                      () => {
                        changeText(
                          headings[6],
                          "Seven",
                          "cyan",
                          500,
                          () => {
                            console.log("all elements done");
                          },
                          () => {
                            console.log("heading 7 is missing");
                          }
                        );
                      },
                      () => {
                        console.log("heading 6 is missing");
                      }
                    );
                  },
                  () => {
                    console.log("heading 5 is missing");
                  }
                );
              },
              () => {
                console.log("heading 4 is missing");
              }
            );
          },
          () => {
            console.log("heading 3 is missing");
          }
        );
      },
      () => {
        console.log("heading 2 is missing");
      }
    );
  },
  () => {
    console.log("heading 1 is missing");
  }
);
