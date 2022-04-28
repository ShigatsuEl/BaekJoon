let filePath = process.platform === "linux" ? "dev/stdin" : "example.txt";
let input = parseInt(require("fs").readFileSync(filePath).toString().trim());
let count = 2;

while (input >= count) {
  if (input % count !== 0) count++;
  else {
    console.log(count);
    input /= count;
  }
}
