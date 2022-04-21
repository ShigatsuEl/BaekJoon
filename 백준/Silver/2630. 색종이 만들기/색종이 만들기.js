const filePath = process.platform === "linux" ? "dev/stdin" : "example.txt";
let [n, ...paper] = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .replace(/\r/g, "")
  .split("\n");
let white = 0,
  blue = 0;

n = +n;
paper = paper.map((str) => str.split(" ").map((v) => +v));

function confetti(x, y, length) {
  let count = 0;

  for (let i = x; i < x + length; i++) {
    for (let j = y; j < y + length; j++) {
      if (paper[i][j]) count += 1;
    }
  }

  if (!count) white += 1;
  else if (count === length * length) blue += 1;
  else {
    const half = length / 2;
    confetti(x, y, half);
    confetti(x, y + half, half);
    confetti(x + half, y, half);
    confetti(x + half, y + half, half);
  }
}
confetti(0, 0, n);

console.log(white);
console.log(blue);