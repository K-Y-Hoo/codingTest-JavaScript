const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
const [info, ...input] = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");
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

const [n, m] = info.split(" ").map(Number);
const board = input.map((item) => item.trim().split(""));
const whiteVisited = Array.from(Array(n), () => new Array(m).fill(false));
const blueVisited = Array.from(Array(n), () => new Array(m).fill(false));
const dx = [-1, 1, 0, 0]; // 상하좌우
const dy = [0, 0, -1, 1];

function whiteBfs(x, y) {
  queue.push([x, y]);
  let count = 0;
  while (queue.size()) {
    const [x, y] = queue.popLeft();
    if (whiteVisited[x][y]) continue;
    whiteVisited[x][y] = true;
    board[x][y] = ".";
    count++;
    for (let i = 0; i < 4; i++) {
      let ddx = x + dx[i];
      let ddy = y + dy[i];
      if (ddx < 0 || ddx >= n || ddy < 0 || ddy >= m) continue;
      if (whiteVisited[ddx][ddy]) continue;
      if (board[ddx][ddy] === "." || board[ddx][ddy] === "B") continue;
      queue.push([ddx, ddy]);
    }
  }
  return count;
}

function blueBfs(x, y) {
  queue.push([x, y]);
  let count = 0;
  while (queue.size()) {
    const [x, y] = queue.popLeft();
    if (blueVisited[x][y]) continue;
    blueVisited[x][y] = true;
    board[x][y] = ".";
    count++;
    for (let i = 0; i < 4; i++) {
      let ddx = x + dx[i];
      let ddy = y + dy[i];
      if (ddx < 0 || ddx >= n || ddy < 0 || ddy >= m) continue;
      if (blueVisited[ddx][ddy]) continue;
      if (board[ddx][ddy] === "." || board[ddx][ddy] === "W") continue;
      queue.push([ddx, ddy]);
    }
  }
  return count;
}

let white = 0;
let blue = 0;
for (let i = 0; i < n; i++) {
  for (let j = 0; j < m; j++) {
    if (board[i][j] === "W") {
      white += whiteBfs(i, j) ** 2;
    } else if (board[i][j] === "B") {
      blue += blueBfs(i, j) ** 2;
    }
  }
}

console.log(white, blue);
