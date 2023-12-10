const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
const [info, ...input] = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");
const [n, k] = info.trim().split(" ").map(Number);
const arr = input.map((el) => parseInt(el.trim()));

arr.sort((a, b) => a - b);
let start = 1;
let end = 1000000000;
let answer = arr[0];

while (start <= end) {
  let mid = Math.floor((start + end) / 2);
  let sum = 0;
  for (let i = 0; i < n; i++) {
    if (arr[i] < mid) sum += mid - arr[i];
  }
  if (sum <= k) {
    start = mid + 1;
    answer = mid;
  } else {
    end = mid - 1;
  }
}

console.log(answer);
