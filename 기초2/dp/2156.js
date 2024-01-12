const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
const [n, ...input] = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map(Number);

if (n === 1) {
  console.log(input[0]);
  return;
} else if (n === 2) {
  console.log(input[0] + input[1]);
  return;
}

const dp = new Array(n).fill(0);
dp[1] = input[0];
dp[2] = input[0] + input[1];

for (let i = 3; i <= n; i++) {
  dp[i] = Math.max(
    dp[i - 3] + input[i - 2] + input[i - 1],
    dp[i - 2] + input[i - 1],
    dp[i - 1]
  );
}

console.log(dp[n]);
