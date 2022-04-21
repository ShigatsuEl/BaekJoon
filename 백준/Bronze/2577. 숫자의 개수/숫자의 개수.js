const filePath = process.platform === "linux" ? "dev/stdin" : "example.txt";
const [a, b, c] = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map((v) => +v);

const obj = {
  0: 0,
  1: 0,
  2: 0,
  3: 0,
  4: 0,
  5: 0,
  6: 0,
  7: 0,
  8: 0,
  9: 0,
};
let multi = (a * b * c).toString();

for (let i = 0; i < multi.length; i++) {
  obj[multi[i]] += 1;
}

console.log(Object.values(obj).join("\n"));
