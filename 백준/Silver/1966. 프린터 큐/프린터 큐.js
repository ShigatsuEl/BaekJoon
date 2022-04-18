const fs = require("fs");
let [n, ...arr] = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

for (let i = 0; i < n; i++) {
  const [length, priority] = arr[i * 2].split(" ").map((v) => +v);
  const printer = arr[i * 2 + 1]
    .split(" ")
    .map((v, i) => ({ index: i, priority: +v }));
  let queue = [];

  while (printer.length > 0) {
    let firstEle = printer.shift();
    let hasHighPriority = printer.some((v) => v.priority > firstEle.priority);
    if (hasHighPriority) printer.push(firstEle);
    else queue.push(firstEle);
  }

  console.log(queue.findIndex((v) => v.index === priority) + 1);
}
