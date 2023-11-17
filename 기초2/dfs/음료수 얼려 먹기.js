const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");
const [n, m] = input.shift().split(" ").map(Number);
let graph = input.map((v) => v.trim().split("").map(Number));
//const visited = Array.from(Array(n), () => new Array(m).fill(false));

let answer = 0;
const dx = [-1, 1, 0, 0]; // 상하좌우
const dy = [0, 0, -1, 1];

function dfs(graph, x, y) {
  if (x < 0 || x >= n || y < 0 || y >= m) {
    return false;
  }

  if (graph[x][y] === 0) {
    graph[x][y] = 1;
    for (let i = 0; i < 4; i++) {
      let ddx = x + dx[i];
      let ddy = y + dy[i];
      dfs(graph, ddx, ddy);
    }
    return true;
  }
  return false;
}

for (let i = 0; i < n; i++) {
  for (let j = 0; j < m; j++) {
    if (dfs(graph, i, j) === true) {
      //console.log(i, j);
      answer++;
    }
  }
}
console.log(answer);
