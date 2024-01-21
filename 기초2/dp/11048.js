const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");
const [n, m] = input.shift().trim().split(" ").map(Number);
const board = input.map((el) => el.trim().split(" ").map(Number));
const dp = Array.from(Array(n + 1), () => new Array(m + 1).fill(0));

for (let i = 1; i <= n; i++) {
  for (let j = 1; j <= m; j++) {
    dp[i][j] =
      board[i - 1][j - 1] +
      Math.max(dp[i - 1][j - 1], dp[i - 1][j], dp[i][j - 1]);
  }
}

console.log(dp[n][m]);
