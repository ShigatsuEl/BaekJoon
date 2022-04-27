let filePath = process.platform === "linux" ? "dev/stdin" : "example.txt";
let input = require("fs")
  .readFileSync(filePath)
  .toString()
  .split(" ")
  .map((v) => +v);

const greatest = (a, b) => {
  if (b === 0) return a;
  return greatest(b, a % b);
};
const least = (a, b) => (a * b) / greatest(a, b);

console.log(`${greatest(input[0], input[1])} ${least(input[0], input[1])}`);