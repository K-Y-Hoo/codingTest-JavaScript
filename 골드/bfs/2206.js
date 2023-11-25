const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
const [info, ...input] = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");
const [n, m] = info.trim().split(" ").map(Number);
const board = input.map((v) => v.trim().split("").map(Number));
const visited = Array.from({ length: n }, () =>
  Array.from({ length: m }, () => Array.from({ length: 2 }, () => 0))
);

class Node {
  constructor(x, y, cnt, isBreak) {
    this.x = x;
    this.y = y;
    this.isBreak = isBreak;
    this.cnt = cnt;
    this.next = null;
  }
}
class Queue {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }
  push(x, y, cnt, isBreak) {
    let node = new Node(x, y, cnt, isBreak);
    if (this.size === 0) {
      this.head = node;
    } else {
      this.tail.next = node;
    }
    this.tail = node;
    this.size++;
  }
  shift() {
    let temp = this.head;
    if (this.size === 0) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = this.head.next;
    }
    this.size--;
    return temp;
  }
  get length() {
    return this.size;
  }
}

const dx = [-1, 1, 0, 0]; // 상하좌우
const dy = [0, 0, -1, 1];
const queue = new Queue();
queue.push(0, 0, 1, 0);
let answer = -1;
while (queue.length) {
  const q = queue.shift();
  const [x, y, depth, isBreak] = [q.x, q.y, q.cnt, q.isBreak];
  if (x === n - 1 && y === m - 1) {
    answer = depth;
    break;
  }
  if (visited[x][y][isBreak]) continue;
  visited[x][y][isBreak] = 1;

  for (let i = 0; i < 4; i++) {
    const ddx = x + dx[i];
    const ddy = y + dy[i];
    if (ddx < 0 || ddx >= n || ddy < 0 || ddy >= m) continue;
    let nextIsBreak = isBreak;
    if (board[ddx][ddy]) {
      if (!nextIsBreak) nextIsBreak = 1;
      else continue;
    }
    queue.push(ddx, ddy, depth + 1, nextIsBreak);
  }
}
console.log(answer);
