const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
const [info, ...input] = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");
const n = parseInt(info);
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

let visited = Array.from(Array(n), () => new Array(n).fill(false));
let landNum = 0;

function check(x, y) {
  return 0 <= x && x < n && 0 <= y && y < n;
}

function dfs(x, y, landNum) {
  visited[x][y] = true;
  board[x][y] = landNum;
  for (let i = 0; i < 4; i++) {
    const ddx = x + dx[i];
    const ddy = y + dy[i];
    if (ddx < 0 || ddx >= n || ddy < 0 || ddy >= n) continue;
    if (visited[ddx][ddy]) continue;
    if (board[ddx][ddy]) {
      dfs(ddx, ddy, landNum);
    }
  }
}

for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    if (board[i][j] && !visited[i][j]) {
      dfs(i, j, ++landNum);
    }
  }
}

function bfs(landNum) {
  const queue = new Queue();
  visited = Array.from(Array(n), () => new Array(n).fill(0));
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (board[i][j] === landNum) {
        visited[i][j] = 1;
        queue.push([i, j]);
      }
    }
  }

  let cnt = 0;
  while (queue.size()) {
    let qSize = queue.size();

    while (qSize--) {
      const [x, y] = queue.popLeft();
      for (let i = 0; i < 4; i++) {
        const ddx = x + dx[i];
        const ddy = y + dy[i];

        if (ddx < 0 || ddx >= n || ddy < 0 || ddy >= n) continue;
        if (board[ddx][ddy] !== 0 && board[ddx][ddy] !== landNum) return cnt;
        if (board[ddx][ddy] === 0 && !visited[ddx][ddy]) {
          visited[ddx][ddy] = 1;
          queue.push([ddx, ddy]);
        }
      }
    }
    cnt++;
    // console.log(visited.join("\n"));
  }
}

let answer = Infinity;
for (let i = 1; i <= landNum; i++) {
  answer = Math.min(answer, bfs(i));
}

console.log(answer);
