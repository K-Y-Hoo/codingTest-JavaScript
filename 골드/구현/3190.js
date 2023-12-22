const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");
//벽 또는 자신의 몸과 부딪히면 break

const n = parseInt(input.shift());
const board = Array.from(Array(n), () => new Array(n).fill(0));

const k = parseInt(input.shift());
for (let i = 0; i < k; i++) {
  const [x, y] = input.shift().trim().split(" ").map(Number);
  board[x - 1][y - 1] = 2;
}

const l = parseInt(input.shift());
const order = input.map((el) => el.trim().split(" "));

const direction = [
  [0, 1],
  [1, 0],
  [0, -1],
  [-1, 0],
]; // 오른쪽 아래 왼쪽 위
let directIdx = 0;
let time = -1;
const q = [];
q.push([0, 0]);

while (true) {
  time++;
  for (let i = 0; i < order.length; i++) {
    if (time === parseInt(order[i][0])) {
      if (order[i][1] === "D") {
        directIdx = (directIdx + 1) % 4;
      } else if (order[i][1] === "L") {
        directIdx = (directIdx + 3) % 4;
      }
    }
  }
  const [x, y] = q[q.length - 1];
  // console.log(x, y);
  const dx = direction[directIdx][0];
  const dy = direction[directIdx][1];
  const ddx = x + dx;
  const ddy = y + dy;
  if (ddx < 0 || ddx >= n || ddy < 0 || ddy >= n) break;
  if (board[ddx][ddy] === 1) break;

  if (board[ddx][ddy] === 0) {
    const [tx, ty] = q.shift();
    board[tx][ty] = 0;
  }

  q.push([ddx, ddy]);
  board[ddx][ddy] = 1;
  // console.log(q);
}

console.log(time + 1);
// console.log(board.join("\n"));
