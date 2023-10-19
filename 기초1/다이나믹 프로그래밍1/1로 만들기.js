const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
const input = fs.readFileSync(filePath).toString();
let x = parseInt(input);
const d = new Array(30001).fill(0);

for (let i = 2; i < x + 1; i++) {
  d[i] = d[i - 1] + 1;
  if (i % 2 === 0) {
    d[i] = Math.min(d[i], d[i / 2] + 1);
  }
  if (i % 3 === 0) {
    d[i] = Math.min(d[i], d[i / 3] + 1);
  }
  if (i % 5 === 0) {
    d[i] = Math.min(d[i], d[i / 5] + 1);
  }
}

console.log(d[x]);
