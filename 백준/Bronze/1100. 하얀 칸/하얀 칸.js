const filePath = process.platform === "linux" ? "dev/stdin" : "example.txt";
let input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .replace(/\r/g, "")
  .split("\n")
  .map((v) => v.split(""));
let answer = 0;

for (let i = 0; i < input.length; i++) {
  for (let j = 0; j < input[i].length; j++) {
    (i + j) % 2 === 0 && input[i][j] === "F" ? (answer += 1) : null;
  }
}

console.log(answer);