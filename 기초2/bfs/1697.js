const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
const [n, k] = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(" ")
  .map(Number);

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

let x = n;
const queue = new Queue();
const max = n >= k ? n : k;
const visited = new Array(max + 2).fill(false);
// console.log(visited);

function bfs(x, depth) {
  queue.push([x, depth]);
  while (queue.size()) {
    let [x, depth] = queue.popLeft();
    if (visited[x]) continue;
    visited[x] = true;
    // console.log(x, depth);
    if (x === k) {
      return depth;
    }
    const dx = [-1, 1, x];
    for (let i = 0; i < 3; i++) {
      let ddx = x + dx[i];
      if (ddx < 0 || ddx > 100001) continue;
      queue.push([ddx, depth + 1]);
    }
  }
}

console.log(bfs(x, 0));
