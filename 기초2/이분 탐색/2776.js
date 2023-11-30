const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");
const t = parseInt(input.shift());

for (let i = 0; i < t; i++) {
  const n = parseInt(input.shift());
  const note1 = input.shift().split(" ").map(Number);
  note1.sort((a, b) => a - b);
  const m = parseInt(input.shift());
  const note2 = input.shift().split(" ").map(Number);
  let answer = [];
  let cnt = 0;
  for (x of note2) {
    let start = 0;
    let end = n - 1;
    while (start <= end) {
      let mid = Math.floor((start + end) / 2);
      if (note1[mid] === x) {
        answer.push(1);
        break;
      } else if (note1[mid] > x) end = mid - 1;
      else start = mid + 1;
    }
    cnt++;
    if (answer.length !== cnt) {
      answer.push(0);
    }
  }
  console.log(answer.join("\n"));
}
