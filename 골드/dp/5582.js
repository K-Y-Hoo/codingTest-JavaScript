const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const str1 = input[0].trim();
const str2 = input[1].trim();

let answer = 0;

const dp = Array.from(Array(str1.length + 1), () =>
  new Array(str2.length + 1).fill(0)
);

for (let i = 1; i <= str1.length; i++) {
  for (let j = 1; j <= str2.length; j++) {
    if (str1[i - 1] === str2[j - 1]) dp[i][j] = dp[i - 1][j - 1] + 1;
    else dp[i][j] = 0;
    answer = Math.max(answer, dp[i][j]);
  }
}
// console.log(dp);
console.log(answer);
