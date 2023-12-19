const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
const [n, p, q] = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(" ")
  .map(Number);

const dict = {};
dict[0] = 1;
function dfs(i) {
  if (i in dict) return dict[i];
  dict[i] = dfs(Math.floor(i / p)) + dfs(Math.floor(i / q));
  return dict[i];
}

console.log(dfs(n));
