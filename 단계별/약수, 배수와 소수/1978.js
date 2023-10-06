const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'example.txt'
const [n, input] = fs.readFileSync(filePath).toString().trim().split("\n");
const arr = input.split(" ").map(Number);

let cnt = 0;

for (num of arr) {
  let temp = 0;
  for (let i = 2; i<=num; i++) {
    if (num % i === 0) {
      temp++;
    }
  }
  if (temp === 1) {
    cnt++;
  }
}

console.log(cnt);