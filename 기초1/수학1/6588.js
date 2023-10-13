const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'example.txt'
const input = fs.readFileSync(filePath).toString().trim().split("\n").map(Number);
input.pop();

let answer = "";
const max = Math.max(...input);
let isPrime = new Array(max+1).fill(true);
isPrime[0] = false;
isPrime[1] = false;

for(let i = 2; i*i < max; i++) {
  if (isPrime[i]) {
    let multi = 2;
  
    while (i * multi < max) {
      isPrime[i * multi] = false;
      multi++;
    }
  }
}

input.map((item) => {
  let result = false;
  for (let i = 3; i <= item; i++) {
    if (isPrime[i] && isPrime[item-i]) {
      answer += `${item} = ${i} + ${item - i}\n`;
      result = true;
      break;
    }
  }
  if (!result) {
  answer += `Goldbach's conjecture is wrong.\n`;
  }
});

console.log(answer);