let iteration = 0;
const str = "hello";

while (iteration < str.length) {
  console.log(str[iteration], iteration);
  iteration++;
}

for (let iteration = 0; iteration < str.length; iteration++) {
  console.log(str[iteration], iteration);
}
