const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'example.txt';
const [info, ...input] = fs.readFileSync(filePath).toString().trim().split('\n');
const [n, m] = info.split(' ').map(Number);
const board = input.map((el) => el.trim().split(' ').map(Number));
const visited = Array.from(Array(n), () => new Array(m).fill(false));

const dx = [-1, -1, -1, 0, 0, 1, 1, 1];
const dy = [-1, 0, 1, -1, 1, -1, 0, 1];

let flag = true;

function dfs(x, y) {
  visited[x][y] = true;
  for (let i = 0; i < 8; i++) {
    const ddx = x + dx[i];
    const ddy = y + dy[i];
    if (ddx < 0 || ddx >= n || ddy < 0 || ddy >= m) continue;
    if (board[x][y] < board[ddx][ddy]) flag = false;
    if (!visited[ddx][ddy] && board[x][y] === board[ddx][ddy]) dfs(ddx, ddy);
  }
}

let answer = 0;

for (let i = 0; i < n; i++) {
  for (let j = 0; j < m; j++) {
    if (!visited[i][j]) {
      flag = true;
      dfs(i, j);
      if (flag) answer++;
    }
  }
}

console.log(answer);
