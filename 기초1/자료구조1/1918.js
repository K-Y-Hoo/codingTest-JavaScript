const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'example.txt'
const split = fs.readFileSync(filePath).toString().trim().split("");
const stack = [];
let answer = '';

for (let i = 0; i < split.length; i++) {
  const str = split[i];

  if (str === '(') {
    stack.push(str);
  } else if (str === ')') {
    while (stack.length && stack[stack.length-1] !== '(') {
      answer += stack.pop();
    }
    stack.pop();
  } else if (str === '*' || str === '/') {
    while (stack.length && stack[stack.length-1] === '*' || stack[stack.length-1] === '/') {
      answer += stack.pop();
    }
    stack.push(str);
  } else if (str === '+' || str === '-') {
    while (stack.length && stack[stack.length-1] !== '(') {
      answer += stack.pop();
    }
    stack.push(str);
  } else {
    answer += str;
  }
  console.log(stack)
  console.log(answer);
}

while (stack.length) {
  answer += stack.pop();
}

console.log(answer);