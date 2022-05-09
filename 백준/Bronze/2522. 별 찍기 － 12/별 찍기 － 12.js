const filePath = process.platform === "linux" ? "dev/stdin" : "example.txt";
const input = parseInt(require("fs").readFileSync(filePath).toString().trim());
let answer = "";

for (let i = 0; i < 2 * input - 1; i++) {
  for (let j = 0; j < Math.abs(input - 1 - i); j++) answer += " ";
  for (let j = 0; j < input - Math.abs(input - 1 - i); j++) answer += "*";
  answer += "\n";
}

console.log(answer);
