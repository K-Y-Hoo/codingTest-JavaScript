const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");
const n = parseInt(input.shift());
const arr = input[0].split(" ").map(Number);

const increase = new Array(n).fill(1);
const decrease = new Array(n).fill(1);

for (let i = 1; i < n; i++) {
  const current = arr[i];
  let count = 1;
  for (let j = 0; j < i; j++) {
    const before = arr[j];
    if (current > before) count = Math.max(count, increase[j] + 1);
  }
  increase[i] = count;
}

for (let i = n - 2; i >= 0; i--) {
  const current = arr[i];
  let count = 1;
  for (let j = i + 1; j < n; j++) {
    const before = arr[j];
    if (current > before) count = Math.max(count, decrease[j] + 1);
  }
  decrease[i] = count;
}

const answer = increase.map((value, index) => value + decrease[index]);
console.log(Math.max(...answer) - 1);
