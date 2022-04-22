const filePath = process.platform === "linux" ? "dev/stdin" : "example.txt";
const [n, ...arr] = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");
const answer = [];

for (let i = 0; i < n; i++) {
  const [total, ...line] = arr[i].split(" ").map((v) => +v);
  const average = line.reduce((acc, cur) => (acc += cur), 0) / total;
  const percent = (line.filter((num) => num > average).length / total) * 100;
  answer.push(`${percent.toFixed(3)}%`);
}

console.log(answer.join("\n"));
