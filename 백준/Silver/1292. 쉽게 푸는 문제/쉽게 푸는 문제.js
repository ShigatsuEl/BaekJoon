const filePath = process.platform === "linux" ? "dev/stdin" : "example.txt";
let [n, m] = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(" ")
  .map((v) => +v);
let count = 1,
  arr = [];

while (arr.length <= m) {
  for (let i = 1; i <= count; i++) {
    arr.push(count);
  }
  count += 1;
}

arr = arr.slice(n - 1, m);
console.log(arr.reduce((acc, cur) => (acc += cur)));
