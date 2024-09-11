let fruits = ["Avacado", "Blue Berries", "Dragon Fruit", "Peach"];

// console.log(fruits[0]);
// console.log(fruits[1]);
// console.log(fruits[2]);
// console.log(fruits[3]);

let reversedFruits = [];
const length = fruits.length;

for (let i = 0; i < length; i++) {
  const lastItem = fruits.pop();
  reversedFruits.push(lastItem);
}

console.log(fruits, reversedFruits);
