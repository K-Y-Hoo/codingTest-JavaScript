const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'example.txt'
const input = fs.readFileSync(filePath).toString().trim();
let n = parseInt(input);

let temp = n;
let remainder = 0;
let answer = [];

while (temp/-2 !== 0) {
  remainder = temp % -2;
  if (remainder === -1 || remainder === 1) {
    temp = Math.floor(temp/-2) + 1;
    answer.push(1);
  } else if (remainder === 0) {
    temp = Math.floor(temp/-2);
    answer.push(0);
  }
}

console.log(answer.length === 0 ? 0 : answer.reverse().join(""));