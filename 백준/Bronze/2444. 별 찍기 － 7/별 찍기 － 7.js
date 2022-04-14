const fs = require("fs");
const n = parseInt(fs.readFileSync("/dev/stdin").toString());
let result = "";

for (let i = n - 1; i > -n; i--) {
  result +=
    " ".repeat(Math.abs(i)) + "*".repeat(2 * (n - Math.abs(i)) - 1) + "\n";
}

console.log(result);