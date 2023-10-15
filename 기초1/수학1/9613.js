const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'example.txt'
const input = fs.readFileSync(filePath).toString().trim().split("\n");
const t = input.shift();


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

const sumArr = [];
for (let i = 0; i < t; i++) {
  numArr = input[i].trim().split(" ").map(Number);
  let num = numArr.shift();
  numArr.sort((a,b) => b-a);
  let sum = 0;
  for (let j = 0; j < numArr.length; j++) {
    for (let k = j+1; k < numArr.length; k++) {
      sum += gcd(numArr[j], numArr[k]); 
    }
  }
  sumArr.push(sum);
}

console.log(sumArr.join("\n"));