let filePath = process.platform === "linux" ? "dev/stdin" : "example.txt";
let [N, K] = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(" ")
  .map((v) => +v);
let n = 1;
let r = 1;
let n_r = 1;

for (let i = 1; i <= N; i++) {
  n *= i;
}

for (let i = 1; i <= K; i++) {
  r *= i;
}

for (let i = 1; i <= N - K; i++) {
  n_r *= i;
}

console.log(n / (r * n_r));
