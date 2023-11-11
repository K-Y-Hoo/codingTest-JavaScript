const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
let [e, s, m] = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(" ")
  .map(Number);

function solution() {
  let cnt = 1;
  while (true) {
    if ((cnt - e) % 15 === 0 && (cnt - s) % 28 === 0 && (cnt - m) % 19 === 0) {
      console.log(cnt);
      break;
    }
    cnt++;
  }
}
solution();
