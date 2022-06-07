const filePath = process.platform === "linux" ? "dev/stdin" : "example.txt";
let arr = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("")
  .map((v) => +v);

let sorted = arr.sort((a, b) => b - a);

console.log(sorted.join(""));
