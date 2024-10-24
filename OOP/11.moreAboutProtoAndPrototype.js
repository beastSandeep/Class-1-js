// let's make an array
// const num = [1, 2, 3];

// we can also create array with it's constructor (in the behind always this happes)
const num = new Array(1, 2, 3);

// so that "new" did this
// num => Array.prototype (link)

// all of it's methods are kept in Array function's prototype
// Array.prototype.length
// Array.prototype.pop()

console.log(num.__proto__);
console.log(Array.prototype);

// And one thing to remember Array Constructor's prototype is also an array
