const filePath = process.platform === "linux" ? "dev/stdin" : "example.txt";
const [n, ...arr] = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");
let answer = [];

for (let i = 0; i < arr.length; i++) {
  let [a, b] = arr[i].split(" ").map((v) => +v);
  let pow = 1;

  for (let j = 0; j < b; j++) {
    pow = (pow * a) % 10;
  }

  pow === 0 ? answer.push(10) : answer.push(pow);
}

console.log(answer.join("\n"));
