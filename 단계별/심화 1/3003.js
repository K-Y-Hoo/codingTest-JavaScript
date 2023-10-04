const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'example.txt'
const input = fs.readFileSync(filePath).toString().trim().split(" ").map(el => Number(el));
const settled = [1,1,2,2,2,8];

let answer = settled.map((el, idx) => el - input[idx]);
console.log(answer.join(' '));