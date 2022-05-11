const filePath = process.platform === "linux" ? "dev/stdin" : "example.txt";
let [n, ...arr] = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");
let answer = 0;

let a = arr[0]
  .split(" ")
  .map((v) => +v)
  .sort((a, b) => a - b);
let b = arr[1]
  .split(" ")
  .map((v) => +v)
  .sort((a, b) => b - a);

for (let i = 0; i < n; i++) {
  answer += a[i] * b[i];
}

console.log(answer);
