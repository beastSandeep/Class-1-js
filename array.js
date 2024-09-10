let arr = [12, 23, "str", true, [1, 3], null, undefined];
console.log(arr);

// properties
console.log(arr.length);
console.log(arr[0] + 8);
console.log(arr[1]);

console.log(arr[4][1]);

const array = [];
// methods
// 1. push :- just adds a item to the end.
array.push("waheguru");
array.push("waheguru2");
console.log(array);

// 2. pop :- just remove a item from the end, and it's returns that removed value
const removedValue = array.pop();
console.log(removedValue);
console.log(array);

// 3. unshift :- just adds a item to the front.
array.unshift(removedValue);
array.unshift("khalsa");
console.log(array);

// 4. shift :- just remove a item from the front, and it's returns that removed value
const removedValue2 = array.shift();
console.log(removedValue2);
console.log(array);
