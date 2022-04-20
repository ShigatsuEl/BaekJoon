const filePath = process.platform === "linux" ? "dev/stdin" : "example.txt";
const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

let answer = [];

for (let i = 0; i < input.length - 1; i++) {
  const [a, b] = input[i].split(" ").map((v) => +v);

  answer.push(a + b);
}

console.log(answer.join("\n"));
