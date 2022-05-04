let filePath = process.platform === "linux" ? "dev/stdin" : "example.txt";
let N = parseInt(require("fs").readFileSync(filePath).toString().trim());
let answer = "";

for (let i = 1; i <= N; i++) {
  answer += "*".repeat(i) + " ".repeat(2 * N - 2 * i) + "*".repeat(i) + "\n";
}

for (let i = N - 1; i > 0; i--) {
  answer += "*".repeat(i) + " ".repeat(2 * N - 2 * i) + "*".repeat(i) + "\n";
}

console.log(answer);
