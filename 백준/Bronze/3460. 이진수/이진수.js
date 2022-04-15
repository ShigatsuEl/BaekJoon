const fs = require("fs");
let [n, ...arr] = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .replace(/\r/g, "")
  .split("\n")
  .map((v) => +v);
let result = "";

for (let i = 0; i < arr.length; i++) {
  let bin = arr[i].toString(2).split("").reverse();
  bin.forEach((v, i) => (v === "1" ? (result += i + " ") : null));
  result = result.trim() + "\n";
}

console.log(result);
