const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
const input = fs.readFileSync(filePath).toString().trim();
const n = parseInt(input);
const answer = Array.from(Array(n * 4 - 3), () =>
  new Array(n * 4 - 3).fill(" ")
);
// console.log(answer.join("\n"));
function recur(n, x, y) {
  let length = n * 4 - 3;
  if (length === 1) {
    answer[x][y] = "*";
    return;
  }
  for (let i = 0; i < length; i++) {
    answer[x][y + i] = "*";
    answer[y + i][x] = "*";
    answer[x + length - 1][y + i] = "*";
    answer[x + i][y + length - 1] = "*";
  }
  // console.log(answer.join("\n"));
  recur(n - 1, x + 2, y + 2);
}
recur(n, 0, 0);
console.log(answer.map((el) => el.join("")).join("\n"));
