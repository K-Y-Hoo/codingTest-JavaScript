const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'example.txt'
const inputs = fs.readFileSync(filePath).toString().trim().split("\n");

function sol(inputs) {
  [size, ...arr] = inputs;
  [row, col] = size.split(' ').map(Number);
  arr = arr.map(str => str.trim('\r').split(''));
  const answer = [];
  const line = ['WBWBWBWB', 'BWBWBWBW'];

  for (let i = 0; i <= row - 8; i++) {
    for (let j = 0; j <= col - 8; j++) {
      for (let k = 0; k < 2; k++) {
        let count = 0;
        for (let x = 0; x < 8; x++) {
          for (let y = 0; y < 8; y++) {
            const current = arr[i+x][j+y];
            if (current !== line[(x + k) % 2][y]) {
              count++;
            }
          }
        }
        answer.push(count);
      }
    }
  }
  return Math.min(...answer);
}
console.log(sol(inputs));