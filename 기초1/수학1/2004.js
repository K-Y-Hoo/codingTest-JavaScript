const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'example.txt'
const [n, m] = fs.readFileSync(filePath).toString().trim().split(" ").map(Number);

function getNum(num) {
  let two = 0;
  let five = 0;

  for (let i = 2; i <= num; i*=2) {
    two += parseInt(num / i);
  }
  for (let i = 5; i <= num; i*=5) {
    five += parseInt(num / i);
  }
  return [two, five];
}

const [nTwo, nFive] = getNum(n);
const [mTwo, mFive] = getNum(m);
const [nmTwo, nmFive] = getNum(n - m);

const two = nTwo - mTwo - nmTwo;
const five = nFive - mFive - nmFive;
console.log(Math.min(two, five));