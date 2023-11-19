const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");
const n = parseInt(input.shift());
const [startX, startY, endX, endY] = input
  .shift()
  .trim()
  .split(" ")
  .map(Number);
const visited = Array.from(Array(n), () => new Array(n).fill(false));
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

function bfs(x, y, depth) {
  const dx = [-2, -2, 0, 0, 2, 2];
  const dy = [-1, 1, -2, 2, -1, 1];
  queue.push([x, y, depth]);
  while (queue.size()) {
    let [x, y, depth] = queue.popLeft();
    if (visited[x][y]) continue;
    visited[x][y] = true;
    if (x === endX && y === endY) {
      return depth;
    }
    for (let i = 0; i < 6; i++) {
      let ddx = x + dx[i];
      let ddy = y + dy[i];
      if (ddx < 0 || ddx >= n || ddy < 0 || ddy >= n) continue;
      if (visited[ddx][ddy]) continue;
      // visited[ddx][ddy] = true;
      queue.push([ddx, ddy, depth + 1]);
    }
  }
}
let answer = bfs(startX, startY, 0);

console.log(answer ? answer : -1);
