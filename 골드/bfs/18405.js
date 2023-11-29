const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
const [info, ...input] = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");
const [S,X,Y] = input.pop().split(" ").map(Number);
const [n, k] = info.trim().split(" ").map(Number);
const board = input.map((v) => v.trim().split(" ").map(Number));
const visited = Array.from(Array(n), () => new Array(n).fill(false));
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

let cnt = 0;
for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    if (board[i][j] !== 0) {
      cnt++;
    }
  }
}
for (let virus = 1; virus <=k; virus++) {
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {    
      if (board[i][j] === virus) {
        queue.push([i,j,virus,0]);
      }
    }
  }
}

const subQ = new Queue();
function bfs(S,X,Y) {
  while (queue.size()) {
    const [x,y,virusNum,time] = queue.popLeft();
    if (time === S) break;
    for (let i = 0; i < 4; i++) {
      const ddx = x + dx[i];
      const ddy = y + dy[i];
      if (ddx < 0 || ddx >= n || ddy < 0 || ddy >= n) continue;
      if (visited[ddx][ddy]) continue;
      if (board[ddx][ddy] !== 0) continue;
      visited[ddx][ddy] = true;
      board[ddx][ddy] = virusNum;
      queue.push([ddx,ddy,virusNum,time+1])
    }
  }
}
bfs(S,X,Y);
console.log(board[X-1][Y-1])
