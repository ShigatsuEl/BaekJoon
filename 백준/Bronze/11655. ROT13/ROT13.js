let input = require('fs').readFileSync('/dev/stdin').toString();
let upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let lower = "abcdefghijklmnopqrstuvwxyz";
let answer = "";
for (let x of input) {
  if (isNaN(x) || x === " ") {
    let index;
    if (x === " ") {
      answer += " ";
    } else if (x.charCodeAt(0) >= 65 && x.charCodeAt(0) <= 90) {
      index = upper.indexOf(x) + 13;
      if (index > 25) {
        index -= 26;
      }
      answer += upper[index];
    } else if (x.charCodeAt(0) >= 97 && x.charCodeAt(0) <= 122) {
      index = lower.indexOf(x) + 13;
      if (index > 25) {
        index -= 26;
      }
      answer += lower[index];
    }
  } else {
    answer += x;
  }
}
console.log(answer);