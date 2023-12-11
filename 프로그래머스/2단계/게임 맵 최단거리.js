function solution(maps) {
  const dx = [-1, 1, 0, 0];
  const dy = [0, 0, -1, 1];
  const queue = [];
  const n = maps.length;
  const m = maps[0].length;
  const visited = Array.from(Array(n), () => new Array(m).fill(false));

  function bfs(x, y) {
    queue.push([x, y]);
    while (queue.length) {
      const [x, y] = queue.shift();
      if (visited[x][y]) continue;

      for (let i = 0; i < 4; i++) {
        const ddx = x + dx[i];
        const ddy = y + dy[i];
        if (ddx < 0 || ddx >= n || ddy < 0 || ddy >= m) continue;
        if (visited[ddx][ddy]) continue;
        if (maps[ddx][ddy] === 0) continue;
        if (maps[ddx][ddy] === 1) {
          maps[ddx][ddy] = maps[x][y] + 1;
          queue.push([ddx, ddy]);
        }
      }
    }
  }
  bfs(0, 0);
  if (maps[n - 1][m - 1] === 1) {
    return -1;
  } else {
    return maps[n - 1][m - 1];
  }
}
