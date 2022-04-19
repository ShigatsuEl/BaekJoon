const fs = require("fs");
let [n, ...arr] = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
let answer = "",
  count = 1,
  stack = [],
  numbers = arr.map((v) => +v);

for (let i = 0; i < n; i++) {
  const number = numbers.shift();

  while (count <= number) {
    stack.push(count++);
    answer += "+" + "\n";
  }

  const popedItem = stack.pop();
  if (popedItem !== number) {
    answer = "NO";
    break;
  }
  answer += "-" + "\n";
}

console.log(answer);