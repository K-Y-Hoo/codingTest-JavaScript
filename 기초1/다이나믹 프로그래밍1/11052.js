const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");
let n = parseInt(input.shift());
const dp = input[0].split(" ").map(Number);
dp.unshift(0);

for (let i = 2; i <= n; i++) {
  for (let j = 1; j < i; j++) {
    //console.log(idxArr, dp[i], dp[idxArr[j]] * (i / idxArr[j]))
    //dp[i] = Math.max(dp[i], dp[idxArr[j]] * (i / idxArr[j]), dp[i-1] + dp[1])
    dp[i] = Math.max(dp[i], dp[i - j] + dp[j]);
  }
}

console.log(dp[n]);
