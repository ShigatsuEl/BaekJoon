const filePath = process.platform === "linux" ? "dev/stdin" : "example.txt";
let input = require("fs").readFileSync(filePath).toString().trim().split("\n");

let a = input[0];
let b = input[2];

if (a.length === b.length) {
  if (input[1] === "*") {
    console.log("1" + "0".repeat(a.length - 1) + "0".repeat(b.length - 1));
  } else {
    console.log("2" + "0".repeat(a.length - 1));
  }
} else {
  if (input[1] === "*") {
    console.log("1" + "0".repeat(a.length - 1) + "0".repeat(b.length - 1));
  } else {
    if (a.length < b.length) {
      b = b.split("");
      b[b.length - a.length] = "1";
      console.log(b.join(""));
    } else {
      a = a.split("");
      a[a.length - b.length] = "1";
      console.log(a.join(""));
    }
  }
}
