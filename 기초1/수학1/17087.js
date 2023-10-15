const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'example.txt'
const input = fs.readFileSync(filePath).toString().trim().split("\n");

function gcd(a, b) {
  while (a % b !== 0) {
      let n = a % b;
      if (n !== 0) {
          a = b;
          b = n;
      }
  }
  return b;
}

const [n, s] = input[0].split(" ").map(Number);
const aArr = input[1].split(" ").map(Number);

const tempArr = [];
for (num of aArr) {
  tempArr.push(Math.abs(num - s));
}

// 동생이 1명일때 예외처리
if (s === 1) {
  console.log(Math.abs(aArr[0] - s));
  return;
}

// tempArr의 모든 값들의 최대공약수가 정답
/*let g = gcd(tempArr[0], tempArr[1]);
for (let i = 1; i < tempArr.length; i++) {
  g = gcd(g, tempArr[i]);
}*/

let g = tempArr[0];
tempArr.forEach((el) => {
  g = gcd(g, el);
});

console.log(g);