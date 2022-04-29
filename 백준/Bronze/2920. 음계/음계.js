let filePath = process.platform === "linux" ? "dev/stdin" : "example.txt";
let arr = require("fs").readFileSync(filePath).toString().trim().split(" ");
let ascending = [...arr],
  decending = [...arr];

ascending.sort((a, b) => a - b);
decending.sort((a, b) => b - a);

if (arr.every((v, i) => v === ascending[i])) console.log("ascending");
else if (arr.every((v, i) => v === decending[i])) console.log("descending");
else console.log("mixed");