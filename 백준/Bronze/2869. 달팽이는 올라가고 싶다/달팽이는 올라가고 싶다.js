const filePath = process.platform === "linux" ? "dev/stdin" : "example.txt";
let [a, b, v] = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(" ")
  .map((v) => +v);

console.log(Math.ceil((v - b) / (a - b)));
