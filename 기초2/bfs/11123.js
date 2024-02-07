const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'example.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');
const t = parseInt(input.shift());

const dx = [-1, 1, 0, 0];
const dy = [0, 0, -1, 1];

for (let i = 0; i < t; i++) {
  const [n, m] = input.shift().trim().split(' ').map(Number);
  const board = [];
  for (let j = 0; j < n; j++) {
    board.push(input.shift().trim().split(''));
  }
  let answer = 0;
  for (let a = 0; a < n; a++) {
    for (let b = 0; b < m; b++) {
      if (board[a][b] === '#') {
        answer++;
        bfs(a, b, n, m, board);
      }
    }
  }
  console.log(answer);
}

function bfs(x, y, n, m, board) {
  const q = [[x, y]];
  while (q.length) {
    const [nx, ny] = q.shift();

    for (let i = 0; i < 4; i++) {
      const ddx = nx + dx[i];
      const ddy = ny + dy[i];

      if (ddx < 0 || ddx >= n || ddy < 0 || ddy >= m) continue;
      if (board[ddx][ddy] === '#') {
        board[ddx][ddy] = '.';
        q.push([ddx, ddy]);
      }
    }
  }
}
