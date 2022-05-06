let filePath = process.platform === "linux" ? "dev/stdin" : "example.txt";
var N = Number(require("fs").readFileSync(filePath).toString());
var op = "";
for (var i = 0; i < 2 * N - 1; i++) {
  for (var j = 0; j < N - Math.abs(N - 1 - i); j++) op += "*";
  op += "\n";
}
console.log(op);
