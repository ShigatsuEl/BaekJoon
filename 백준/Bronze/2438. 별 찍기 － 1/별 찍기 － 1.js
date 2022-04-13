const fs = require("fs");
const n = parseInt(fs.readFileSync("/dev/stdin").toString());
let result = "";

for (let i = 1; i <= n; i++) {
  result += "*".repeat(i) + "\n";
}

console.log(result);
