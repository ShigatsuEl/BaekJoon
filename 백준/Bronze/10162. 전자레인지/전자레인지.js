const filePath = process.platform === "linux" ? "dev/stdin" : "example.txt";
let input = parseInt(require("fs").readFileSync(filePath).toString().trim());
let answer = [];

function question(count) {
  if (input >= count) {
    let x = Math.floor(input / count);
    answer.push(x);
    input -= x * count;
  } else {
    answer.push(0);
  }
}

question(300);
question(60);
question(10);

console.log(input === 0 ? answer.join(" ") : -1);