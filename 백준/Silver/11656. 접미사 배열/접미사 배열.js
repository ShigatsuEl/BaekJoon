const filePath = process.platform === "linux" ? "dev/stdin" : "example.txt";
const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .replace(/\r/g, "");
let result = [];

for (let i = 0; i < input.length; i++) {
  result.push(input.slice(i));
}

let answer = result.sort();

console.log(answer.join("\n"));
