let filePath = process.platform === "linux" ? "dev/stdin" : "example.txt";
let input = require("fs").readFileSync(filePath).toString().split(" ");

let a = BigInt(input[0]);
let b = BigInt(input[1]);

console.log((a + b).toString());
