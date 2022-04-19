const filePath = process.platform === "linux" ? "dev/stdin" : "example.txt";
const [kn, nums] = require("fs").readFileSync(filePath).toString().split("\n");
const [k, n] = kn.split(" ");
const numbers = nums.split(" ").map((v) => +v);
let arr = Array.from({ length: k }, (_, i) => i + 1),
  answer = 0;

for (let i = 0; i < n; i++) {
  const index = arr.findIndex((v) => v === numbers[i]);
  if (index < k - index - i) {
    for (let j = 0; j < index; j++) {
      arr.push(arr.shift());
      answer += 1;
    }
    arr.shift();
  } else {
    for (let j = 0; j < k - index - i; j++) {
      arr.unshift(arr.pop());
      answer += 1;
    }
    arr.shift();
  }
}

console.log(answer);