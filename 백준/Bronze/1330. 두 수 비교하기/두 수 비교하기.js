const fs = require("fs");
let [a, b] = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ")
  .map((v) => +v);

if (a > b) {
  console.log(">");
} else if (a < b) {
  console.log("<");
} else {
  console.log("==");
}
