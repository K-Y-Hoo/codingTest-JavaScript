const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const n = parseInt(input.shift());
const board = Array.from(Array(101), () => new Array(101).fill(false));
let answer = 0;
const dir = [
  [0, 1],
  [-1, 0],
  [0, -1],
  [1, 0],
];

const arr = input.map((el) => el.trim().split(" ").map(Number));

arr.forEach((el) => {
  const [x, y, d, g] = el;
  board[y][x] = true;
  let curX = x;
  let curY = y;
  let curD = d;
  let curG = 0;
  let prev = [[y, x]];

  while (curG <= g) {
    if (curG === 0) {
      curX += dir[curD][1];
      curY += dir[curD][0];
      prev.push([curY, curX]);
      board[curY][curX] = true;
    } else {
      for (let i = prev.length - 2; i >= 0; i--) {
        const [prevY, prevX] = prev[i];
        const newX = curX - (prevY - curY);
        const newY = prevX - curX + curY;
        board[newY][newX] = true;
        prev.push([newY, newX]);
      }
      curX = prev[prev.length - 1][1];
      curY = prev[prev.length - 1][0];
    }
    curG++;
    curD = (curD + 1) % 4;
  }
});

for (let i = 0; i < 100; i++) {
  for (let j = 0; j < 100; j++) {
    if (
      board[i][j] &&
      board[i + 1][j] &&
      board[i + 1][j + 1] &&
      board[i][j + 1]
    )
      answer++;
  }
}

console.log(answer);
