const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");
const n = parseInt(input.shift());
const A = input.shift().split(" ").map(Number);
const B = input.shift().split(" ").map(Number);
A.sort((a, b) => a - b);
B.sort((a, b) => b - a);

let sum = 0;
for (let i = 0; i < n; i++) {
  sum += A[i] * B[i];
}

console.log(sum);
