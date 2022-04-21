const filePath = process.platform === "linux" ? "dev/stdin" : "example.txt";
let [n, ...papers] = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .replace(/\r/g, "")
  .split("\n");
let minus = 0,
  zero = 0,
  plus = 0;

n = +n;
papers = papers.map((line) => line.split(" ").map((paper) => +paper));

function countPapers(x, y, n) {
  let first = papers[x][y],
    temp = true;

  for (let i = x; i < x + n; i++) {
    for (let j = y; j < y + n; j++) {
      if (papers[i][j] !== first) {
        temp = false;
        break;
      }
    }
    if (!temp) break;
  }

  if (temp && first === -1) minus += 1;
  else if (temp && first === 0) zero += 1;
  else if (temp && first) plus += 1;
  else {
    const thirds = n / 3;
    countPapers(x, y, thirds);
    countPapers(x + thirds, y, thirds);
    countPapers(x + 2 * thirds, y, thirds);
    countPapers(x, y + thirds, thirds);
    countPapers(x + thirds, y + thirds, thirds);
    countPapers(x + 2 * thirds, y + thirds, thirds);
    countPapers(x, y + 2 * thirds, thirds);
    countPapers(x + thirds, y + 2 * thirds, thirds);
    countPapers(x + 2 * thirds, y + 2 * thirds, thirds);
  }
}

countPapers(0, 0, n);

console.log(minus);
console.log(zero);
console.log(plus);
