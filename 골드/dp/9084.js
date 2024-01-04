const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");
const t = parseInt(input.shift());
for (let i = 0; i < t; i++) {
  const n = parseInt(input.shift());
  const coins = input.shift().trim().split(" ").map(Number);
  const m = parseInt(input.shift());
  const dp = Array(m + 1).fill(0);
  dp[0] = 1;
  for (let i = 0; i < coins.length; i++) {
    for (let j = coins[i]; j <= m; j++) {
      dp[j] += dp[j - coins[i]];
    }
    // console.log(dp);
  }
  console.log(dp[m]);
}
