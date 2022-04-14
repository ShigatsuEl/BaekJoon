const fs = require("fs");
const input = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((v) => parseInt(v));
let result = input[0],
  line = 0;

for (let i = 1; i < input.length; i++) {
  if (input[i] > result) {
    result = input[i];
    line = i;
  }
}

console.log(result);
console.log(line + 1);