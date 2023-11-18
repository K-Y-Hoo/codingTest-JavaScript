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

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");
for (let i = 0; i < parseInt(input[0]); i++) {
  const l = parseInt(input[i * 3 + 1]);
  const [startX, startY] = input[i * 3 + 2].split(" ").map(Number);
  const [endX, endY] = input[i * 3 + 3].split(" ").map(Number);
  const visited = Array.from(Array(l), () => new Array(l).fill(false));
  visited[startX][startY] = true;
  console.log(bfs(startX, startY, 0, endX, endY, l, visited));
}

function bfs(x, y, depth, endX, endY, l, visited) {
  const dx = [-1, -2, -2, -1, 1, 2, 2, 1]; // 나이트 이동 방향
  const dy = [-2, -1, 1, 2, 2, 1, -1, -2];
  queue.push([x, y, depth]);
  while (queue.size()) {
    let [x, y, depth] = queue.popLeft();
    if (x === endX && y === endY) {
      return depth;
    }
    for (let i = 0; i < 8; i++) {
      let ddx = x + dx[i];
      let ddy = y + dy[i];
      if (ddx < 0 || ddx >= l || ddy < 0 || ddy >= l) continue;
      if (visited[ddx][ddy]) continue;
      visited[ddx][ddy] = true;
      queue.push([ddx, ddy, depth + 1]);
    }
  }
}
