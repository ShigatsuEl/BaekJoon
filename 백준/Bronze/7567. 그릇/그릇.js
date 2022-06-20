const filePath = process.platform === "linux" ? "dev/stdin" : "example.txt";
let input = require("fs").readFileSync(filePath).toString().trim().split("");
let answer = 10;

for (let i = 1; i < input.length; i++) {
  const isSame = input[i] === input[i - 1];
  if (isSame) answer += 5;
  else answer += 10;
}

console.log(answer);
