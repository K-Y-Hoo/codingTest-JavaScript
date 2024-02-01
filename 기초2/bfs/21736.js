const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'example.txt';
const [info, ...input] = fs.readFileSync(filePath).toString().trim().split('\n');
const [n, m] = info.split(' ').map(Number);
const board = input.map((el) => el.trim().split(''));
const visited = Array.from(Array(n), () => new Array(m).fill(false));
const dx = [-1, 1, 0, 0];
const dy = [0, 0, -1, 1];

class Queue {
  constructor() {
    this.storage = {};
    this.front = 0;
    this.rear = 0;
  }

  size() {
    if (this.storage[this.rear] === undefined) {
      return 0;
    } else {
      return this.rear - this.front + 1;
    }
  }

  push(value) {
    if (this.size() === 0) {
      this.storage['0'] = value;
    } else {
      this.rear += 1;
      this.storage[this.rear] = value;
    }
  }

  popLeft() {
    let temp;
    if (this.front === this.rear) {
      temp = this.storage[this.front];
      delete this.storage[this.front];
      this.front = 0;
      this.rear = 0;
      return temp;
    } else {
      temp = this.storage[this.front];
      delete this.storage[this.front];
      this.front += 1;
      return temp;
    }
  }
}

const q = new Queue();

for (let i = 0; i < n; i++) {
  for (let j = 0; j < m; j++) {
    if (board[i][j] === 'I') {
      q.push([i, j]);
      break;
    }
  }
}
let answer = 0;

function bfs() {
  while (q.size()) {
    const [x, y] = q.popLeft();
    if (visited[x][y]) continue;
    visited[x][y] = true;
    if (board[x][y] === 'P') answer++;
    board[x][y] = 'I';
    for (let i = 0; i < 4; i++) {
      const ddx = x + dx[i];
      const ddy = y + dy[i];
      if (ddx < 0 || ddx >= n || ddy < 0 || ddy >= m) continue;
      if (visited[ddx][ddy]) continue;
      if (board[ddx][ddy] === 'I' || board[ddx][ddy] === 'X') continue;
      q.push([ddx, ddy]);
    }
  }
}

bfs();
console.log(answer > 0 ? answer : 'TT');
// console.log(board.join('\n'));
