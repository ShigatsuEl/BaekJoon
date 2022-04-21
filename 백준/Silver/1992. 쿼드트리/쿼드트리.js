const filePath = process.platform === "linux" ? "dev/stdin" : "example.txt";
let [n, ...dots] = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .replace(/\r/g, "")
  .split("\n");
let answer = "";

n = +n;
dots = dots.map((line) => line.split("").map((paper) => +paper));

function quadTree(x, y, n) {
  let first = dots[x][y],
    temp = true;

  for (let i = x; i < x + n; i++) {
    for (let j = y; j < y + n; j++) {
      if (dots[i][j] !== first) {
        temp = false;
        break;
      }
    }
    if (!temp) break;
  }

  if (temp && first === 1) answer += "1";
  else if (temp && first === 0) answer += "0";
  else {
    const half = n / 2;
    answer += "(";
    quadTree(x, y, half);
    quadTree(x, y + half, half);
    quadTree(x + half, y, half);
    quadTree(x + half, y + half, half);
    answer += ")";
  }
}

quadTree(0, 0, n);
console.log(answer);
