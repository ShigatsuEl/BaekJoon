const filePath = process.platform === "linux" ? "dev/stdin" : "example.txt";
let input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map((v) => +v);

let burgur = Math.min(input[0], input[1], input[2]);
let drink = Math.min(input[3], input[4]);

console.log(burgur + drink - 50);
