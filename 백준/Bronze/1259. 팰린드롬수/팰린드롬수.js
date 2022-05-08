const filePath = process.platform === "linux" ? "dev/stdin" : "example.txt";
const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");
let answer = [];

for (let i = 0; i < input.length - 1; i++) {
  let str = input[i];
  str === input[i].split("").reverse().join("")
    ? answer.push("yes")
    : answer.push("no");
}

console.log(answer.join("\n"));
