const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'example.txt'
const input = fs.readFileSync(filePath).toString().trim().split(" ").map(Number);
let n = input[0];

function factorial(n) {
  if (n === 1) {
    return 1;
  } else {
    return n * factorial(n-1);
  }
}

if (n === 0) {
  console.log(1);
} else {
  console.log(factorial(n));
}