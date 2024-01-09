const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
const input = fs.readFileSync(filePath).toString().trim();
const n = parseInt(input);

if (n % 2 === 1) {
  console.log(0);
  return;
}

const dp = new Array(n + 1).fill(0);
dp[2] = 3;
if (n === 2) {
  console.log(dp[2]);
  return;
}

for (let i = 3; i <= n; i++) {
  if (i % 2 === 0) {
    dp[i] = dp[i - 2] * 3 + 2;
    let k = i - 2;
    while (k >= 2) {
      dp[i] = dp[i] + dp[k - 2] * 2;
      k = k - 2;
    }
  }
}

console.log(dp[n]);
