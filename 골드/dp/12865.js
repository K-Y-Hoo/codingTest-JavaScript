const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
const [info, ...input] = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");
const [n, k] = info.split(" ").map(Number);

const obj = [
  {
    v: 0,
    w: 0,
  },
];

const dp = Array.from(Array(n + 1), () => new Array(k + 1).fill(0));

for (let i = 0; i < n; i++) {
  const [w, v] = input[i].trim().split(" ").map(Number);
  obj.push({
    w: w,
    v: v,
  });
}

for (let i = 1; i <= n; i++) {
  for (let j = 1; j <= k; j++) {
    if (obj[i].w <= j) {
      dp[i][j] = Math.max(obj[i].v + dp[i - 1][j - obj[i].w], dp[i - 1][j]);
    } else if (obj[i].w > j) {
      dp[i][j] = dp[i - 1][j];
    }
  }
}

console.log(dp[n][k]);
