const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'example.txt'
const input = fs.readFileSync(filePath).toString().trim().split("\n");
const n = input.shift();
answer = [];

for (let c = 0; c < n; c++) {
  const [a, b] = input[c].split(" ").map(Number);
  answer.push(a*b/gcd(a,b));
}

console.log(answer.join('\n'));

function gcd(a, b) {
  let i = a;
  let j = b;

  while(i % j !== 0) {
    let n = i % j;
    if (n !== 0) {
      i = j;
      j = n;
    }
  }
  return j;
}