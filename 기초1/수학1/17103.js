const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'example.txt'
const input = fs.readFileSync(filePath).toString().trim().split('\n').map(Number);
const t = input.shift();

let maxNum = Math.max(...input);

let check = new Array(maxNum + 1).fill(false);
for (let i = 2; i <= maxNum; i++) {
  if (!check[i]) {
    for (let j = i * i; j <= maxNum; j += i) {
      check[j] = true;
    }
  }
}
console.log(check);
let result = [];

input.map((x) => {
  let tmp = 0;
  let y = Math.ceil(x / 2);
  if (x === 4) tmp = 1;
  else {
    for (let i = 3; i <= y; i += 2) {
      if (!check[i] && !check[x - i] && x - i != 1) {
        tmp++;
      }
    }
  }
  result.push(tmp);
});

console.log(result.join("\n"));





/*let maxNum = Math.max(...input);

let prime = new Array(maxNum + 1).fill(true);
prime[0] = false;
prime[1] = false;
for (let i = 2; i <= (maxNum / 2); i++) {
  if (prime[i]) {
    for (let j = 2; j <= (maxNum / 2); j++) {
      if (i * j <= maxNum + 1) {
        prime[i * j] = false;
      }
    }
  }
}

for (let i = 0; i < input.length; i++) {
  let count = 0;
  for (let j = 0; j <= (input[i]/2); j++) {
    if (prime[j] && prime[input[i]-j]) {
      count++;
    }
  }
  answer.push(count);
}


console.log(answer.join('\n'));
*/





/* function findPrime(n) {
  let answer = 0;
  const prime = [];
  const arr = Array(n).fill(0);

  for (let i = 2; i <= n; i++) {
    arr[i] = i;
  }

  for (let i = 2; i <= n; i++) {
    if (arr[i] === 0) continue;
    prime.push(i);
    arr[i] = 0;
  
    for (let j = i * 2; j <= n; j += i) {
      if (arr[j] === 0) continue;
      arr[j] = 0;
    }
  }
  return prime;
}
primeArr = findPrime(Math.max(...input));


for (let i = 0; i < t; i++) {
  let num = parseInt(input[i]);
  //primeArr = findPrime(num);
  let count = 0;
  //console.log(num, primeArr)
  for (let m = 0; m < primeArr.length; m++) {
    for (let n = 0; n < primeArr.length; n++) {
      if (primeArr[m] + primeArr[n] === num && primeArr[m] === primeArr[n]) {
        count+=2;
      } else if (primeArr[m] + primeArr[n] === num) {
        count++;
      }
    }
  }
  answer.push(count/2);
}
*/

