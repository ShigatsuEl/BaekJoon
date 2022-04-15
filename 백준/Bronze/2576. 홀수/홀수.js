const fs = require("fs");
let input = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((v) => +v);
let result = [];

for (let x of input) {
  if (x % 2 === 1) result.push(x);
}

console.log(
  result.length !== 0
    ? result.reduce((acc, cur) => (acc += cur), 0) + "\n" + Math.min(...result)
    : -1
);