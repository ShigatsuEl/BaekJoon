const filePath = process.platform === "linux" ? "dev/stdin" : "example.txt";
let input = require("fs").readFileSync(filePath).toString().trim();
input = parseInt(input);
let answer = "";

for (let i = 1; i <= input; i++) {
  answer += " ".repeat(input - i) + new Array(i).fill("*").join(" ") + "\n";
}

console.log(answer);
