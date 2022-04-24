const filePath = process.platform === "linux" ? "dev/stdin" : "example.txt";
let input = require("fs").readFileSync(filePath).toString().trim();
let answer = 0;
const dial = {
  ABC: 3,
  DEF: 4,
  GHI: 5,
  JKL: 6,
  MNO: 7,
  PQRS: 8,
  TUV: 9,
  WXYZ: 10,
};

for (let i = 0; i < input.length; i++) {
  for (let x in dial) {
    if (x.includes(input[i])) {
      answer += dial[x];
    }
  }
}

console.log(answer);
