let filePath = process.platform === "linux" ? "dev/stdin" : "example.txt";
let input = require("fs").readFileSync(filePath).toString().trim();
let answer = Array.from({ length: 26 }, () => 0);

for (let i = 0; i < input.length; i++) {
  let idx = input.charCodeAt(i) - 97;
  answer[idx] += 1;
}

console.log(answer.join(" "));
