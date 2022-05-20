const filePath = process.platform === "linux" ? "dev/stdin" : "example.txt";
let arr = require("fs").readFileSync(filePath).toString().trim().split("\n");
let answer = [];

for (let i = 0; i < arr.length; i++) {
  let line = arr[i].split(" ").map((v) => +v);
  answer.push(line.reduce((acc, cur) => (acc += cur)));
}

let max = Math.max(...answer);
let idx = answer.findIndex((v) => v === max);

console.log(idx + 1 + " " + max);
