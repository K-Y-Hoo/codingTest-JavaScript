const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");
let s = input.shift().trim();
let t = input.shift().trim();
let answer = 0;

function dfs(T) {
  if (s === T) {
    answer = 1;
    return;
  }
  if (T.length === 0) {
    return;
  }
  if (T[T.length - 1] === "A") {
    dfs(T.slice(0, T.length - 1));
  }
  if (T[0] === "B") {
    dfs([...T.slice(1)].reverse().join(""));
  }
}

dfs(t);
console.log(answer);
