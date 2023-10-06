const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'example.txt'
let n = fs.readFileSync(filePath).toString();
n = Number(n);

if (n === 1) {
  return;
}
const arr = [];
for (let i = 2; i <= n; i++) {
  while (n % i === 0) {
    n = n / i;
    arr.push(i);
  }
  if (n === 1) break;
}

arr.forEach(num => console.log(num));