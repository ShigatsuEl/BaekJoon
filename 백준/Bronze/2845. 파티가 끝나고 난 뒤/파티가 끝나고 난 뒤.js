const filePath = process.platform === "linux" ? "dev/stdin" : "example.txt";
let [first, second] = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .replace(/\r/g, "")
  .split("\n");
let num = first
  .split(" ")
  .map((v) => +v)
  .reduce((acc, cur) => (acc *= cur), 1);
second = second.split(" ").map((v) => +v);
let answer = [];

for (let i = 0; i < second.length; i++) {
  answer.push(second[i] - num);
}

console.log(answer.join(" "));
