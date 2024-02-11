const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'example.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const n = parseInt(input.shift());
const arr = input.shift().trim().split(' ').map(Number);
const visited = new Array(n + 1).fill(0);
const q = [];
q.push(1);

if (n === 1) {
  console.log(0);
  return;
}

function bfs() {
  while (q.length) {
    x = q.shift();
    if (x + arr[x - 1] >= n) {
      console.log(visited[x] + 1);
      return;
    }
    for (let i = 1; i < arr[x - 1] + 1; i++) {
      const dx = x + i;
      if (visited[dx] === 0) {
        q.push(dx);
        visited[dx] = visited[x] + 1;
      }
    }
  }
  console.log(-1);
}

bfs();
