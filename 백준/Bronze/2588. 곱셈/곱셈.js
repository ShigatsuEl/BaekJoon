const fs = require("fs");
let [a, b] = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

a = parseInt(a);
let sum = 0;

for (let i = 0; i < b.length; i++) {
  const multi = a * parseInt(b[b.length - i - 1]);
  console.log(multi);
  sum += multi * Math.pow(10, i);
}

console.log(sum);
