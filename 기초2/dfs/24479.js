const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'example.txt';
const [info, ...input] = fs.readFileSync(filePath).toString().trim().split('\n');
const [n, m, r] = info.split(' ').map(Number);
const arr = input.map((el) => el.trim().split(' ').map(Number));
const graph = [...Array(n + 1)].map(() => []);
const visited = Array(n).fill(0);

let cnt = 1;

arr.map(([from, to]) => {
  graph[from].push(to);
  graph[to].push(from);
});

graph.map((el) => el.sort((a, b) => a - b));

function dfs(node) {
  if (!visited[node - 1]) {
    visited[node - 1] = cnt;
    cnt++;
    for (next of graph[node]) {
      dfs(next);
    }
  }
}

dfs(r);

console.log(visited.join('\n'));
