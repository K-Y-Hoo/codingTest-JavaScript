const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");
const n = parseInt(input.shift());
const arr = input[0].split(" ").map(Number);
const d = new Array(n).fill(0);
d[0] = arr[0];
for (let i = 1; i < n; i++) {
  d[i] = Math.max(d[i - 1] + arr[i], arr[i]);
}
console.log(Math.max(...d));
