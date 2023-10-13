const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'example.txt'
const input = fs.readFileSync(filePath).toString().trim().split(" ").map(Number);
let n = input[0];
let result = 0;
function factorial(n) {
  if (n === 0 || n === 1) {
    return 1n;
  } else {
    return BigInt(n) * factorial(n-1);
  }
}

result = factorial(n);


const arr = String(result).split("");
let count = 0;
for (let i = arr.length-1; i > 0; i--) {
  if (arr[i] === '0') {
    count++;
  } else {
    break;
  }
}

console.log(count);