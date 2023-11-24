const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
const [info, ...input] = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

const [n, m] = info.split(" ").map(Number);
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

const queue = new Queue();

function bfs(x, y, visited, newBoard) {
  queue.push([x, y]);
  while (queue.size()) {
    const [x, y] = queue.popLeft();
    if (visited[x][y]) continue;
    visited[x][y] = true;
    newBoard[x][y] = 2;
    for (let i = 0; i < 4; i++) {
      let ddx = x + dx[i];
      let ddy = y + dy[i];
      if (ddx < 0 || ddx >= n || ddy < 0 || ddy >= m) continue;
      if (newBoard[ddx][ddy] === 1 || newBoard[ddx][ddy] === 2) continue;
      queue.push([ddx, ddy]);
    }
  }
}
let answer = 0;
const arr = [];
for (let i = 0; i < n; i++) {
  for (let j = 0; j < m; j++) {
    if (board[i][j] === 0) arr.push([i, j]);
  }
}

for (let i = 0; i < arr.length - 2; i++) {
  for (let j = i + 1; j < arr.length - 1; j++) {
    for (let k = j + 1; k < arr.length; k++) {
      let newBoard = board.map((v) => [...v]);
      let visited = Array.from(Array(n), () => new Array(m).fill(false));
      newBoard[arr[i][0]][arr[i][1]] = 1;
      newBoard[arr[j][0]][arr[j][1]] = 1;
      newBoard[arr[k][0]][arr[k][1]] = 1;

      for (let x = 0; x < n; x++) {
        for (let y = 0; y < m; y++) {
          if (newBoard[x][y] === 2) {
            bfs(x, y, visited, newBoard);
          }
        }
      }

      let count = 0;
      for (let x = 0; x < n; x++) {
        for (let y = 0; y < m; y++) {
          if (newBoard[x][y] === 0) count++;
        }
      }
      answer = Math.max(answer, count);
    }
  }
}
console.log(answer);
