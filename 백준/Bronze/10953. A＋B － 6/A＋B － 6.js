const filePath = process.platform === "linux" ? "dev/stdin" : "example.txt";
let [n, ...arr] = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");
let answer = [];

for (let i = 0; i < n; i++) {
  let [a, b] = arr[i].split(",").map((v) => +v);
  answer.push(a + b);
}

console.log(answer.join("\n"));
