const filePath = process.platform === "linux" ? "dev/stdin" : "example.txt";
const [n, ...arr] = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");
const answer = [];

for (let i = 0; i < n; i++) {
  let sum = 0,
    count = 0;
  arr[i].split("").forEach((v) => (v === "O" ? (sum += ++count) : (count = 0)));
  answer.push(sum);
}

console.log(answer.join("\n"));
