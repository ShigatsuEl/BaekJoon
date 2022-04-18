const fs = require("fs");
let arr = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ")
  .map((v) => +v);
let obj = {},
  dice = 0;

for (let x of arr) {
  obj[x] = (obj[x] || 0) + 1;
}

const max = Math.max(...Object.values(obj));
dice = Object.entries(obj).find((v) => v[1] === max)[0];

if (max === 3) {
  console.log(10000 + dice * 1000);
} else if (max === 2) {
  console.log(1000 + dice * 100);
} else {
  console.log(Math.max(...arr) * 100);
}
