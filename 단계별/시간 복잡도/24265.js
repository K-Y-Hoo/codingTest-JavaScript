const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'example.txt'
const n = fs.readFileSync(filePath).toString().trim();
let num = 0;
for (let i = 1; i <= n-1; i++) {
  num += i;
}

console.log(num);
console.log(2);