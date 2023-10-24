const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");
const n = parseInt(input.shift());
const inputArr = input[0].split(" ").map(Number);
const dp = new Array(n + 1).fill(0);

for (let i = 0; i < n; i++) {
  let max = 0;
  let maxIndex = -1;
  for (let j = 0; j < i; j++) {
    if (inputArr[i] > inputArr[j] && dp[j] > max) {
      max = dp[j];
      maxIndex = j;
    }
  }

  if (maxIndex !== -1) {
    dp[i] = dp[maxIndex] + inputArr[i];
  } else {
    dp[i] = inputArr[i];
  }
}

console.log(Math.max(...dp));
