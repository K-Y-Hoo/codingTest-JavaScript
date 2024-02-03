const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'example.txt';
const [info, ...input] = fs.readFileSync(filePath).toString().trim().split('\n');
const [n, m] = info.split(' ').map(Number);
const board = input.map((el) => el.trim().split(''));
const visited = Array.from(Array(n), () => new Array(m).fill(false));
const dx = [-1, 1, 0, 0];
const dy = [0, 0, -1, 1];

let flag = false;

function dfs(x, y, cnt) {
  if (flag) return;

  for (let i = 0; i < 4; i++) {
    const ddx = x + dx[i];
    const ddy = y + dy[i];
    if (ddx < 0 || ddx >= n || ddy < 0 || ddy >= m) continue;
    if (board[ddx][ddy] !== board[start.i][start.j]) continue;
    if (!visited[ddx][ddy]) {
      visited[ddx][ddy] = true;
      dfs(ddx, ddy, cnt + 1);
      visited[ddx][ddy] = false;
      continue;
    } else if (cnt >= 4 && ddx === start.i && ddy === start.j) {
      flag = true;
      return;
    }
  }
}

let start;

for (let i = 0; i < n; i++) {
  for (let j = 0; j < m; j++) {
    start = { i, j };
    visited[i][j] = true;
    dfs(i, j, 1);
    visited[i][j] = false;
    if (flag) break;
  }
}

console.log(flag ? 'Yes' : 'No');
