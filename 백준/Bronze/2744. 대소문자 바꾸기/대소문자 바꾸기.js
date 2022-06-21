const filePath = process.platform === "linux" ? "dev/stdin" : "example.txt";
let input = require("fs").readFileSync(filePath).toString().trim().split("");

for (let i = 0; i < input.length; i++) {
  const character = input[i];
  if (character === character.toLowerCase()) input[i] = input[i].toUpperCase();
  else input[i] = input[i].toLowerCase();
}

console.log(input.join(""));
