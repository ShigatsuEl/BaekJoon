const filePath = process.platform === "linux" ? "dev/stdin" : "example.txt";
let input = require("fs").readFileSync(filePath).toString().trim();

input = input
  .split("-")
  .map((v) => v[0])
  .join("");

console.log(input);
