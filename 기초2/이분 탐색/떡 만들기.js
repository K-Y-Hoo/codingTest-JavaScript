const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
const [info, ...input] = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");
const [n, m] = info.split(" ").map(Number);
const arr = input[0].split(" ").map(Number);

let start = 0;
let end = Math.max(...arr);
let result = 0;
while (start <= end) {
  let total = 0;
  let mid = Math.floor((start + end) / 2);
  for (x of arr) {
    if (x > mid) {
      total += x - mid;
    }
  }
  if (total < m) {
    end = mid - 1;
  } else {
    start = mid + 1;
    result = mid;
  }
}
console.log(result);
