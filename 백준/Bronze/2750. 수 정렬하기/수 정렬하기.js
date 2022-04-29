let filePath = process.platform === "linux" ? "dev/stdin" : "example.txt";
let [_, ...arr] = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map((v) => +v);

arr.sort((a, b) => a - b);

console.log(arr.join("\n"));