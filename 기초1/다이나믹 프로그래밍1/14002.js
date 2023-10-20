const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");
let n = parseInt(input.shift());
input = input[0].split(" ").map(Number);
let dp = new Array(n).fill(0);

let arr = [];
for (let i = 0; i < n; i++) {
  let max = 0;
  let maxIndex = -1;
  for (let j = 0; j < i; j++) {
    if (input[i] > input[j] && dp[j] > max) {
      max = dp[j];
      maxIndex = j;
    }
  }
  dp[i] = max + 1;
  arr[i] = maxIndex !== -1 ? arr[maxIndex].concat(input[i]) : [input[i]];
}
let maxLength = Math.max(...dp);
console.log(maxLength);
console.log(arr[dp.indexOf(maxLength)].join(" "));
