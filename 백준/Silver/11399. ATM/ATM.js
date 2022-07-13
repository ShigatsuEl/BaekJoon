const filePath = process.platform === "linux" ? "dev/stdin" : "example.txt";
let [n, inputs] = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .replace(/\r/g, "")
  .split("\n");
inputs = inputs
  .split(" ")
  .map((v) => +v)
  .sort((a, b) => a - b);
let result = 0,
  count = 0;

for (let i = 0; i < n; i++) {
  count += inputs[i];
  result += count;
}

console.log(result);
