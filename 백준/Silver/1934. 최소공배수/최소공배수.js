const filePath = process.platform === "linux" ? "dev/stdin" : "example.txt";
let [n, ...arr] = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");
let answer = [];

const gcd = (a, b) => (a % b === 0 ? b : gcd(b, a % b));
const lcm = (a, b) => (a * b) / gcd(a, b);

for (let i = 0; i < n; i++) {
  let [a, b] = arr[i].split(" ").map((v) => +v);
  answer.push(lcm(a, b));
}

console.log(answer.join("\n"));
