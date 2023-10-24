const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
const input = fs.readFileSync(filePath).toString();
const n = parseInt(input);

const dp = new Array(n + 1).fill(0);
dp[1] = 3;
dp[2] = 7;

for (let i = 3; i <= n; i++) {
  dp[i] = (dp[i - 1] * 2 + dp[i - 2]) % 9901;
}

console.log(dp[n]);
