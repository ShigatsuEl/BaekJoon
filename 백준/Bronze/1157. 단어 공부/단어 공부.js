const filePath = process.platform === "linux" ? "dev/stdin" : "example.txt";
let input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .toUpperCase();
const arr = Array.from({ length: 26 }, () => 0);

for (let i = 0; i < input.length; i++) {
  const index = input.charCodeAt(i) - 65;
  arr[index] += 1;
}

const max = Math.max(...arr);
console.log(
  arr.indexOf(max) === arr.lastIndexOf(max)
    ? String.fromCharCode(arr.indexOf(max) + 65)
    : "?"
);