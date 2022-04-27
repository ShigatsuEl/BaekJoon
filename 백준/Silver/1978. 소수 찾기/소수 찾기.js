const filePath = process.platform === "linux" ? "dev/stdin" : "example.txt";
let [_, arr] = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

const isPrime = (n) => {
  if (n == 1) {
    return false;
  }

  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      return false;
    }
  }

  return true;
};

console.log(arr.split(" ").filter((v) => isPrime(v)).length);