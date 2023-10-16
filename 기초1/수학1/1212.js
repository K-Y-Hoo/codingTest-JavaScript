const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'example.txt'
const input = fs.readFileSync(filePath).toString().trim();

let answer = '';
answer = input[0] === '0' ? '0' : parseInt(input[0], 8).toString(2); 

for (let i = 1; i < input.length; i++) {
  answer += parseInt(input[i], 8).toString(2).padStart(3, '0');
}

console.log(answer);


