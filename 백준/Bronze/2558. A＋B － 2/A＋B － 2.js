const filePath = process.platform === "linux" ? "dev/stdin" : "example.txt";
const [a, b] = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map((v) => +v);

console.log(a + b);