const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
const input = fs.readFileSync(filePath).toString().trim();
const result = new Array(10).fill(0);

function calc(start, end, ten) {
  const count = Math.floor(end / 10) - Math.floor(start / 10) + 1;
  result.forEach((el, i) => (result[i] += count * ten));
}

function inc(num, ten) {
  while (num > 0) {
    result[num % 10] += ten;
    num = Math.floor(num / 10);
  }
}

function solve(start, end, ten) {
  while (start % 10 !== 0 && start <= end) {
    inc(start, ten);
    start++;
  }

  if (start > end) return;

  while (end % 10 !== 9 && end >= start) {
    inc(end, ten);
    end--;
  }

  calc(start, end, ten);
  solve(Math.floor(start / 10), Math.floor(end / 10), ten * 10);
}

solve(1, input, 1);
let answer = "";
for (s of result) {
  answer = answer + s + " ";
}

console.log(answer);
