const length = 20;

function randomUpperLetter() {
  const upperCaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  return upperCaseLetters[Math.floor(Math.random() * 26)];
}

function randomLowerLetter() {
  const lowerCaseLetters = "abcdefghijklmnopqrstuvwxyz";
  return lowerCaseLetters[Math.floor(Math.random() * 26)];
}

const arr = [randomUpperLetter, randomLowerLetter];
let password = "";

for (let i = 0; i < length; i++) {
  const randomFunc = arr[Math.round(Math.random())];

  const word = randomFunc();

  password += word;
  // "" + "k" => "k"
  // "k" + "u" => "ku"
  // "ku" + "A" => "kuA"
}

console.log(password);
