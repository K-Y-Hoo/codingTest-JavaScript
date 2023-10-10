const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'example.txt'
const inputs = fs.readFileSync(filePath).toString().trim().split("\n");
const n = parseInt(inputs.shift());
const answer = [];
const result = [];
for (let i = 0; i < n; i++) {
  const [order, value] = inputs[i].trim().split(" ");
  //console.log(order,value);
  
  if (order === 'push_front') {
    result.unshift(value);
  } else if (order === 'push_back') {
    result.push(value);
  } else if (order === 'pop_front') {
    if (!result.length) {
      answer.push(-1);
      continue;
    }
    answer.push(result.shift());
  } else if (order === 'pop_back') {
    if (!result.length) {
      answer.push(-1);
      continue;
    }
    answer.push(result.pop());
  } else if (order === 'size') {
    answer.push(result.length);
  } else if (order === 'empty') {
    if (!result.length) {
      answer.push(1);
      continue;
    }
    answer.push(0);
  } else if (order === 'front') {
    if (!result.length) {
      answer.push(-1);
      continue;
    }
    answer.push(result[0]);
  } else if (order === 'back') {
    if (!result.length) {
      answer.push(-1);
      continue;
    }
    answer.push(result[result.length-1]);
  }
}

console.log(answer.join("\n"));
