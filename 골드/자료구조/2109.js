const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");
const n = parseInt(input.shift());
if (n === 0) {
  console.log(0);
  return;
}

const arr = input.map((el) => el.trim().split(" ").map(Number));

arr.sort((a, b) => {
  return b[0] - a[0];
});

const visited = new Array(10001).fill(false);
let answer = 0;
for (let i = 0; i < n; i++) {
  for (let j = arr[i][1]; j > 0; j--) {
    if (!visited[j]) {
      answer += arr[i][0];
      visited[j] = true;
      break;
    }
  }
}

console.log(answer);
