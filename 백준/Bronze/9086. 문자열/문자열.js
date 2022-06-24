const filePath = process.platform === "linux" ? "dev/stdin" : "example.txt";
let [n, ...str] = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .replace(/\r/g, "")
  .split("\n");
let answer = [];

for (let i = 0; i < n; i++) {
  answer.push(`${str[i][0]}${str[i][str[i].length - 1]}`);
}

console.log(answer.join("\n"));
