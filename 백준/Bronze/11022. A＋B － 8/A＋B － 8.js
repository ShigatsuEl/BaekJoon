const filePath = process.platform === "linux" ? "dev/stdin" : "example.txt";
const [n, ...arr] = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");
let answer = "";

for (let i = 0; i < n; i++) {
  const [a, b] = arr[i].split(" ").map((v) => +v);
  answer += `Case #${i + 1}: ${a} + ${b} = ${a + b}\n`;
}

console.log(answer);