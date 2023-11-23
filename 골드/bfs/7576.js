const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
const [info, ...input] = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

const [m, n] = info.split(" ").map(Number);
const board = input.map((v) => v.trim().split(" ").map(Number));
const dist = Array.from(Array(n), () => new Array(m).fill(0));
const dx = [-1, 1, 0, 0]; // 상하좌우
const dy = [0, 0, -1, 1];
const queue = [];
for (let i = 0; i < n; i++) {
  for (let j = 0; j < m; j++) {
    if (board[i][j] === 1) {
      queue.push([i, j]);
    }
    if (board[i][j] === 0) {
      dist[i][j] = -1;
    }
  }
}
let head = 0;
while (queue.length > head) {
  const [x, y] = queue[head++];
  for (let i = 0; i < 4; i++) {
    const ddx = x + dx[i];
    const ddy = y + dy[i];
    if (ddx < 0 || ddx >= n || ddy < 0 || ddy >= m) continue;
    if (dist[ddx][ddy] >= 0) continue;
    dist[ddx][ddy] = dist[x][y] + 1;
    queue.push([ddx, ddy]);
  }
}

let day = 0;
for (let i = 0; i < n; i++) {
  for (let j = 0; j < m; j++) {
    if (dist[i][j] === -1) {
      console.log(-1);
      return;
    }
    day = Math.max(day, dist[i][j]);
  }
}

console.log(day);
