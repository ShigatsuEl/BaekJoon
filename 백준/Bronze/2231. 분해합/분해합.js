const filePath = process.platform === "linux" ? "dev/stdin" : "example.txt";
const input = parseInt(require("fs").readFileSync(filePath).toString().trim());
let sum = 0,
  answer = 0;

for (let i = 1; i < input; i++) {
  let m = i.toString();
  sum = i;
  for (let j = 0; j < m.length; j++) {
    sum += parseInt(m[j]);
  }
  if (sum === input) {
    answer = i;
    break;
  }
}

console.log(answer);