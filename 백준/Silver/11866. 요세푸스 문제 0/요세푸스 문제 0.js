const filePath = process.platform === "linux" ? "dev/stdin" : "example.txt";
const [k, n] = require("fs").readFileSync(filePath).toString().split(" ");
let arr = Array.from({ length: k }, (_, i) => i + 1),
  answer = [];

while (arr.length) {
  for (let i = 1; i < n; i++) {
    arr.push(arr.shift());
  }

  answer.push(arr.shift());
}

console.log(`<${answer.join(", ")}>`);
