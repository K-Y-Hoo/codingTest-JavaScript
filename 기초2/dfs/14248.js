const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'example.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');
const n = parseInt(input.shift());
const start = parseInt(input.pop()) - 1;
const arr = input[0].split(' ').map(Number);
const visited = new Array(n).fill(0);

function dfs(node) {
  if (node < 0 || node >= n) return;

  if (!visited[node]) {
    visited[node] = 1;
    dfs(node + arr[node]);
    dfs(node - arr[node]);
  }
}

dfs(start);

// console.log(visited);

const answer = visited.reduce((acc, cur) => acc + cur);
console.log(answer);
