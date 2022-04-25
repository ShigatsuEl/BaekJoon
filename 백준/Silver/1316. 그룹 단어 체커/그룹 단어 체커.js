const filePath = process.platform === "linux" ? "dev/stdin" : "example.txt";
let [n, ...arr] = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .replace(/\r/g, "")
  .split("\n");

n = parseInt(n);

for (let i = 0; i < arr.length; i++) {
  let obj = {};
  const strs = arr[i].split("");
  for (let j = 0; j < strs.length; j++) {
    if (!obj[strs[j]] || strs[j] !== strs[j - 1])
      obj[strs[j]] = (obj[strs[j]] || 0) + 1;
  }
  if (Object.values(obj).some((v) => v !== 1)) n -= 1;
}

console.log(n);
