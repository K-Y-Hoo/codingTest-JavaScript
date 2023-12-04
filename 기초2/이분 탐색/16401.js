const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
const [info, ...input] = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");
const [m, n] = info.split(" ").map(Number);
const arr = input[0]
  .split(" ")
  .map(Number)
  .sort((a, b) => a - b);

function check(m, arr, answer) {
  let cnt = 0;
  for (let i = 0; i < arr.length; i++) {
    cnt += Math.floor(arr[i] / answer);
  }
  if (cnt >= m) return true;
  return false;
}

function binarySearch(m, arr) {
  let start = 1;
  let end = 1000000000;
  let answer = 0;

  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    if (check(m, arr, mid)) {
      start = mid + 1;
      answer = mid;
    } else {
      end = mid - 1;
    }
  }
  return answer;
}

console.log(binarySearch(m, arr));
