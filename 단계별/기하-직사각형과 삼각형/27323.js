const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'example.txt'
const [a,b] = fs.readFileSync(filePath).toString().trim().split("\n").map(Number);
console.log(a * b);