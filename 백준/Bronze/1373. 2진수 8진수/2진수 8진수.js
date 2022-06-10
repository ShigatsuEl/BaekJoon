const filePath = process.platform === "linux" ? "dev/stdin" : "example.txt";
let n = require("fs").readFileSync(filePath).toString().trim();
let oct = "";
while (n.length >= 3) {
  oct = parseInt(n.slice(n.length - 3), 2).toString(8) + oct;
  n = n.slice(0, n.length - 3);
}
console.log((n ? parseInt(n, 2).toString(8) : "") + oct);
