const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
let [women, men, k] = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(" ")
  .map(Number);

let group = 0;

while (true) {
  if (women < 2 || men < 1 || women + men - 3 < k) {
    break;
  }
  women -= 2;
  men -= 1;
  group += 1;
}

console.log(group);
