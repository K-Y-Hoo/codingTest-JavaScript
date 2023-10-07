const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'example.txt'
const n = fs.readFileSync(filePath).toString().trim();

console.log(n**2);
console.log(2);