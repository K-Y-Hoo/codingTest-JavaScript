const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");
let n = parseInt(input.shift());
const dp = input[0].split(" ").map(Number);
dp.unshift(0);

for (let i = 2; i <= n; i++) {
  for (let j = 1; j < i; j++) {
    dp[i] = Math.min(dp[i], dp[i - j] + dp[j]);
  }
}
//console.log(dp);
console.log(dp[n]);
