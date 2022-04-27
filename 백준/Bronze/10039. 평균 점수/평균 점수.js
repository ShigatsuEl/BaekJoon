const filePath = process.platform === "linux" ? "dev/stdin" : "example.txt";
let grades = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map((v) => +v);

grades = grades
  .map((grade) => (grade >= 40 ? grade : 40))
  .reduce((acc, cur) => (acc += cur));

console.log(grades / 5);
