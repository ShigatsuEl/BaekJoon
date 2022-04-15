const fs = require("fs");
let [n, k] = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ")
  .map((v) => +v);
const stack = Array.from({ length: n }, (_, i) => i + 1),
  result = [];

while (stack.length) {
  for (let i = 0; i < k - 1; i++) {
    stack.push(stack.shift());
  }
  result.push(stack.shift());
}

console.log(`<${result.join(", ")}>`);