const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
const [n, ...input] = fs.readFileSync(filePath).toString().trim().split("\n");
const dp = [];
for (let i = 0; i < input.length; i++) {
  dp.push(input[i].trim().split(" ").map(Number));
}

for (let i = 1; i < dp.length; i++) {
  for (let j = 0; j <= i; j++) {
    let temp;
    if (j === 0) temp = dp[i - 1][j];
    else if (j === i) temp = dp[i - 1][j - 1];
    else temp = Math.max(dp[i - 1][j - 1], dp[i - 1][j]);
    dp[i][j] += temp;
  }
}

console.log(Math.max(...dp[dp.length - 1]));
