const filePath = process.platform === "linux" ? "dev/stdin" : "example.txt";
let [a, b] = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(" ")
  .map((v) => +v);

console.log(Math.abs(a - b));
