const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'example.txt'
const inputs = fs.readFileSync(filePath).toString().trim().split("");
/*let temp = [];
temp.push(inputs[0]);
for (let i = 1; i < inputs.length; i++) {
  if (temp[temp.length-1] === '(' && inputs[i] === ')') {
    temp.pop();
    temp.push('*');
    continue;
  }
  temp.push(inputs[i]);
}
console.log(temp.join(""));
let total = 0;
let answer = 0;
for (let i = 0; i < temp.length; i++) {
  if (temp[i] === '(') {
    let validCount = 1;
    let j = 1;

    while (true) {
      if (temp[i+j] === '(') {
        validCount++;
      } else if (temp[i+j] === ')') {
        validCount--;
      } else if (temp[i+j] === '*') {
        answer++;
      }
      j++;
      if (validCount === 0) {
        total++;
        break;
      }
    }
  }
}
console.log(answer+total);*/

const splitExpression = inputs
console.log(splitExpression);
let bar = [];
let answer = 0;

for (let i = 0; i < splitExpression.length; i++) {
  const str = splitExpression[i];
  if (str === '(' && splitExpression[i+1] === ')') {
    answer += bar.length;
    i++;
  } else if (str === '(') {
    bar.push(str);
  } else if (str === ')') {
    bar.pop();
    answer++;
  }
}
console.log(answer);