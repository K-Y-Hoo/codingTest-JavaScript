const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
const [info, ...input] = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");
const [n, k] = info.split(" ").map(Number);
const arr = input.map((el) => parseInt(el.trim()));

let start = 0;
let end = 2 ** 31 - 1;
let answer = 0;

while (start <= end) {
  let mid = Math.floor((start + end) / 2);
  let cnt = 0;

  for (num of arr) {
    cnt += Math.floor(num / mid);
  }

  if (cnt >= k) {
    start = mid + 1;
    answer = mid;
  } else {
    end = mid - 1;
  }
}

console.log(answer);
