const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
const [n, k] = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(" ")
  .map(Number);
const num = 1000000000;

let arr = [];
for (let i = 0; i <= k; i++) {
  arr[i] = new Array(n + 1);
}
for (let i = 0; i <= n; i++) {
  arr[1][i] = 1;
}

for (let i = 2; i <= k; i++) {
  for (let j = 0; j <= n; j++) {
    if (j === 0) {
      arr[i][j] = 1;
    } else {
      arr[i][j] = (arr[i][j - 1] + arr[i - 1][j]) % num;
    }
  }
}
console.log(arr[k][n]);
