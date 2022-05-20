const filePath = process.platform === "linux" ? "dev/stdin" : "example.txt";
let input = require("fs").readFileSync(filePath).toString().trim();

console.log(input.split("").reverse().join("") === input ? 1 : 0);
