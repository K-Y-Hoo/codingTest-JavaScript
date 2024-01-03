const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
const [info, ...input] = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");
const [n, m] = info.split(" ").map(Number);
const board = [];
board.push("e".repeat(m + 2).split(""));
for (let i = 0; i < input.length; i++) {
  const temp = "e" + input[i].trim() + "e";
  board.push(temp.split(""));
}
board.push("e".repeat(m + 2).split(""));
const visited = Array.from(Array(n + 2), () => new Array(m + 2).fill(false));
const queue = [];

const dx = [-1, 1, 0, 0]; // 상하좌우
const dy = [0, 0, -1, 1];

for (let i = 0; i < n + 2; i++) {
  for (let j = 0; j < m + 2; j++) {
    if (board[i][j] === "F") queue.push([i, j, 0]);
  }
}

for (let i = 0; i < n + 2; i++) {
  for (let j = 0; j < m + 2; j++) {
    if (board[i][j] === "J") {
      queue.push([i, j, 0]);
      break;
    }
  }
}

function bfs() {
  while (queue.length) {
    const [x, y, depth] = queue.shift();
    if (visited[x][y]) continue;
    visited[x][y] = true;

    for (let i = 0; i < 4; i++) {
      const ddx = x + dx[i];
      const ddy = y + dy[i];
      if (ddx < 0 || ddx >= n + 2 || ddy < 0 || ddy >= m + 2) continue;
      if (board[ddx][ddy] === "#") continue;
      if (board[x][y] === "J" && board[ddx][ddy] === ".") {
        board[ddx][ddy] = "J";
        queue.push([ddx, ddy, depth + 1]);
      }
      if (board[x][y] === "F" && board[ddx][ddy] === ".") {
        board[ddx][ddy] = "F";
        queue.push([ddx, ddy, depth + 1]);
      }
      if (board[x][y] === "J" && board[ddx][ddy] === "e") {
        return depth + 1;
      }
    }
  }
  return "IMPOSSIBLE";
}

console.log(bfs());

// console.log(board.join("\n"));
