const fs = require("fs");
let [n, ...arr] = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
let answer = "";

for (let i = 0; i < n; i++) {
  const vps = arr[i].replace(/\r/g, "").split("");
  let stack = [];

  for (let j = 0; j < vps.length; j++) {
    if (vps[j] === "(") stack.push("(");
    else {
      if (stack.length === 0) {
        stack.push(")");
        break;
      } else stack.pop();
    }
  }

  answer += (stack.length === 0 ? "YES" : "NO") + "\n";
}

console.log(answer);
