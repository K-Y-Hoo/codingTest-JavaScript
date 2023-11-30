const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
const [info, ...input] = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");
const [n, target] = info.split(" ").map(Number);
const arr = input[0].split(" ").map(Number);

function binarySearch(arr, target, start, end) {
  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    if (arr[mid] === target) return mid;
    else if (arr[mid] > target) end = mid - 1;
    else start = mid + 1;
  }
  return null;
}

const result = binarySearch(arr, target, 0, n - 1);
if (result === null) {
  console.log("찾고자 하는 원소가 없습니다.");
} else {
  console.log(result + 1);
}
