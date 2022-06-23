const { Console } = require("console");

const filePath = process.platform === "linux" ? "dev/stdin" : "example.txt";
let [n, ...strs] = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .replace(/\r/g, "")
  .split("\n");
let obj = {};

for (let i = 0; i < n; i++) {
  obj[strs[i]] = (obj[strs[i]] || 0) + 1;
}

const sortObj = Object.entries(obj)
  .sort(([aKey, aVal], [bKey, bVal]) => {
    if (aVal === bVal) {
      return aKey < bKey ? -1 : aKey == bKey ? 0 : 1;
    }
    return bVal - aVal;
  })
  .reduce((r, [k, v]) => ({ ...r, [k]: v }), {});

console.log(Object.keys(sortObj)[0]);
