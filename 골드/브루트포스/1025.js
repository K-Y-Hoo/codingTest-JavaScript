const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
const [info, ...input] = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");
const [n, m] = info.split(" ").map(Number);
const board = input.map((el) => el.trim().split("").map(Number));
let answer = -1;

for (let i = 0; i < n; i++) {
  for (let j = 0; j < m; j++) {
    for (let row = -n; row < n; row++) {
      for (let col = -m; col < m; col++) {
        if (row === 0 && col === 0) continue;
        let t = 0;
        let x = i;
        let y = j;

        while (x >= 0 && x < n && y >= 0 && y < m) {
          t = 10 * t + board[x][y];
          if (Math.abs(Math.sqrt(t) - parseInt(Math.sqrt(t))) < 1e-10)
            answer = Math.max(answer, t);
          x += row;
          y += col;
        }
      }
    }
  }
}
console.log(answer);
