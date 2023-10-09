const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'example.txt'
let inputs = fs.readFileSync(filePath).toString().trim().split("\n");
let n = parseInt(inputs.shift());
const result = [];
const answer = [];
for (let i = 0; i < n; i++) {
  let order = inputs[i].trim().split(" ")[0];
  let element = parseInt(inputs[i].split(" ")[1]);
  if (order === 'push') {
    result.push(element);
  } else if (order === 'top') {
    if (result.length === 0) {
      answer.push(-1);
    } else {
      answer.push(result[result.length-1]);
    }
  } else if (order === 'size') {
    answer.push(result.length);
  } else if (order === 'empty') {
    if (result.length === 0) {
      answer.push(1);
    } else {
      answer.push(0);
    }
  } else if (order === 'pop') {
    if (result.length === 0) {
      answer.push(-1);
    } else {
      answer.push(result.pop());
    }
  }
}

console.log(answer.join('\n'));