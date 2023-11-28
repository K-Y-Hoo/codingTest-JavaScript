const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
const [info, ...input] = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");
const [n, m] = info.trim().split(" ").map(Number);
const board = input.map((v) => v.trim().split("").map(Number));
const visited = Array.from(Array(n), () => new Array(m).fill(false));
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
const queue = new Queue();

for (let i = 0; i < m; i++) {
  if (board[0][i] === 0) {
    queue.push([0,i]);
  }
}

const dir = Array.from(Array(n), () => new Array(m).fill(1));
function bfs() {
  while (queue.size()) {
    const [x,y] = queue.popLeft();
    if (visited[x][y]) continue;
    visited[x][y] = true;
    for (let i = 0; i < 4; i++) {
      const ddx = x + dx[i];
      const ddy = y + dy[i];
      if (ddx < 0 || ddx >= n || ddy < 0 || ddy >= m) continue;
      if (visited[ddx][ddy]) continue;
      if (board[ddx][ddy] === 0) {
        dir[ddx][ddy] = dir[x][y] + 1;
        queue.push([ddx,ddy])
      }
      
    }
  }
}

bfs();
for (let i = 0; i < m; i++) {
  if (dir[n-1][i] !== 1) {
    console.log("YES")
    return;
  }
}
console.log("NO")