const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
const input = fs.readFileSync(filePath).toString().trim();
const n = parseInt(input);
const dp = new Array(n + 1).fill(0);
dp[0] = 1;
dp[1] = 1;

for (let i = 2; i <= n; i++) {
  dp[i] = (dp[i - 1] + dp[i - 2] * 2) % 10007;
}

console.log(dp[n]);
