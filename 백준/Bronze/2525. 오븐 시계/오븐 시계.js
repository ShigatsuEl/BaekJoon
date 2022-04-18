const fs = require("fs");
let [time, plus] = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [h, m] = time.split(" ").map((v) => +v);
const plusNum = parseInt(plus);
const sum = m + plusNum;
const temp = parseInt(sum / 60);
const remain = sum % 60;

if (h + temp < 24) console.log(`${h + temp} ${remain}`);
else console.log(`${(h + temp) % 24} ${remain}`);
