const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
const input = fs.readFileSync(filePath).toString().trim();
const n = parseInt(input);

const queens = [];
let cnt = 0;

function isPossible(x, y) {
  for (const [a, b] of queens) {
    if (a === x || b === y) return false;
    if (Math.abs(a - x) === Math.abs(b - y)) return false;
  }
  return true;
}

function dfs(rowNum) {
  if (rowNum === n) {
    cnt++;
    return;
  }
  for (let i = 0; i < n; i++) {
    if (isPossible(rowNum, i)) {
      queens.push([rowNum, i]);
      dfs(rowNum + 1);
      queens.pop();
    }
  }
}

dfs(0);
console.log(cnt);
