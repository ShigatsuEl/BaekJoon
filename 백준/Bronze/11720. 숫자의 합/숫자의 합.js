const filePath = process.platform === "linux" ? "dev/stdin" : "example.txt";
const [n, str] = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");
let answer = 0;

for (let i = 0; i < n; i++) {
  answer += parseInt(str[i]);
}

console.log(answer);
