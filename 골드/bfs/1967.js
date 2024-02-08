const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'example.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');
const n = parseInt(input.shift());
if (n === 1) {
  console.log(0);
  return;
}

const tree = Array.from({ length: n + 1 }, () => []);

input.map((el) => {
  const [from, to, dist] = el.trim().split(' ').map(Number);
  tree[from].push([to, dist]);
  tree[to].push([from, dist]);
});

function bfs(num) {
  const visited = new Array(n + 1).fill(false);
  const q = [];
  q.push([num, 0]);
  let farNode = { node: 0, dist: 0 };

  while (q.length) {
    const [node, dist] = q.shift();
    if (visited[node]) continue;
    visited[node] = true;

    if (farNode.dist < dist) farNode = { node, dist };

    for ([nextNode, nextDist] of tree[node]) q.push([nextNode, dist + nextDist]);
  }
  return farNode;
}

console.log(bfs(bfs(1).node).dist);
