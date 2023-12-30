const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
const [n, m] = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(" ")
  .map(Number);

const list = [];
const result = [];
const check = new Array(9).fill(false);

function dfs(cnt, n, m, k) {
  if (cnt === m) {
    result.push(list.join(" "));
    return;
  }
  for (let i = 1; i <= n; i++) {
    if (!check[i] && k < i) {
      check[i] = true;
      list[cnt] = i;
      k = i;
      dfs(cnt + 1, n, m, k);
      check[i] = false;
    }
  }
  return;
}

dfs(0, n, m, 0);
console.log(result.join("\n"));
