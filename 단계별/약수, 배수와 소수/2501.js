const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'example.txt'
const [n, k] = fs.readFileSync(filePath).toString().trim().split(" ").map(Number);

const answer = [];
for (let i = 1; i <= n; i++) {
  if (n % i === 0) {
    answer.push(i);
  }
}

if (answer.length < k) {
  console.log(0);
  return;
}

console.log(answer[k-1]);