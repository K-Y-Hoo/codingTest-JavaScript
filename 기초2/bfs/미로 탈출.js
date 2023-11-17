const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");
const [n, m] = input.shift().split(" ").map(Number);
let graph = input.map((v) => v.trim().split("").map(Number));
// const visited = Array.from(Array(n), () => new Array(m).fill(false));
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

  add(value) {
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
let answer = 0;
const dx = [-1, 1, 0, 0]; // 상하좌우
const dy = [0, 0, -1, 1];

function bfs(graph, x, y) {
  queue.add([x, y]);
  while (queue.size()) {
    let [x, y] = queue.popLeft();
    for (let i = 0; i < 4; i++) {
      let ddx = x + dx[i];
      let ddy = y + dy[i];
      if (
        ddx < 0 ||
        ddx >= n ||
        ddy < 0 ||
        ddy >= m ||
        (ddx === 0 && ddy === 0)
      ) {
        continue;
      }
      if (graph[ddx][ddy] === 0) {
        continue;
      }
      if (graph[ddx][ddy] === 1) {
        graph[ddx][ddy] = graph[x][y] + 1;
        queue.add([ddx, ddy]);
      }
    }
  }
  return graph[n - 1][m - 1];
}

console.log(bfs(graph, 0, 0));
console.log(graph);
