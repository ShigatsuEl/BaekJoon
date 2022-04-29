let filePath = process.platform === "linux" ? "dev/stdin" : "example.txt";
let arr = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(" ")
  .map((v) => +v);

arr.sort((a, b) => a - b);

console.log(arr[1]);
