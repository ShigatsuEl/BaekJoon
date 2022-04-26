const filePath = process.platform === "linux" ? "dev/stdin" : "example.txt";
const input = parseInt(require("fs").readFileSync(filePath).toString().trim());
let str = "";

function PaintStar(i, j) {
  if (i % 3 === 1 && j % 3 === 1) {
    str += " ";
  } else {
    if (Math.floor(i / 3) === 0 && Math.floor(j / 3) === 0) {
      str += "*";
    } else {
      PaintStar(Math.floor(i / 3), Math.floor(j / 3));
    }
  }
}

for (let i = 0; i < input; i++) {
  for (let j = 0; j < input; j++) {
    PaintStar(i, j);
  }
  if (i !== input - 1) {
    str += "\n";
  }
}
console.log(str);
