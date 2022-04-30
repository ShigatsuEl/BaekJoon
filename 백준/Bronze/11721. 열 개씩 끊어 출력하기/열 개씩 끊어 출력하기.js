let filePath = process.platform === "linux" ? "dev/stdin" : "example.txt";
let input = require("fs").readFileSync(filePath).toString().trim();
let answer = [];

while (input.length >= 10) {
  answer.push(input.slice(0, 10));
  input = input.slice(10);
}

answer.push(input);

console.log(answer.join("\n"));
