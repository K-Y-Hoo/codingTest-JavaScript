const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");
let n = parseInt(input.shift());
let maxArr = [];
for (let i = 0; i < input.length; i++) {
  maxArr.push(parseInt(input[i]));
}
const max = Math.max(...maxArr);

const dp = new Array(max + 1).fill(0);
dp[0] = 0;
dp[1] = 1;
dp[2] = 2;
dp[3] = 4;
for (let i = 4; i <= max; i++) {
  dp[i] = (dp[i - 2] + dp[i - 1] + dp[i - 3]) % 1000000009;
}
const answer = [];
for (let i = 0; i < input.length; i++) {
  answer.push(dp[parseInt(input[i])]);
}

console.log(answer.join("\n"));
