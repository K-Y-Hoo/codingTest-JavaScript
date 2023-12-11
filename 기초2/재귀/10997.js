const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
const input = fs.readFileSync(filePath).toString().trim();
const n = parseInt(input);
const answer = Array.from(Array(n * 4 - 1), () =>
  new Array(n * 4 - 3).fill(" ")
);
if (n === 1) {
  console.log("*");
  return;
}
function recur(n, x, y) {
  let length = n * 4 - 3;
  let length2 = n * 4 - 1;
  if (length === 1) {
    for (let i = 0; i < 3; i++) {
      answer[x + i][y] = "*";
    }
    return;
  }
  for (let i = 0; i < length; i++) {
    answer[x][y + i] = "*";
    answer[x + length2 - 1][y + i] = "*";
  }
  for (let i = 2; i < length2; i++) {
    answer[x + i][y + length - 1] = "*";
  }
  for (let i = 0; i < length2; i++) {
    answer[y + i][x] = "*";
  }
  answer[x + 2][y + length - 2] = "*";
  recur(n - 1, x + 2, y + 2);
}

recur(n, 0, 0);
// console.log(answer.map((el) => el.join("")).join("\n"));
console.log("*".repeat(n * 4 - 3));
console.log("*");
for (let i = 2; i < n * 4 - 1; i++) {
  console.log(answer[i].join(""));
}
