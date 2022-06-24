const filePath = process.platform === "linux" ? "dev/stdin" : "example.txt";
let [a, b] = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .replace(/\r/g, "")
  .split("\n");

console.log(a.length >= b.length ? "go" : "no");
