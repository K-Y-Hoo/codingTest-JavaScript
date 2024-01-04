const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
const [info, ...input] = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");
const [n, k] = info.split(" ").map(Number);
let coins = input.map((el) => Number(el.trim()));
coins = new Set(coins);
coins = [...coins];

const dp = Array(k + 1).fill(Infinity);
dp[0] = 0;
for (let i = 0; i < coins.length; i++) {
  for (let j = coins[i]; j <= k; j++) {
    dp[j] = Math.min(dp[j], dp[j - coins[i]] + 1);
  }
  // console.log(dp);
}

console.log(dp[k] === Infinity ? -1 : dp[k]);
