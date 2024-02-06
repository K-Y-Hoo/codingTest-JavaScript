const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'example.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');
const [r, c, k] = input.shift().split(' ').map(Number);
const board = input.map((el) => el.trim().split(''));

const dx = [0, 0, -1, 1];
const dy = [1, -1, 0, 0];

let answer = 0;

function dfs(x, y, cnt) {
  if (x === c - 1 && y === 0 && cnt === k) answer++;
  else {
    board[y][x] = 'T';

    for (let i = 0; i < 4; i++) {
      const ddx = x + dx[i];
      const ddy = y + dy[i];

      if (ddx < 0 || ddx >= c || ddy < 0 || ddy >= r) continue;
      if (board[ddy][ddx] === '.') {
        board[ddy][ddx] = 'T';
        dfs(ddx, ddy, cnt + 1);
        board[ddy][ddx] = '.';
      }
    }
  }
}

dfs(0, r - 1, 1);
console.log(answer);
