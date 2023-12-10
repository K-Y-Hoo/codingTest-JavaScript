const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");
const [n, m] = input.shift().trim().split(" ").map(Number);
const arr = input.shift().trim().split(" ").map(Number);

let start = 1;
let end = Math.max(...arr) * m;
let answer = 0;

while (start <= end) {
  let mid = Math.floor((start + end) / 2);
  let sum = 0;
  for (num of arr) {
    let cnt = Math.floor(mid / num);
    sum += cnt;
  }

  if (sum >= m) {
    end = mid - 1;
    answer = mid;
  } else {
    start = mid + 1;
  }
}

console.log(answer);
