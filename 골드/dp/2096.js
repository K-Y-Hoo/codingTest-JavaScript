const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");
const n = parseInt(input.shift());
let dp = input.map((el) => el.trim().split(" ").map(Number));
const answer = [];

for (let i = 1; i < dp.length; i++) {
  for (let j = 0; j < dp[0].length; j++) {
    if (j === 0) dp[i][j] = dp[i][j] + Math.max(dp[i - 1][0], dp[i - 1][1]);
    else if (j === 1)
      dp[i][j] = dp[i][j] + Math.max(dp[i - 1][0], dp[i - 1][1], dp[i - 1][2]);
    else if (j === 2)
      dp[i][j] = dp[i][j] + Math.max(dp[i - 1][1], dp[i - 1][2]);
  }
}

answer.push(Math.max(...dp[n - 1]));

dp = input.map((el) => el.trim().split(" ").map(Number));

for (let i = 1; i < dp.length; i++) {
  for (let j = 0; j < dp[0].length; j++) {
    if (j === 0) dp[i][j] = dp[i][j] + Math.min(dp[i - 1][0], dp[i - 1][1]);
    else if (j === 1)
      dp[i][j] = dp[i][j] + Math.min(dp[i - 1][0], dp[i - 1][1], dp[i - 1][2]);
    else if (j === 2)
      dp[i][j] = dp[i][j] + Math.min(dp[i - 1][1], dp[i - 1][2]);
  }
}

answer.push(Math.min(...dp[n - 1]));

console.log(answer.join(" "));
