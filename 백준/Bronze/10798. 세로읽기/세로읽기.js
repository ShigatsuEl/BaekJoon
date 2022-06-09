const filePath = process.platform === "linux" ? "dev/stdin" : "example.txt";
let arr = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .replace(/\r/g, "")
  .split("\n");

let answer = "";
let lengthes = arr.map((v) => v.length);
for (let i = 0; i < Math.max(...lengthes); i++) {
  for (let j = 0; j < arr.length; j++) {
    answer += arr[j][i] || "";
  }
}

console.log(answer);
