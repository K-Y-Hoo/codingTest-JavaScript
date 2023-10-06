const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'example.txt'
const inputs = fs.readFileSync(filePath).toString().trim().split(" ");
n = Number(inputs[0]);
let dot = 2;

for (let i = 0; i < n; i++) {
  dot += Math.pow(2, i);
};
console.log(Math.pow(dot, 2));