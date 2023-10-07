const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'example.txt'
const n = fs.readFileSync(filePath).toString().trim();

console.log(1);
console.log(0);