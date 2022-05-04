let filePath = process.platform === "linux" ? "dev/stdin" : "example.txt";
let [r1, r2] = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(" ")
  .map((v) => +v);

console.log(r2 * 2 - r1);
