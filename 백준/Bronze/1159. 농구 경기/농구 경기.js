const filePath = process.platform === "linux" ? "dev/stdin" : "example.txt";
let [n, ...arr] = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");
let answer = "",
  obj = {};

for (let i = 0; i < n; i++) {
  obj[arr[i][0]] = (obj[arr[i][0]] || 0) + 1;
}

for (let x of Object.keys(obj)) {
  if (obj[x] >= 5) answer += x;
}

console.log(answer.length === 0 ? "PREDAJA" : answer.split("").sort().join(""));
