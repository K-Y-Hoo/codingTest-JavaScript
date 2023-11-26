const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
const [info, ...input] = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");
const [n, m] = info.trim().split(" ").map(Number);
const board = input.map((v) => v.trim().split(""));
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

let endX = 0;
let endY = 0;
let startX = 0;
let startY = 0;
let waterArr = [];

for (let i = 0; i < n; i++) {
  for (let j = 0; j < m; j++) {
    if (board[i][j] === "D") {
      endX = i;
      endY = j;
    } else if (board[i][j] === "S") {
      startX = i;
      startY = j;
    } else if (board[i][j] === "*") {
      let waterX = i;
      let waterY = j;
      waterArr.push([waterX, waterY]);
    }
  }
}

let depth = 0;
function bfs() {
  queue.push([startX, startY, depth]);
  for (let [waterX, waterY] of waterArr) {
    queue.push([waterX, waterY, depth]);
  }
  while (queue.size()) {
    const [x, y, depth] = queue.popLeft();
    if (visited[x][y]) continue;
    visited[x][y] = true;
    if (board[x][y] === "*") {
      for (let i = 0; i < 4; i++) {
        const ddx = x + dx[i];
        const ddy = y + dy[i];
        if (ddx < 0 || ddx >= n || ddy < 0 || ddy >= m) continue;
        if (visited[ddx][ddy]) continue;
        if (board[ddx][ddy] === "D" || board[ddx][ddy] === "X") continue;
        board[ddx][ddy] = "*";
        queue.push([ddx, ddy, depth]);
      }
    } else if (board[x][y] === "S") {
      for (let i = 0; i < 4; i++) {
        const ddx = x + dx[i];
        const ddy = y + dy[i];
        if (ddx < 0 || ddx >= n || ddy < 0 || ddy >= m) continue;
        if (visited[ddx][ddy]) continue;
        if (board[ddx][ddy] === "*" || board[ddx][ddy] === "X") continue;
        if (board[ddx][ddy] === "D") {
          return depth + 1;
        }
        board[ddx][ddy] = "S";
        queue.push([ddx, ddy, depth + 1]);
      }
    }
  }
  return "KAKTUS";
}

const answer = bfs();
console.log(answer);
// console.log(board.join("\n"));
