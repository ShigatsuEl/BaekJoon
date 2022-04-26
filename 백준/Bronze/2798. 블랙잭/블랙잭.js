const filePath = process.platform === "linux" ? "dev/stdin" : "example.txt";
let [nm, numbers] = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");
const [n, m] = nm.split(" ").map((v) => +v);
let max = 0;

numbers = numbers.split(" ").map((v) => +v);

for (let i = 0; i < n - 2; i++) {
  for (let j = i + 1; j < n - 1; j++) {
    for (let k = j + 1; k < n; k++) {
      let sum = numbers[i] + numbers[j] + numbers[k];
      if (m - sum >= 0) max = Math.max(max, sum);
    }
  }
}

console.log(max);
