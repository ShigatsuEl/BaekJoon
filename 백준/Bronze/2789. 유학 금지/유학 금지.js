const filePath = process.platform === "linux" ? "dev/stdin" : "example.txt";
let input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .replace(/\r/g, "")
  .split("");
const obj = {
  C: 1,
  A: 1,
  M: 1,
  B: 1,
  R: 1,
  I: 1,
  D: 1,
  G: 1,
  E: 1,
};

for (let i = 0; i < input.length; i++) {
  if (obj[input[i]]) {
    input.splice(i, 1);
    i--;
  }
}
console.log(input.join(""));
