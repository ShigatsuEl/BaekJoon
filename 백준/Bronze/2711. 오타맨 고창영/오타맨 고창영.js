const filePath = process.platform === "linux" ? "dev/stdin" : "example.txt";
let [n, ...inputs] = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .replace(/\r/g, "")
  .split("\n");
let answer = [];

for (let i = 0; i < n; i++) {
  let [idx, str] = inputs[i].split(" ");
  answer.push(str.slice(0, idx - 1) + str.slice(idx));
}

console.log(answer.join("\n"));
