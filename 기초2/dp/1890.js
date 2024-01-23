const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");
const n = parseInt(input.shift());
const board = input.map((el) => el.trim().split(" ").map(Number));
const dp = Array.from(Array(n), () => new Array(n).fill(BigInt(0)));
dp[0][0] = 1;
for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    if (dp[i][j] === 0 || (i === n - 1 && j === n - 1)) continue;

    const jump = board[i][j];
    const down = i + jump;
    const right = j + jump;

    if (down < n) dp[down][j] += BigInt(dp[i][j]);
    if (right < n) dp[i][right] += BigInt(dp[i][j]);
  }
}

// console.log(dp.join("\n"));
console.log(dp[n - 1][n - 1].toString());
