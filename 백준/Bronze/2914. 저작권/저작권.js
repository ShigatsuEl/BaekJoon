const filePath = process.platform === "linux" ? "dev/stdin" : "example.txt";
const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(" ")
  .map(Number);
let answer = input[0] * (input[1] - 1) + 1;
console.log(answer);