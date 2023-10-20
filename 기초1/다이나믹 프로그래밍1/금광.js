const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");
const t = parseInt(input.shift());

for (let i = 0; i < t; i++) {
  const [n, m] = input.shift().split(" ").map(Number);
  let newinput = input.shift().split(" ").map(Number);
  solution(n, m, newinput);
}

function solution(n, m, input) {
  const d = [];
  for (let i = 0; i < input.length; i += m) {
    d.push(input.slice(i, i + m));
  }

  for (let j = 1; j < m; j++) {
    for (let i = 0; i < n; i++) {
      if (i - 1 < 0) {
        d[i][j] = d[i][j] + Math.max(d[i][j - 1], d[i + 1][j - 1]);
      } else if (i + 1 >= n) {
        d[i][j] = d[i][j] + Math.max(d[i][j - 1], d[i - 1][j - 1]);
      } else if (i - 1 >= 0 && i + 1 < n) {
        d[i][j] =
          d[i][j] + Math.max(d[i][j - 1], d[i - 1][j - 1], d[i + 1][j - 1]);
      }
    }
  }
  //console.log(d);
  const answer = [];
  for (let i = 0; i < n; i++) {
    answer.push(d[i][m - 1]);
  }

  console.log(Math.max(...answer));
}
