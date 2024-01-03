const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
const [info, ...input] = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");
const [n, k] = info.split(" ").map(Number);
const coins = input.map((el) => parseInt(el.trim()));
const dp = Array(k + 1).fill(0);
dp[0] = 1;
for (let i = 0; i < coins.length; i++) {
  for (let j = coins[i]; j <= k; j++) {
    dp[j] += dp[j - coins[i]];
  }
}

console.log(dp[k]);
