const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const n = parseInt(input.shift());
const arr = input.shift().split(" ").map(Number);
let answer = 0;
for (let i = 0; i < arr.length; i++) {
  answer = Math.max(answer, getCount(i));
}

console.log(answer);

function getCount(idx) {
  let cnt = 0;
  let temp = 0;

  for (let i = idx - 1; i >= 0; i--) {
    const slope = (arr[idx] - arr[i]) / (idx - i);
    if (i === idx - 1 || temp > slope) {
      cnt++;
      temp = slope;
    }
  }

  for (let i = idx + 1; i < arr.length; i++) {
    const slope = (arr[idx] - arr[i]) / (idx - i);
    if (i === idx + 1 || temp < slope) {
      cnt++;
      temp = slope;
    }
  }
  return cnt;
}
