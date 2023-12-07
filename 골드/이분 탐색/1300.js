const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
const [n, k] = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map(Number);

function binarySearch(n, k) {
  let start = 1;
  let end = n ** 2;
  let answer = 0;

  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    let sum = 0;
    for (let i = 1; i <= n; i++) {
      let value = 0;
      mid / i > n ? (value = n) : (value = Math.floor(mid / i));
      sum += value;
    }
    if (sum >= k) {
      end = mid - 1;
      answer = mid;
    } else {
      start = mid + 1;
    }
  }
  return answer;
}

console.log(binarySearch(n, k));
// const arrA = Array.from(Array(n + 1), () => new Array(n + 1).fill(0));
// for (let i = 1; i < n + 1; i++) {
//   for (let j = 1; j < n + 1; j++) {
//     arrA[i][j] = i * j;
//   }
// }

// const arrB = [];
// for (let i = 1; i < n + 1; i++) {
//   for (let j = 1; j < n + 1; j++) {
//     arrB.push(arrA[i][j]);
//   }
// }
// arrB.sort((a, b) => a - b);
// console.log(arrB[k]);
