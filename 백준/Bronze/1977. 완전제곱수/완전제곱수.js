const filePath = process.platform === "linux" ? "dev/stdin" : "example.txt";
let [n, m] = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map((v) => +v);
let answer = [];

for (let i = n; i <= m; i++) {
  Math.sqrt(i) % 1 === 0 ? answer.push(i) : null;
}

let final =
  answer.length === 0
    ? -1
    : answer.reduce((acc, cur) => (acc += cur)) + "\n" + answer[0];
console.log(final);
