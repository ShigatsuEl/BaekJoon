const filePath = process.platform === "linux" ? "dev/stdin" : "example.txt";
const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");
let people = 0,
  max = 0;

for (let i = 0; i < input.length; i++) {
  let [outter, inner] = input[i].split(" ").map((v) => +v);
  people -= outter;
  people += inner;
  max = Math.max(max, people);
}

console.log(max);
