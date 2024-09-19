// function chakki(mall) {
//   if (mall === "gnehu") {
//     return "Atta";
//   }
// }

// console.log(chakki("gnehu"));

// function square(num) {
//   // num = parameter
//   return num * num;
// }
// console.log(square(4));
// // 4 is argument for num parameter
// console.log(square(3));
// console.log(square(8));

// function powerOf(num, power) {
//   return num ** power;
// }

// console.log(powerOf(2, 4));
// console.log(powerOf(8, 5));
// console.log(powerOf(2, 32));

// // Types of Functions

// // 1. Function Declaration (basic)
// function fucnName(param) {
//   //code
// }

// // 2. Function Expression (a annonumous function is sored in a variable)
// const fucnName2 = function (param) {
//   //code
// };

// // 3. Arrow Function (most used)
// const fucnName3 = (param) => {
//   //code
// };

// function strToArr(str) {
//   const arr = [];
//   for (let i = 0; i < str.length; i++) {
//     arr.push(str[i]);
//   }
//   return arr;
// }

// console.log(strToArr("Sandeep"));

const camalize = (str) => {
  // words => [ 'hello', 'my', 'name', 'is', 'anmol' ]
  const words = str.toLowerCase().split(" ");

  for (let i = 0; i < words.length; i++) {
    const word = words[i];

    // we have to keep "hello" as it is thats why condition is i >= 1
    if (i >= 1) {
      //  let's say for now word is "name"

      // "name" => "n" => "N"
      const firstCapitalLetter = word[0].toUpperCase();

      // "name" => "ame"
      const remaingWord = word.slice(1);

      // "N" + "ame" => "Name"
      const camelCasedWord = firstCapitalLetter + remaingWord;

      // ["hello", "my" ,"name"] => ["hello", "My" ,"Name"]
      words[i] = camelCasedWord;
    }
  }

  // words => [ 'hello', 'My', 'Name', 'Is', 'Anmol' ]
  // [ 'hello', 'My', 'Name', 'Is', 'Anmol' ] => helloMyNameIsAnmol
  const camelCasedString = words.join("");

  return camelCasedString;
};

const newString = camalize("Hello My name is anmol"); // helloMyNameIsAnmol
console.log(newString);
