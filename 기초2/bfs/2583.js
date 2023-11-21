const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");
const [n, m, k] = input.shift().split(" ").map(Number);
const board = Array.from(Array(m), () => new Array(n).fill(0));
const visited = Array.from(Array(m), () => new Array(n).fill(false));
for (let i = 0; i < k; i++) {
  let [x1, y1, x2, y2] = input.shift().split(" ").map(Number);
  let startX = x1 > x2 ? x2 : x1;
  let endX = x1 > x2 ? x1 : x2;
  let startY = y1 > y2 ? y2 : y1;
  let endY = y1 > y2 ? y1 : y2;
  for (let x = startX; x < endX; x++) {
    for (let y = startY; y < endY; y++) {
      board[x][y] = 1;
    }
  }
}

// console.log(board.join("\n"));

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
let total = 0;
let cntArr = [];
function bfs(x, y) {
  let cnt = 0;
  queue.push([x, y]);
  while (queue.size()) {
    let [x, y] = queue.popLeft();
    if (visited[x][y]) continue;
    visited[x][y] = true;
    board[x][y] = 1;
    cnt++;
    for (let i = 0; i < 4; i++) {
      let ddx = x + dx[i];
      let ddy = y + dy[i];
      if (ddx < 0 || ddx >= m || ddy < 0 || ddy >= n) continue;
      if (visited[ddx][ddy]) continue;
      if (board[ddx][ddy] === 1) continue;
      queue.push([ddx, ddy]);
    }
  }
  cntArr.push(cnt);
}

for (let i = 0; i < m; i++) {
  for (let j = 0; j < n; j++) {
    if (board[i][j] === 0) {
      bfs(i, j);
      total++;
    }
  }
}
console.log(total);
console.log(cntArr.sort((a, b) => a - b).join(" "));
