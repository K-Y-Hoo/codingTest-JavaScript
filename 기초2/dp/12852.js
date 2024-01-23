const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
const input = fs.readFileSync(filePath).toString().trim();
let n = parseInt(input);

const dp = [];
dp[0] = 0;
dp[1] = 0;

for (let i = 2; i <= n; i++) {
  dp[i] = dp[i - 1] + 1;
  if (i % 2 === 0) dp[i] = Math.min(dp[i], dp[i / 2] + 1);
  if (i % 3 === 0) dp[i] = Math.min(dp[i], dp[i / 3] + 1);
}
// console.log(dp);
console.log(dp[n]);

const result = [n];
while (n > 1) {
  let min = dp[n - 1];
  let temp = n - 1;
  if (n % 3 === 0 && dp[n / 3] < min) {
    min = dp[n / 3];
    temp = n / 3;
  }
  if (n % 2 === 0 && dp[n / 2] < min) {
    min = dp[n / 2];
    temp = n / 2;
  }
  n = temp;
  result.push(n);
}
console.log(result.join(" "));
