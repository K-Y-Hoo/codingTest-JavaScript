const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");
const n = parseInt(input.shift());
const arr = input.shift().split(" ").map(Number);
const m = parseInt(input.shift());

let start = 1;
let end = Math.max(...arr);
let answer = 0;
while (start <= end) {
  let total = 0;
  let mid = Math.floor((start + end) / 2);
  for (x of arr) {
    if (x > mid) {
      total += mid
    } else {
      total += x
    }
  }
  if (total <= m) {
    start = mid + 1
    answer = mid;
  } else {
    end = mid - 1;
    
  }
}
console.log(answer)

