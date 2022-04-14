const fs = require("fs");
let [_, str] = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
let arr = str.split(/\s/).map((v) => +v);

let max = 0,
  min = 0;

max = Math.max(...arr);
min = Math.min(...arr);

console.log(max * min);
