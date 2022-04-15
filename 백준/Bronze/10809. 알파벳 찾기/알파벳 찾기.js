const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim();
let result = "";

for (let i = 0; i < 26; i++) {
  result += input.indexOf(String.fromCharCode(97 + i)) + " ";
}

console.log(result.trim());
