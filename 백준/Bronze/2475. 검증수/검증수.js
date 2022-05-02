let filePath = process.platform === "linux" ? "dev/stdin" : "example.txt";
let input = require("fs")
  .readFileSync(filePath)
  .toString()
  .split(" ")
  .map((v) => +v);
let answer = 0;

for (let i = 0; i < input.length; i++) {
  answer += Math.pow(input[i], 2);
}

console.log(answer % 10);
