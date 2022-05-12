const filePath = process.platform === "linux" ? "dev/stdin" : "example.txt";
let [n, ...arr] = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");
let answer = "";

for (let i = 0; i < arr[0].length; i++) {
  let temp = arr[0][i];
  arr.every((str) => str[i] === temp) ? (answer += arr[0][i]) : (answer += "?");
}

console.log(answer);
