const fs = require("fs");
let [n, str] = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
let arr = str.split(/\s/).map((v) => +v);

console.log(`${Math.min(...arr)} ${Math.max(...arr)}`);