const fs = require("fs");
const n = parseInt(fs.readFileSync("/dev/stdin").toString());
let result = "";

for (let i = n; i > 0; i--) {
  result += "*".repeat(i) + "\n";
}

console.log(result);
