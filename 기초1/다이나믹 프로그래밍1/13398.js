const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");
const n = parseInt(input.shift());
const arr = input[0].split(" ").map(Number);
const d = new Array(n).fill(0);
const d2 = new Array(n).fill(0);
d[0] = arr[0];
d2[0] = arr[0];
for (let i = 1; i < n; i++) {
  d[i] = Math.max(d[i - 1] + arr[i], arr[i]);
}
const a = Math.max(...d);
for (let i = 1; i < n; i++) {
  d2[i] = Math.max(d[i - 1], d2[i - 1] + arr[i]);
}

const b = Math.max(...d2);
console.log(Math.max(a, b));
