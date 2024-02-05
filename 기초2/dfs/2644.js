const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'example.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');
const n = parseInt(input.shift());
const [a, b] = input.shift().split(' ').map(Number);
const m = parseInt(input.shift());
const arr = input.map((el) => el.trim().split(' ').map(Number));

const visited = Array(n + 1).fill(false);
const graph = [...Array(n + 1)].map(() => []);

arr.map(([parent, child]) => {
  graph[parent].push(child);
  graph[child].push(parent);
});

let answer = 0;

function dfs(start, depth) {
  if (start === b) answer = depth;

  for (node of graph[start]) {
    if (!visited[node]) {
      visited[node] = true;
      dfs(node, depth + 1);
    }
  }
}

dfs(a, 0);

console.log(answer ? answer : -1);
