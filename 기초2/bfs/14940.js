const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");
const [n, m] = input.shift().split(" ").map(Number);
const board = input.map((v) => v.trim().split(" ").map(Number));
const answer = Array.from(Array(n), () => new Array(m).fill(0));
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

const dx = [-1, 1, 0, 0]; // 상하좌우
const dy = [0, 0, -1, 1];

let endX = 0;
let endY = 0;

for (let i = 0; i < n; i++) {
  for (let j = 0; j < m; j++) {
    if (board[i][j] === 2) {
      endX = i;
      endY = j;
    }
  }
}
const queue = new Queue();
let cnt = 0;
function bfs() {
  subQ = new Queue();
  while (true) {
    cnt += 1;
    while (queue.size()) {
      let [x, y] = queue.popLeft();
      for (let i = 0; i < 4; i++) {
        let ddx = x + dx[i];
        let ddy = y + dy[i];
        if (ddx < 0 || ddx >= n || ddy < 0 || ddy >= m) continue;
        if (!visited[ddx][ddy] && board[ddx][ddy] === 1) {
          visited[ddx][ddy] = true;
          answer[ddx][ddy] = cnt;
          subQ.push([ddx, ddy]);
        }
      }
    }
    if (!subQ.size()) break;

    while (subQ.size()) {
      queue.push(subQ.popLeft());
    }
  }
}
visited[endX][endY] = true;
queue.push([endX, endY]);
bfs();

for (let i = 0; i < n; i++) {
  for (let j = 0; j < m; j++) {
    if (answer[i][j] === 0 && board[i][j] === 1) {
      answer[i][j] = -1;
    }
  }
}

console.log(answer.map((b) => b.join(" ")).join("\n"));
