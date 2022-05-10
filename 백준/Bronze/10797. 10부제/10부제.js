const filePath = process.platform === "linux" ? "dev/stdin" : "example.txt";
let [n, arr] = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");
let answer = 0;

n = +n;
arr = arr.split(" ").map((v) => +v);

for (let i = 0; i < arr.length; i++) {
  arr[i] % 10 === n ? answer++ : null;
}

console.log(answer);
