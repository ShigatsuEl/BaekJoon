let filePath = process.platform === "linux" ? "dev/stdin" : "example.txt";
let arr = require("fs").readFileSync(filePath).toString().trim().split("\n");

console.log(arr.join("\n"));
