const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
const [t, ...input] = fs.readFileSync(filePath).toString().trim().split("\n");
const n = parseInt(t);
const dp = [];

for (let i = 0; i < n; i++) {
  dp.push(input[i].trim().split(" ").map(Number));
}

for (let i = 1; i < n; i++) {
  for (let j = 0; j < 3; j++) {
    let temp;
    if (j === 0) temp = Math.min(dp[i - 1][1], dp[i - 1][2]);
    else if (j === 1) temp = Math.min(dp[i - 1][0], dp[i - 1][2]);
    else if (j === 2) temp = Math.min(dp[i - 1][0], dp[i - 1][1]);
    dp[i][j] += temp;
  }
}

console.log(Math.min(...dp[n - 1]));
