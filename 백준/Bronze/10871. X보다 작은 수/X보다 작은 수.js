const filePath = process.platform === "linux" ? "dev/stdin" : "example.txt";
const [l1, l2] = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");
const [n, x] = l1.split(" ").map((v) => +v);
const numbers = l2.split(" ").map((v) => +v);

let answer = [];

for (let i = 0; i < n; i++) {
  if (numbers[i] < x) answer.push(numbers[i]);
}

console.log(answer.join(" "));
