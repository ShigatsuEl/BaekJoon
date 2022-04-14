const fs = require("fs");
const n = parseInt(fs.readFileSync("/dev/stdin").toString());
let result = "";

for (let i = n - 1; i >= 0; i--) {
  result += " ".repeat(i) + "*".repeat(2 * (n - i) - 1) + "\n";
}

console.log(result);
