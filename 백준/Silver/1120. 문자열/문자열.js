const filePath = process.platform === "linux" ? "dev/stdin" : "example.txt";
let [a, b] = require("fs").readFileSync(filePath).toString().trim().split(" ");
let min = Number.MAX_SAFE_INTEGER;

for (let i = 0; i <= b.length - a.length; i++) {
  let count = 0;
  for (let j = 0; j < a.length; j++) {
    if (a[j] !== b[i + j]) count++;
  }
  min = Math.min(min, count);
}

console.log(min);
