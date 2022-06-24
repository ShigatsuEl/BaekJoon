const filePath = process.platform === "linux" ? "dev/stdin" : "example.txt";
let [doc, word] = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .replace(/\r/g, "")
  .split("\n");

let idx = 0;
let count = 0;
while (idx < doc.length) {
  const newIdx = doc.slice(idx).search(word);
  if (newIdx >= 0) {
    count++;
    idx += newIdx + word.length;
  } else break;
}
console.log(count);
