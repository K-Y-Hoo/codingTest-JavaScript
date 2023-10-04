const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'example.txt'
const input = fs.readFileSync(filePath).toString().trim().split(" ");
const N = Number(input[0]);

for (let i = 1; i <= (2 * N - 1); i++) {
  let answer = '';
  for (let j = 0; j < Math.abs(N-i); j++) {
    answer += ' ';
  }
  for (let k = 1; k <= (2 * N - 1) - Math.abs((N-i)*2); k++) {
    answer += '*';
  }
  /*for (let j = 0; j < Math.abs(N-i); j++) {
    answer += ' ';
  }*/

  console.log(answer);
}

