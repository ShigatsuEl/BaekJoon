const fs = require("fs");
let [x, y] = fs
  .readFileSync(0)
  .toString()
  .trim()
  .split("\n")
  .map((v) => +v);

if (x > 0 && y > 0) console.log(1);
else if (x < 0 && y > 0) console.log(2);
else if (x < 0 && y < 0) console.log(3);
else console.log(4);
