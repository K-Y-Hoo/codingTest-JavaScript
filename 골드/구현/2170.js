const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'example.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const n = parseInt(input.shift());
const arr = input.map((el) => el.trim().split(' ').map(Number));
arr.sort((a, b) => a[0] - b[0]);

let start = arr[0][0];
let end = arr[0][1];

let answer = 0;

for (let i = 1; i < n; i++) {
  if (end < arr[i][0]) {
    answer += end - start;
    start = arr[i][0];
    end = arr[i][1];
  } else if (arr[i][0] <= end && arr[i][1] >= end) end = arr[i][1];
}

answer += end - start;
console.log(answer);
