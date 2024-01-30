const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'example.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');
const board = input.map((el) => el.trim().split(' ').map(Number));

const answer = new Set();

function dfs(x, y, text = '') {
  if (text.length === 6) {
    answer.add(text);
    return;
  }
  const newText = text + board[x][y];

  if (x - 1 >= 0) dfs(x - 1, y, newText);
  if (x + 1 < 5) dfs(x + 1, y, newText);
  if (y - 1 >= 0) dfs(x, y - 1, newText);
  if (y + 1 < 5) dfs(x, y + 1, newText);
}

for (let i = 0; i < 5; i++) {
  for (let j = 0; j < 5; j++) {
    dfs(i, j);
  }
}

console.log(answer.size);
