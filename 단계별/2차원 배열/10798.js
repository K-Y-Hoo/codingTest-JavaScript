const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'example.txt'
const input = fs.readFileSync(filePath).toString().trim().split("\n");
const max = Math.max(...input.map(i => i.length));
let answer = '';

for (let i = 0; i < max; i++) {
  for (let j = 0; j < input.length; j++) {
    answer += input[j][i] || "";
  }
}
console.log(answer);