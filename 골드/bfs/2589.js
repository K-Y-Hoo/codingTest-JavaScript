const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
const [info, ...input] = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");
const [n, m] = info.trim().split(" ").map(Number);
const board = input.map((v) => v.trim().split(""));
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

function bfs(x, y) {
  const queue = new Queue();
  const visited = Array.from(Array(n), () => new Array(m).fill(0));
  let maxDist = 0;
  queue.push([x, y]);
  visited[x][y] = 1;
  while (queue.size()) {
    const [x, y] = queue.popLeft();
    for (let i = 0; i < 4; i++) {
      const ddx = x + dx[i];
      const ddy = y + dy[i];
      if (ddx < 0 || ddx >= n || ddy < 0 || ddy >= m) continue;
      if (visited[ddx][ddy]) continue;
      if (board[ddx][ddy] === "L") {
        visited[ddx][ddy] = visited[x][y] + 1;
        maxDist = Math.max(maxDist, visited[ddx][ddy]);
        queue.push([ddx, ddy]);
      }
    }
  }
  // console.log(visited.join("\n"));
  // console.log("\n");
  return maxDist - 1;
}
let answer = 0;
for (let i = 0; i < n; i++) {
  for (let j = 0; j < m; j++) {
    if (board[i][j] === "L") {
      answer = Math.max(answer, bfs(i, j));
    }
  }
}

console.log(answer);
