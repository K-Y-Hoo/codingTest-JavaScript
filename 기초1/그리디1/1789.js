const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
const input = fs.readFileSync(filePath).toString().trim();
let s = parseInt(input);

let sum = 0;
let cnt = 0;

for (let i = 1; ; i++) {
  sum += i;
  cnt++;
  if (sum > input) {
    cnt--;
    break;
  }
}

console.log(cnt);
