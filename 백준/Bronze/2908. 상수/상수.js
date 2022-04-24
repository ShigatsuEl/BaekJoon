const filePath = process.platform === "linux" ? "dev/stdin" : "example.txt";
let [a, b] = require("fs").readFileSync(filePath).toString().trim().split(" ");

function reverseNum(n) {
  return parseInt(n.split("").reverse().join(""));
}

a = reverseNum(a);
b = reverseNum(b);

console.log(a > b ? a : b);
