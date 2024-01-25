const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");
const t = parseInt(input.shift());
for (let i = 0; i < t; i++) {
  const n = parseInt(input.shift());
  const dp = new Array(n + 1).fill(0);
  dp[1] = 1;
  dp[2] = 1;
  dp[3] = 1;
  dp[4] = 2;
  dp[5] = 2;
  for (let j = 6; j <= n; j++) {
    dp[j] = dp[j - 1] + dp[j - 5];
  }
  console.log(dp[n]);
}
