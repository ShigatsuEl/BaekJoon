const filePath = process.platform === "linux" ? "dev/stdin" : "example.txt";
let input = require("fs").readFileSync(filePath).toString().trim().split(" ");

console.log(input[0] === "" ? 0 : input.length);
