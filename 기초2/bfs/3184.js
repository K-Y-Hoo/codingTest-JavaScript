const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");
const [n, m] = input.shift().split(" ").map(Number);
const board = input.map((v) => v.trim().split(""));
const visited = Array.from(Array(n), () => new Array(m).fill(false));
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

const dx = [-1, 1, 0, 0]; // 상하좌우
const dy = [0, 0, -1, 1];
let totalSheep = 0;
let totalWolf = 0;

function bfs(x, y) {
  queue.push([x, y]);
  let o = 0;
  let v = 0;
  while (queue.size()) {
    let [x, y] = queue.popLeft();
    if (visited[x][y]) continue;
    visited[x][y] = true;
    if (board[x][y] === "v") {
      v++;
      board[x][y] = ".";
    }
    if (board[x][y] === "o") {
      o++;
      board[x][y] = ".";
    }
    for (let i = 0; i < 4; i++) {
      let ddx = x + dx[i];
      let ddy = y + dy[i];
      if (ddx < 0 || ddx >= n || ddy < 0 || ddy >= m) continue;
      if (visited[ddx][ddy]) continue;
      if (board[ddx][ddy] === "#") continue;
      queue.push([ddx, ddy]);
    }
  }
  if (o > v) {
    v = 0;
  } else {
    o = 0;
  }
  totalSheep += o;
  totalWolf += v;
}

for (let i = 0; i < n; i++) {
  for (let j = 0; j < m; j++) {
    if (board[i][j] === "v" || board[i][j] === "o") {
      bfs(i, j);
    }
  }
}

console.log(totalSheep, totalWolf);
