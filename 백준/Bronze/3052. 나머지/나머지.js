const filePath = process.platform === "linux" ? "dev/stdin" : "example.txt";
const arr = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map((v) => +v);

const mod = Array.from({ length: arr.length }, () => 0);

for (let i = 0; i < arr.length; i++) {
  if (!mod[arr[i] % 42]) mod[arr[i] % 42] = 1;
}

console.log(mod.filter((v) => v === 1).length);
