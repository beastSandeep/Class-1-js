console.log(Math.PI); // 3.141592653589793
console.log(Math.sqrt(16)); // 4
console.log(Math.sin(0)); // 0
console.log(Math.cos(0)); // 1

console.log(Math.floor(2.4)); // 2
console.log(Math.ceil(2.4)); // 3

console.log(Math.min(3, 5, 8)); // 3
console.log(Math.max(3, 5, 8)); // 8

console.log(Math.random()); // 0.4051602187398238

function range(min, max) {
  const underMax = Math.random() * max; // always less than max

  const roundedUnderMax = Math.ceil(underMax);

  return Math.max(min, roundedUnderMax);
}

// for (let index = 0; index < 50; index++) {
//   console.log(range(59, 60));
// }

// make a function to generate an OTP (6 digit)
// funtion should look like
function OTPGen() {
  return Math.floor(Math.random() * 900000 + 100000);
}
for (let index = 0; index < 50; index++) {
  console.log(OTPGen());
}
