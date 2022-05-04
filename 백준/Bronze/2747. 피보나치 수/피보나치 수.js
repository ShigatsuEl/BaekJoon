let filePath = process.platform === "linux" ? "dev/stdin" : "example.txt";
let input = parseInt(require("fs").readFileSync(filePath).toString().trim());
let one = 0,
  two = 1;

for (let i = 0; i < input - 1; i++) {
  let temp = one + two;
  one = two;
  two = temp;
}

console.log(two);
