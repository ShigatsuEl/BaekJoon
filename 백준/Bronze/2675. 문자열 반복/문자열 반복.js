const filePath = process.platform === "linux" ? "dev/stdin" : "example.txt";
const [n, ...line] = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .replace(/\r/g, "")
  .split("\n");
let answer = [];

for (let i = 0; i < n; i++) {
  const [n, str] = line[i].split(" ");
  let repeatStr = "";
  str.split("").forEach((c) => (repeatStr += c.repeat(n)));
  answer.push(repeatStr);
}

console.log(answer.join("\n"));