const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
const [str1, str2] = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map((el) => el.trim());
const n = str1.length;
const m = str2.length;
const arr = Array.from(Array(n + 1), () => new Array(m + 1).fill(0));

for (let i = 0; i < n; i++) {
  for (let j = 0; j < m; j++) {
    if (str1[i] === str2[j]) {
      arr[i + 1][j + 1] = arr[i][j] + 1;
    } else {
      arr[i + 1][j + 1] = Math.max(arr[i][j + 1], arr[i + 1][j]);
    }
  }
}

console.log(arr[n][m]);
