let matter = "solid";

if (matter === "liquid" || matter !== "plasma") {
  console.log("if");
} else {
  console.log("else");
}

// nested if else
if (2 === 3) {
  if (matter === "liquid") {
    console.log("if part");
  }
} else {
  if (matter !== "plasma") {
    console.log("nested-if of else part");
  } else {
    console.log("nested-else of else part");
  }
}

// write a code that prints statement according to a temprature variable in 10deg gap
// classic way
let temp = -15;

if (temp >= 40) {
  console.log("turn on AC");
} else {
  if (temp >= 30) {
    console.log("go for swimming");
  } else {
    if (temp >= 20) {
      console.log("go for a walk");
    } else {
      if (temp >= 10) {
        console.log("put on heavy cloths");
      } else {
        if (temp >= 0) {
          console.log("turn on heater");
        } else {
          console.log("go to bed");
        }
      }
    }
  }
}

// if else-if else-if else way (morden way)
if (temp >= 40) {
  console.log("turn on AC");
} else if (temp >= 30) {
  console.log("go for swimming");
} else if (temp >= 20) {
  console.log("go for a walk");
} else if (temp >= 10) {
  console.log("put on heavy cloths");
} else if (temp >= 0) {
  console.log("turn on heater");
} else {
  console.log("go to bed");
}
