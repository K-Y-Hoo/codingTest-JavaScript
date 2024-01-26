const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'example.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');
const n = parseInt(input.shift());
const arr = input.map((el) => el.trim().split(' ').map(Number));
arr.sort((a, b) => a[0] - b[0]);

const dp = new Array(n).fill(1);

for (let i = 1; i < n; i++) {
  const cur = arr[i][1];
  let cnt = 0;
  for (let j = 0; j < i; j++) {
    const before = arr[j][1];
    if (cur > before) cnt = Math.max(cnt, dp[j]);
  }
  dp[i] = cnt + 1;
}

console.log(n - Math.max(...dp));
