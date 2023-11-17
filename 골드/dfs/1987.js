const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");
const [n, m] = input.shift().split(" ").map(Number);
const board = input.map((v) => v.trim().split(""));
const visited = new Array(26).fill(false);
const dx = [-1, 1, 0, 0]; // 상하좌우
const dy = [0, 0, -1, 1];

let maxDepth = 0;

function dfs(depth, x, y) {
  // visited[x][y] = true;
  maxDepth = Math.max(maxDepth, depth);
  for (let i = 0; i < 4; i++) {
    let ddx = x + dx[i];
    let ddy = y + dy[i];
    if (
      ddx >= 0 &&
      ddx < n &&
      ddy >= 0 &&
      ddy < m &&
      !visited[board[ddx][ddy].charCodeAt() - 65]
    ) {
      visited[board[ddx][ddy].charCodeAt() - 65] = true;
      dfs(depth + 1, ddx, ddy);
      visited[board[ddx][ddy].charCodeAt() - 65] = false;
    }
  }
}
visited[board[0][0].charCodeAt() - 65] = true;
dfs(1, 0, 0);
console.log(maxDepth);
