const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
const [info, ...input] = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");
const [n, m] = info.split(" ").map(Number);
const arr = input.map((el) => parseInt(el.trim()));
let start = Math.min(...arr);
let end = arr.reduce((acc, cur) => acc + cur, 0);
let answer = Infinity;

while (start <= end) {
  let updateStart = 0;
  mid = Math.floor((start + end) / 2);
  let temp = mid;
  let cnt = 0;
  for (let i = 0; i < n; i++) {
    if (temp - arr[i] >= 0) {
      temp -= arr[i];
    } else {
      cnt++;
      temp = mid - arr[i];
      if (temp < 0) {
        updateStart = arr[i];
        break;
      }
    }
  }
  if (updateStart > 0) {
    start = updateStart;
    continue;
  }
  if (temp < mid) {
    cnt++;
  }
  if (cnt <= m) {
    if (answer > mid) {
      answer = mid;
    }
    end = mid - 1;
  } else {
    start = mid + 1;
  }
}
console.log(answer);
