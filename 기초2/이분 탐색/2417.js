const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
const input = fs.readFileSync(filePath).toString().trim();
const n = parseInt(input);
let start = 0;
let end = n;
let min = Infinity;

while (start <= end) {
  let mid = Math.floor((start + end) / 2);
  let pow = Math.pow(mid, 2);

  if (pow >= 0) {
    if (pow >= n) {
      end = mid - 1;
      min = Math.min(mid, min);
    } else {
      start = mid + 1;
    }
  }
}

console.log(min);
