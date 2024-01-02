const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
const [f, s, g, u, d] = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(" ")
  .map(Number);

function bfs(top, start, end, up, down) {
  const visited = Array(top + 1).fill(0);
  let result = 0;
  while (true) {
    if (visited[start]) return "use the stairs";
    visited[start] = 1;
    if (start === end) return result;
    else if (start < end) {
      if (start + up <= top) start += up;
      else if (start - down >= 1) start -= down;
    } else if (start > end) {
      if (start - down >= 1) start -= down;
      else if (start + up <= top) start += up;
    }
    result += 1;
  }
}

console.log(bfs(f, s, g, u, d));
