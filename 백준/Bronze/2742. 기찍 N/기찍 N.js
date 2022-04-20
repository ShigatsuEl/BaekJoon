const filePath = process.platform === "linux" ? "dev/stdin" : "example.txt";
const input = parseInt(require("fs").readFileSync(filePath).toString());
let answer = "";

for (let i = input; i > 0; i--) {
  answer += `${i}\n`;
}

console.log(answer);