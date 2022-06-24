const filePath = process.platform === "linux" ? "dev/stdin" : "example.txt";
let input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");
let answer = [];

for (let i = 0; i < input.length - 1; i++) {
  const reversed = input[i].split("").reverse().join("");
  answer.push(reversed);
}

console.log(answer.join("\n"));
