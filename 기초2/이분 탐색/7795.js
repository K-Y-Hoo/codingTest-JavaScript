const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");
const t = parseInt(input.shift());

function binarySearch(arr, num) {
  let start = 0;
  let end = arr.length - 1;
  let index = -1;
  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    if (num > arr[mid]) {
      index = mid;
      start = mid + 1;
      // console.log(arr[mid]);
    } else {
      end = mid - 1;
    }
  }
  return index;
}

for (let i = 0; i < t; i++) {
  let answer = 0;
  const [n, m] = input.shift().split(" ").map(Number);
  const arrA = input
    .shift()
    .split(" ")
    .map(Number)
    .sort((a, b) => a - b);
  const arrB = input
    .shift()
    .split(" ")
    .map(Number)
    .sort((a, b) => a - b);
  let index = 0;
  for (A of arrA) {
    answer += binarySearch(arrB, A) + 1;
  }
  console.log(answer);
}
