let filePath = process.platform === "linux" ? "dev/stdin" : "example.txt";
let [month, day] = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(" ")
  .map((v) => +v);
let obj = {
    1: 31,
    2: 28,
    3: 31,
    4: 30,
    5: 31,
    6: 30,
    7: 31,
    8: 31,
    9: 30,
    10: 31,
    11: 30,
    12: 31,
  },
  count = 0;

for (let i = 1; i < month; i++) {
  count += obj[i];
}

count += day;

switch (count % 7) {
  case 1:
    console.log("MON");
    break;
  case 2:
    console.log("TUE");
    break;
  case 3:
    console.log("WED");
    break;
  case 4:
    console.log("THU");
    break;
  case 5:
    console.log("FRI");
    break;
  case 6:
    console.log("SAT");
    break;
  case 0:
    console.log("SUN");
    break;
  default:
    break;
}
