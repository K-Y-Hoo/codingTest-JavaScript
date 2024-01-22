const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
const input = fs.readFileSync(filePath).toString().trim();

const n = parseInt(input);
const dp = Array.from(Array(n + 1), () => new Array());
dp[1] = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
dp[2] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let i = 3; i <= n; i++) {
  for (let j = 0; j < dp[i - 1].length; j++) {
    const temp = [...dp[i - 1]];
    dp[i][j] = temp.slice(0, j + 1).reduce((acc, cur) => (acc + cur) % 10007);
  }
}

console.log(dp[n].reduce((acc, cur) => acc + cur) % 10007);
