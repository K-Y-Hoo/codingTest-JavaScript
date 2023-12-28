const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
const [[n, m], ...input] = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map((el) => el.split(" ").map(Number));

const arr = input.slice(n);
const answer = [];
const table = Array.from(Array(n + 1), () => new Array(n + 1).fill(0));

input.slice(0, n).forEach((row, x) => {
  row.forEach((cell, y) => {
    table[x + 1][y + 1] = cell;
  });
});

for (let i = 1; i <= n; i++) {
  for (let j = 1; j <= n; j++) {
    table[i][j] += table[i - 1][j] + table[i][j - 1] - table[i - 1][j - 1];
  }
}

arr.forEach(([x1, y1, x2, y2]) => {
  answer.push(
    table[x2][y2] -
      table[x1 - 1][y2] -
      table[x2][y1 - 1] +
      table[x1 - 1][y1 - 1]
  );
});

console.log(answer.join("\n"));
