const filePath = process.platform === "linux" ? "dev/stdin" : "example.txt";
let [_, ...strs] = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .replace(/\r/g, "")
  .split("\n");

let sorted = strs.sort((a, b) => a.length - b.length || a.localeCompare(b));

console.log(Array.from(new Set(sorted)).join("\n"));
