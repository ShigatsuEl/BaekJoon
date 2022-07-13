const filePath = process.platform === "linux" ? "dev/stdin" : "example.txt";
let [a, b] = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .replace(/\r/g, "")
  .split(" ")
  .map((v) => v.split(""));
let result = [];

for (let i = 0; i < Math.max(a.length, b.length); i++) {
  if (a[i] === "6") a[i] = "5";
  if (b[i] === "6") b[i] = "5";
}

result.push(Number(a.join("")) + Number(b.join("")));

for (let i = 0; i < Math.max(a.length, b.length); i++) {
  if (a[i] === "5") a[i] = "6";
  if (b[i] === "5") b[i] = "6";
}

result.push(Number(a.join("")) + Number(b.join("")));

console.log(result.join(" "));
