const fs = require("fs");
const n = parseInt(fs.readFileSync("/dev/stdin").toString());
let result = "";

for (let i = 0; i < n; i++) {
  result += " ".repeat(i) + "*".repeat(n - i) + "\n";
}

console.log(result);
