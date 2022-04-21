const filePath = process.platform === "linux" ? "dev/stdin" : "example.txt";
const input = require("fs").readFileSync(filePath).toString().trim();
let N = parseInt(input);

let cnt = 0;
let num = N;

while (true) {
  let sum = parseInt((num % 10) + num / 10);
  num = (num % 10) * 10 + (sum % 10);
  cnt++;
  if (num === N) break;
}

console.log(cnt);
