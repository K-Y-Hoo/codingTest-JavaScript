const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
const [a, b, c] = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(" ")
  .map(Number);

const visited = Array.from(Array(201), () => new Array(201).fill(false));
const result = new Array(201).fill(false);

function dfs(ca, cb, cc) {
  if (visited[ca][cb]) return;
  if (ca === 0) result[cc] = true;
  visited[ca][cb] = true;

  if (ca + cb > b) {
    dfs(ca + cb - b, b, cc);
  } else {
    dfs(0, ca + cb, cc);
  }

  if (cb + ca > a) {
    dfs(a, cb + ca - a, cc);
  } else {
    dfs(cb + ca, 0, cc);
  }

  if (cc + ca > a) {
    dfs(a, cb, cc + ca - a);
  } else {
    dfs(cc + ca, cb, 0);
  }

  if (cc + cb > b) {
    dfs(ca, b, cc + cb - b);
  } else {
    dfs(ca, cc + cb, 0);
  }

  dfs(ca, 0, cb + cc);
  dfs(0, cb, ca + cc);
}

dfs(0, 0, c);
const answer = [];

for (let i = 0; i < 201; i++) {
  if (result[i]) answer.push(i);
}

console.log(answer.join(" "));
