const filePath = process.platform === "linux" ? "dev/stdin" : "example.txt";
let input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");
const [numbers, ...inputs] = input;
const [N] = numbers.split(" ");
const s = inputs.slice(0, +N);
const m = inputs.slice(+N);

function solution(m, s) {
  const obj = {};
  let answer = 0;

  s.forEach((item) => (obj[item] = true));
  m.forEach((item) => {
    if (obj[item]) answer += 1;
  });
  return answer;
}

const answer = solution(m, s);
console.log(answer);

