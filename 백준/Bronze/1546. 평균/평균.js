const fs = require("fs");
let [n, str] = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
let arr = str.split(/\s/).map((v) => +v);

let max = 0;

max = Math.max(...arr);
console.log(
  arr.map((v) => (v / max) * 100).reduce((acc, cur) => (acc += cur)) / n
);
