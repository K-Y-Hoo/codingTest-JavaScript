const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'example.txt'
const inputs = fs.readFileSync(filePath).toString().trim().split("\n");
const [n, ...nums] = inputs;
const numbers = nums.map(el => Number(el));

function solution(n, numbers) {
  const stack = [];
  let answer = '';
  let count = 1;
  for (let i = 0; i < n; i++) {
    const number = numbers.shift();
    while (count <= number) {
      stack.push(count++);
      console.log(stack);
      answer += '+ ';
    }
    const poped = stack.pop();
    if (poped !== number) {
      return 'NO';
    }
    answer += '- ';
  }
  return answer.split(' ').join('\n');
}

const result = solution(n, numbers);
console.log(result);







/*const arr = [];
const inputArr = [];
for (let i = 0; i < n; i++) {
  inputArr.push(parseInt(inputs[i].trim().split(" ")[0]));
}

for (let i = 0; i < n; i++) {
  num++;
  arr.push('+');
  if (num === inputArr[0]) {
    arr.push('-')
    break;
  }
}

for (let i = 0; i < n-1; i++) {
  let count = 0;
  if (inputArr[i] > inputArr[i+1]) {
    for (let j = 0; j < n; j++) {
      count--;
      let minusNum = num + count;
      if (minusNum === inputArr[i+1]) {
        arr.push('-');
        break;
      } 
    }
  } else if (inputArr[i] < inputArr[i+1]) {
    for (let k = 0; k < n; k++) {
      num++;
      arr.push('+');
      if (num === inputArr[i+1]) {
        arr.push('-')
        break;
      }
    }
  }
}

let plusCnt = 0;
let minusCnt = 0;
for (element of arr) {
  if (element === '+') {
    plusCnt++;
  } else {
    minusCnt++;
  }
}

if (plusCnt === minusCnt) {
  console.log(arr.join("\n"));
} else {
  console.log('NO');
}*/