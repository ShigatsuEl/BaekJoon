const fs = require("fs");
let [n, ...arr] = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((v) => +v);
let stack = [];

for (let i = 0; i < n; i++) {
  if (arr[i] !== 0) stack.push(arr[i]);
  else stack.pop();
}

console.log(stack.reduce((acc, cur) => (acc += cur), 0));