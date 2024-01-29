const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'example.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const n = parseInt(input.shift());
const arr = input[0]
  .split(' ')
  .map(Number)
  .sort((a, b) => a - b);

let min = Infinity;
let answer = [];

for (let i = 0; i < n - 2; i++) {
  start = i + 1;
  end = n - 1;

  while (start < end) {
    let total = arr[i] + arr[start] + arr[end];

    if (min > Math.abs(total)) {
      min = Math.abs(total);
      answer = [arr[i], arr[start], arr[end]];
    }

    if (total > 0) end--;
    else start++;
  }
}

console.log(answer.join(' '));
