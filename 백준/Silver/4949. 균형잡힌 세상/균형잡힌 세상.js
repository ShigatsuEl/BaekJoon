const fs = require("fs");
let sentences = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
let answer = "";

for (i = 0; i < sentences.length - 1; i++) {
  let stack = [];
  const strs = sentences[i].replace(/\r/g, "").split("");
  for (j = 0; j < strs.length; j++) {
    switch (strs[j]) {
      case "(":
        stack.push("(");
        break;
      case "[":
        stack.push("[");
        break;
      case ")":
        if (stack[stack.length - 1] !== "(" || stack.length === 0)
          stack.push(")");
        else stack.pop();
        break;
      case "]":
        if (stack[stack.length - 1] !== "[" || stack.length === 0)
          stack.push("]");
        else stack.pop();
        break;
      default:
        break;
    }
  }

  answer += (stack.length === 0 ? "yes" : "no") + "\n";
}

console.log(answer);