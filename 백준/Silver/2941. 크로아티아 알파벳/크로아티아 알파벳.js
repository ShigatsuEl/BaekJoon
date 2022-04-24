const filePath = process.platform === "linux" ? "dev/stdin" : "example.txt";
let input = require("fs").readFileSync(filePath).toString().trim();
let answer = 0;
const croatia = {
  "c=": "č",
  "c-": "ć",
  "dz=": "dž",
  "d-": "đ",
  lj: "lj",
  nj: "nj",
  "s=": "š",
  "z=": "ž",
};

for (let x in croatia) {
  const regex = new RegExp(x, "g");
  if (input.includes(x)) {
    input = input.replace(regex, "a");
  }
}

console.log(input.length);