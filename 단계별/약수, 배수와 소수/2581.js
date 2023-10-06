const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'example.txt'
const [a,b] = fs.readFileSync(filePath).toString().trim().split("\n").map(Number);

const result = [];
for (let i = a; i<=b; i++) {
  let temp = 0;
  for (let j = 2; j <= i; j++) {
    if (i % j === 0) {
      temp++;
    }
  }
  if (temp === 1) {
    result.push(i);
  }
}

if (result.length === 0) {
  console.log(-1);
  return;
}

let sum = result.reduce((acc, el) => {return acc + el}, 0);
console.log(sum);
console.log(result[0]);