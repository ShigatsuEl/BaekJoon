const fs = require("fs");
let [_, ...arr] = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");
const stack = [],
  result = [];

for (const cmd of arr) {
  cmd[1] === "u" && cmd[6] === "r" && stack.unshift(cmd.split(" ")[1]);
  cmd[1] === "u" && cmd[6] === "a" && stack.push(cmd.split(" ")[1]);
  cmd[1] === "o" && cmd[5] === "r" && result.push(stack.shift() || -1);
  cmd[1] === "o" && cmd[5] === "a" && result.push(stack.pop() || -1);
  cmd[1] === "i" && result.push(stack.length);
  cmd[1] === "m" && result.push(stack.length === 0 ? 1 : 0);
  cmd[1] === "r" && result.push(stack[0] || -1);
  cmd[1] === "a" && result.push(stack[stack.length - 1] || -1);
}

console.log(result.join("\n"));
