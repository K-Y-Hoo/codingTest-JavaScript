const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'example.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const n = parseInt(input.shift());
const f = parseInt(input.shift());
let answer = 0;
let number = ((n / 100) | 0) * 100;
while (true) {
  if (number % f === 0) {
    answer = number;
    break;
  } else {
    number++;
  }
}

console.log(('' + answer).slice(-2));
