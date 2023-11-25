const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
const [info, ...input] = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");
const [n, m] = info.trim().split(" ").map(Number);
const board = input.map((v) => v.trim().split(" ").map(Number));

const dx = [-1, 1, 0, 0]; // 상하좌우
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
      this.storage["0"] = value;
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

let time = 0;

function bfs() {
  const newBoard = Array.from(Array(n), () => new Array(m).fill(0));
  const queue = new Queue();
  const visited = Array.from(Array(n), () => new Array(m).fill(false));
  queue.push([0, 0]);
  while (queue.size()) {
    const [x, y] = queue.popLeft();
    if (visited[x][y]) continue;
    visited[x][y] = true;
    for (let i = 0; i < 4; i++) {
      let ddx = x + dx[i];
      let ddy = y + dy[i];
      if (ddx < 0 || ddx >= n || ddy < 0 || ddy >= m) continue;
      if (visited[ddx][ddy]) continue;
      if (board[ddx][ddy] === 1) {
        newBoard[ddx][ddy] += 1;
        continue;
      }
      queue.push([ddx, ddy]);
    }
  }
  let nodes = [];
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (newBoard[i][j] >= 2) {
        nodes = [...nodes, [i, j]];
      }
    }
  }
  if (!nodes.length) return true;
  for (const [x, y] of nodes) {
    board[x][y] = 0;
  }

  return false;
}
while (1) {
  if (bfs()) break;
  time++;
}

console.log(time);
