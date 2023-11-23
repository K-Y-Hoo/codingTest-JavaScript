const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

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

function distance(x, y, ddx, ddy) {
  return Math.abs(ddx - x) + Math.abs(ddy - y);
}

function bfs(homeX, homeY, rockX, rockY, visited, conveni) {
  if (distance(homeX, homeY, rockX, rockY) <= 1000) {
    visited[n] = true;
    return;
  }
  const queue = new Queue();
  for (let i = 0; i < conveni.length; i++) {
    let temp = distance(homeX, homeY, conveni[i][0], conveni[i][1]);
    if (temp <= 1000) {
      queue.push(conveni[i]);
      visited[i] = true;
    }
  }
  while (queue.size()) {
    let [cx, cy] = queue.popLeft();
    for (let i = 0; i < conveni.length; i++) {
      let temp = distance(cx, cy, conveni[i][0], conveni[i][1]);
      if (temp <= 1000 && !visited[i]) {
        queue.push(conveni[i]);
        visited[i] = true;
      }
    }
  }
}

const t = parseInt(input.shift());

for (let i = 0; i < t; i++) {
  const n = parseInt(input.shift());
  const visited = new Array(n + 1).fill(false);
  const conveni = [];
  const [homeX, homeY] = input.shift().split(" ").map(Number);
  for (let j = 0; j < n; j++) {
    conveni.push(input.shift().split(" ").map(Number));
  }
  const [rockX, rockY] = input.shift().split(" ").map(Number);
  conveni.push([rockX, rockY]);

  bfs(homeX, homeY, rockX, rockY, visited, conveni);

  if (visited[n]) console.log("happy");
  else console.log("sad");
}
