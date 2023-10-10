const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'example.txt'
const inputs = fs.readFileSync(filePath).toString().trim().split("\n");
const n = parseInt(inputs.shift());
const result = [];
const answer = [];
for (let i = 0; i < n; i++) {
  const [order, value] = inputs[i].trim().split(" ");
  if (order === 'push') {
    result.push(value);
  } else if (order === 'pop') {
    if (result.length === 0) {
      answer.push(-1);
      continue;
    }
    answer.push(result.shift());
  } else if (order === 'size') {
    answer.push(result.length);
  } else if (order === 'empty') {
    if (result.length === 0) {
      answer.push(1);
    } else {
      answer.push(0);
    }
    
  } else if (order === 'front') {
    if (result.length === 0) {
      answer.push(-1);
      continue;
    }
    answer.push(result[0]);
  } else if (order === 'back') {
    if (result.length === 0) {
      answer.push(-1);
      continue;
    }
    answer.push(result[result.length-1]);
  }
}

console.log(answer.join("\n"));