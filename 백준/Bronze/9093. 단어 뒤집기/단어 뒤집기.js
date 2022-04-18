const fs = require("fs");
let [n, ...arr] = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

for (let i = 0; i < n; i++) {
  let sentence = arr[i].split(" ").map((v) => v.split("").reverse().join("")).join(' ');
  console.log(sentence);
}