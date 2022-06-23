const filePath = process.platform === "linux" ? "dev/stdin" : "example.txt";
let input = require("fs").readFileSync(filePath).toString().trim();
let count = 0;

for (let i = 0; i < input.length; i++) {
  const isMoem = "aeiou".includes(input[i]);
  if (isMoem) count++;
}

console.log(count);
