let filePath = process.platform === "linux" ? "dev/stdin" : "example.txt";
let input = require("fs").readFileSync(filePath).toString();
let answer = "";

for (let i = input; i > 0; i--) {
  answer += " ".repeat(input - i) + "*".repeat(2 * i - 1) + "\n";
}

for (let i = 2; i <= input; i++) {
  answer += " ".repeat(input - i) + "*".repeat(2 * i - 1) + "\n";
}

console.log(answer);
