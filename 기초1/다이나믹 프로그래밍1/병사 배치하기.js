const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");
const n = parseInt(input.shift());
const arr = input[0].split(" ").map(Number);
arr.reverse();
const d = new Array(n + 1).fill(1);

for (let i = 1; i < n; i++) {
  for (let j = 0; j < i; j++) {
    if (arr[j] < arr[i]) {
      d[i] = Math.max(d[i], d[j] + 1);
    }
  }
}
//console.log(d);
console.log(n - Math.max(...d));
