const fs = require("fs");
let [h, m] = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ")
  .map((v) => +v);

if (m >= 45) console.log(`${h} ${m - 45}`);
else {
  if (h === 0) console.log(`${23} ${m - 45 + 60}`);
  else console.log(`${h - 1} ${m - 45 + 60}`);
}