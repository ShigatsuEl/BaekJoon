const filePath = process.platform === "linux" ? "dev/stdin" : "example.txt";
let input = parseInt(
  require("fs").readFileSync(filePath).toString().trim().replace(/\r/g, "")
);
const coins = [500, 100, 50, 10, 5, 1];
let count = 0,
  change = 1000 - input;

for (let coin of coins) {
  const plus = Math.floor(change / coin);
  change %= coin;
  count += plus;
}
console.log(count);
