// const myVar = "vlaue 10";

// function myApp() {
//   const myVar = "vlaue 1";

//   function myFunc() {
//     // const myVar = "vlaue 59";
//     console.log("inside myFunc", myVar);
//   }

//   console.log(myVar);
//   myFunc();
// }

// myApp();

const myVar = "value 1";

function myApp() {
  function myFunc() {
    const myFunc2 = () => {
      console.log("inside myFunc2", myVar);
    };
    myFunc2();
    console.log(myVar);
  }

  console.log(myVar);
  myFunc();
}
myApp();
